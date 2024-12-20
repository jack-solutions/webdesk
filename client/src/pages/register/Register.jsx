import React, { useContext, useState } from "react";
import "./style.scss";
import { useHistory } from "react-router-dom";
import Person from "@material-ui/icons/Person";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import SchoolRounded from "@material-ui/icons/SchoolRounded";
import MenuBookRounded from "@material-ui/icons/MenuBookRounded";
import { AuthContext } from "../../context/authContext/AuthContext";
import { registerUser } from "../../context/authContext/apiCalls";
import background from "../../assets/Wave.png";
import sideimage from "../../assets/reg-side-img.svg";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");

  const { isFetching, dispatch, error } = useContext(AuthContext);

  const history = useHistory();

  const handleRegister = () => {
    if (!(fullname && email && password && course && semester)) {
      alert("Please fillup all fields");
    } else if (password !== confirmPass) {
      alert("Password & confirm password are not equal");
    } else {
      registerUser({ fullname, email, password, course, semester }, dispatch);
    }
  };

  return (
    <div className="register">
      <div className="register-page">
        <h1>Register</h1>
        
  <div className="register-input">
    <input
      type="text"
      name="fullname"
      value={fullname}
      placeholder="Your full name"
      onChange={(e) => setFullname(e.target.value)}
    />
    <Person className="icon" />
  </div>

  {/* Horizontal row for course and semester */}
  <div className="input-row">
    <div className="register-input">
      <input
        type="text"
        name="course"
        value={course}
        placeholder="Your course"
        onChange={(e) => setCourse(e.target.value)}
      />
      <SchoolRounded className="icon" />
    </div>
    
    <div className="register-input">
      <input
        type="text"
        name="semester"
        value={semester}
        placeholder="Your semester"
        onChange={(e) => setSemester(e.target.value)}
      />
      <MenuBookRounded className="icon" />
    </div>
  </div>

  <div className="register-input">
    <input
      type="text"
      name="email"
      value={email}
      placeholder="Your email"
      onChange={(e) => setEmail(e.target.value)}
    />
    <Email className="icon" />
  </div>

  {/* Horizontal row for passwords */}
  <div className="input-row">
    <div className="register-input">
      <input
        type="password"
        name="password"
        value={password}
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Lock className="icon" />
    </div>
    
    <div className="register-input">
      <input
        type="password"
        name="confirmPassword"
        value={confirmPass}
        placeholder="Confirm password"
        onChange={(e) => setConfirmPass(e.target.value)}
      />
      <Lock className="icon" />
    </div>
  </div>
        {error && (
          <p style={{ color: "red", fontSize: "13px", textAlign: "start" }}>
            Somethign went wrong
          </p>
        )}
        <button className="btn" onClick={handleRegister} disabled={isFetching}>
          Register
        </button>
        <div>or</div>
        <button className="btn" onClick={() => history.push("/login")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
