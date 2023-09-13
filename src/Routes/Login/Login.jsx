import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../img/twitter-icon-18-256.png";
import Modal from "../../Components/Modal/Modal";
import Button from "../../Components/Button/Button";
import Backdrop from "../../Components/Modal/Backdrop";

const Login = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  // const navigate = useNavigate();

  const loginOptions = (content) => {
    setShowModal(true);
    setModalContent(content);
  };

  const hideModal = () => {
    setShowModal(false);
    return;
  };

  // FOR LATER:
  // Navigate to homepage if user login is correct/when account is created.
  /*   const goToHome = () => {
    navigate("/home");
  } */ return (
    <div className="login-container">
      <div className="logo-box">
        <img src={logo} alt="twitter logo" />
      </div>

      <div className="login-box">
        <h1 className="title">Happening now</h1>
        <h1>Join today.</h1>
        <Button command={() => loginOptions("google")} class="twitter-white">
          Register with Google
        </Button>
        <div className="break-container">
          <div className="break"></div>
          <div>or</div>
          <div className="break"></div>
        </div>

        <Button command={() => loginOptions("create")} class="twitter-blue">
          Create an account
        </Button>
        <h4>Already have an account?</h4>
        <Button command={() => loginOptions("login")} class="twitter-black">
          Login
        </Button>
      </div>
      {showModal && (
        <Modal
          titleTxt={
            modalContent === "google"
              ? "Register with Google"
              : modalContent === "create"
              ? "Register with email"
              : "Login"
          }
          btnText={
            modalContent === "google" || "create" ?
            "Register" : "Login"
          }
          class="twitter-white"
          command={hideModal}
          modalContent={modalContent}
        />
      )}
      {showModal && <Backdrop show hideModal={hideModal} />}
    </div>
  );
};

export default Login;
