
import './App.css';
import Login from './Formik/Login';
import {useState} from "react"
import Registration from './Formik/Registration';
function App() {

  const [loginState,setLoginState]=useState(true)
  return (
    <div className="App">

     <h1>Formik Form Validation</h1>
     <div className="selection">
     <button  className="lBtn"onClick={() => {setLoginState(true)}}>Login</button>
     <button className="rBtn"  onClick={() => {setLoginState(false)}}>Registration</button>
     </div>
     {loginState && <Login />}
     {!loginState && <Registration />}
    </div>
  );
}

export default App;
