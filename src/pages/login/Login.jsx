import "./login.css"
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import LoginForm from "../../components/loginForm/LoginForm";
import { useState } from "react";



const Login = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return(
    <div>
      <Navbar isLoggedIn= {isLoggedIn}  />
      <LoginForm  setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Footer/>
    </div>

  )
}

export default Login