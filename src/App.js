import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    },1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#343a40'
      showAlert("Dark Mode is enabled", "success")
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode is enabled", "success")
    }
  }
  return (
    <><Router>
      
      <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter Your Text to Analyze" mode={mode} />}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}
export default App;
