import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyModal from './components/MyModal';
import Approve from './routing/Approve'; 
import Reject  from './routing/Reject';
import Resume  from './routing/Resume'
//import ProfileComp from './components/ProfileComp';

function App() {
  return (
    <div className="App">

      <Router>
      <Routes>
        <Route path="/approve" element={<Approve />} />
        <Route path="/reject" element={<Reject />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <MyModal/>
    </Router>
    </div>
  );
}

export default App;
