import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';

export const getProjects = (setData)=>{
    const Ref = collection(db,'scaredcrow-design');
    onSnapshot(Ref,(snapshot)=>{
      setData(
        snapshot.docs.map((docs)=>{
          return { ...docs.data()};
        })
      )
    })
  }