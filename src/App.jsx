import './App.css';
import Layout from './Components/Layout';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AllProjects from './Pages/AllProjects';
import DesignDetail from './Pages/DesignDetail';
import About from './Pages/About';
import Services from './Pages/Services';
import NewProject from './Pages/NewProject';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Layout/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Services/>}/>
        <Route path='/portfolio' element={<AllProjects/>}/>
        <Route path='/project/:id' element={<DesignDetail/>}/>
        <Route path='/addnew' element={<NewProject/>}/>
      </Routes>
    </Router>
  );
}

export default App;
