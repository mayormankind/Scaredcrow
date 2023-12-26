import './App.css';
import Layout from './Components/Layout';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AllProjects from './Pages/AllProjects';
import DesignDetail from './Pages/DesignDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Layout/>}/>
        <Route path='/projects' element={<AllProjects/>}/>
        <Route path='/project' element={<DesignDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
