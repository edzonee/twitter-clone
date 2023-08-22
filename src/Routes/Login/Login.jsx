import "./Login.css";
import logo from "../../img/twitter-icon-18-256.png";
import Button from "../../Components/Button";

const Login = (props) => {
  const buttonClick = () => {
    console.log("clicked");
  };

  return (
    <div className="login-container">
      <div className="logo-box">
        <img src={logo} alt="twitter logo" />
      </div>

      <div className="login-box">
        <h1 className="title">Happening now</h1>
        <h1>Join today.</h1>
        <Button command={buttonClick} class="twitter-blue">
          Create an account
        </Button>
        <h4>Already have an account?</h4>
        <Button command={buttonClick} class="twitter-black">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
