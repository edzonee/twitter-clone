import Button from "../Button/Button";
import "./Modal.css"

const Modal = (props) => {
  const modalContent =
    props.modalContent === "google" ? (
      <div>
        <form className="login-options">
          <input className="email" type="text" id="google-user" placeholder="googleid" />
          <input className="username" type="text" id="user-name" placeholder="username" />
          <input className="password" type="password" id="google-password" placeholder="chose pw"/>
        </form>
        {/* ... input fields for Google registration ... */}
      </div>
    ) : props.modalContent === "create" ? (
      <div>
        <form className="login-options">
          <input className="email" type="text" id="email-user" placeholder="email"/>
          <input className="username" type="text" id="user-name" placeholder="username" />
          <input className="password" type="password" id="email-password" placeholder="password"/>
        </form>
        {/* Email Registration Form */}
        {/* ... input fields for email registration ... */}
      </div>
    ) : props.modalContent === "login" ? (
      <div>
        <form className="login-options">
        <input className="username" type="text" id="user-name" placeholder="username" />
          <input className="password" type="password" id="email-password" placeholder="password"/>
        </form>
      </div>
    ) : null;

  return (
    <div className="modal">
      <h1 className="modal-txt">{props.titleTxt}</h1>
      {modalContent}
      <Button class={props.class} command={props.command}>
        {props.btnText}
      </Button>
    </div>
  );
};

export default Modal;