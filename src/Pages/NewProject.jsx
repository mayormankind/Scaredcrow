import { Box, Button, Divider, Flex, IconButton, Heading, Input, Text, CheckboxGroup, Stack, Checkbox } from '@chakra-ui/react';
import React, { useState } from 'react';
import { v4 as uuid} from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { store, db } from '../api/firebase';
import { FaHome } from 'react-icons/fa';

export default function NewProject() {
    const [ projectInfo, setProjectInfo ] = useState({});
    const [ images, setImages ] = useState([]);
    const [ checkBoxes, setCheckBoxes ] = useState([]);
    const [ imagesLink, setImagesLink ] = useState([]);

    const options = [
        {value:'photoshop', icon:'SiAdobephotoshop', color:'blue.500'},
        {value:'illustrator', icon:'SiAdobeillustrator', color:'orange.500'},
        {value:'canva', color:'blue.500', icon:'SiCanva'},
        {value:'figma', icon:'FaFigma', color:'blue.500'},
        {value:'pixellab', icon:'SiAdobephotoshop', color:'blue.500'},
        {value:'coreldraw', icon:'FaChrome', color:'green.500'},
        {value:'pinterest', icon:'FaPinterest', color:'red.500'}
    ]

    const selectImages = async (e) =>{
        const imagesSelected = e.target.files;
        const imageArray = Array.from(imagesSelected);
        const promises = imageArray.map(async(image) =>{
            try{
                const imagesRef = ref(store,`samuel/${uuid()}`);
                // await uploadBytesResumable(imagesRef,image);
                const uploadTask = uploadBytesResumable(imagesRef,image);
                uploadTask.on(
                    (err)=>{},
                    ()=>{
                        getDownloadURL(uploadTask.snapshot.ref).then(async(imageURL)=>{
                            setImagesLink((prev)=>[...prev,imageURL]);
                            return imageURL;
                        })
                    }
                )
                // const imageURL = await imagesRef.getDownloadURL();
            }catch(err){
                console.log(err)
                alert('an error occured while uploading images');
                return null;
            }
        })
        const uploaded = await Promise.all(promises);
        setImages((prev)=> [...prev, ...uploaded]);
    }

    const handleBoxes = (option) =>{
        const isSelected = checkBoxes.some(
            (selected) => selected.value === option.value
        );

        if(isSelected){
            setCheckBoxes((prev)=> prev.filter((box)=> box.value !== option.value));
        }else{
            setCheckBoxes((prev)=>[...prev,option]);
        }
    }
    console.log(checkBoxes);
    const addProject = async(e) =>{
        try{
            await setDoc(doc(db, "scaredcrow-design", uuid()), {
                pid:uuid(),
                title: projectInfo.title,
                overview: projectInfo.overview,
                tools: checkBoxes,
                images: imagesLink});
            alert(`Project ${projectInfo.title} uploaded successfully`);
        }catch(err){
            console.log(err)
            alert('an error occured while uploading project');
      }
    }



  return (
    <Flex w='100%' h='100vh' bg='white' pos='relative'>
        <Link to='/'>
            <IconButton icon={<FaHome/>} pos='absolute' top='10px' left='10px' variant='ghost'/>
        </Link>
        <Flex flexDir='column' w='100%' maxW='400px' color='black' m='auto' gap='10px' boxShadow='dark-lg' p='20px' borderRadius={'10px'}>
            <Heading fontSize={{sm:'25px',base:'20px'}} fontWeight='bold' textAlign='center'>Hey Sam, Oko Blessing!</Heading>
            <Divider/>
            <Flex gap={{sm:'15px',base:'10px'}} flexDir='column' w='100%'>
                <Box>
                    <label style={{fontWeight:'bold'}}>Title</label>
                    <Input size='lg' outline='1px solid orange' type='text' placeholder='Archers...' onChange={(e)=>{setProjectInfo({...projectInfo,title:e.target.value})}} value={projectInfo.title}/>
                </Box>
                <Box>
                    <label style={{fontWeight:'bold'}}>Design Overview</label>
                    <Input size='lg' type='text' outline='1px solid orange' placeholder='I designed this logo for Archers...' onChange={(e)=>{setProjectInfo({...projectInfo,overview:e.target.value})}} value={projectInfo.overview}/>
                </Box>
                <Flex flexDir='column'>
                    <label style={{fontWeight:'bold'}}>Tools used:</label>
                    <CheckboxGroup colorScheme='green'>
                        <Stack justify='space-between' flexWrap='wrap' direction={'row'} gap='10px' p='10px' border='1px solid black'>
                            {options.map((option)=>(
                                <Checkbox value={option.value} size='lg'  checked={checkBoxes.some(
                                    (selected) => selected.value === option.value
                                )} onChange={()=>handleBoxes(option)}textTransform={'capitalize'}>{option.value}</Checkbox>
                                ))}
                        </Stack>
                    </CheckboxGroup>
                </Flex>
                <Input type='file' display='none' id='images' multiple accept={'images/*'} onChange={selectImages}/>
                <label htmlFor='images' style={{fontWeight:'bold',textAlign:'center'}}>Select preview images</label>
                <Button colorScheme='orange' size='lg' _hover={{variant:'outline'}} onClick={addProject}>Add design</Button>
            </Flex>
        </Flex>
    </Flex>
  )
}
