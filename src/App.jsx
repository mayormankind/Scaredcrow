import './App.css';
import Layout from './Components/Layout';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AllProjects from './Pages/AllProjects';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Layout/>}/>
        <Route path='/projects' element={<AllProjects/>}/>
      </Routes>
    </Router>
  );
}

export default App;
