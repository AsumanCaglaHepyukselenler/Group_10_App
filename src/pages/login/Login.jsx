import "./login.css"
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import LoginForm from "../../components/loginForm/LoginForm";


const Login = () => {

  return(
    <div>
      <Navbar/>
      <LoginForm/>
      <Footer/>
    </div>

  )
}

export default Login