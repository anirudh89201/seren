import React from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json.errors.location);

    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/home");
      props.showAlert("Account Created Successfully", "success");
    } else {
      props.showAlert(`Failed to Create Account ,${json.errors.msg}`, "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div id="signupp1">
      <p id="signup">Sign Up to Use NoteNest Today</p>
      <form onSubmit={handleSubmit} id="signupf1">
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            <span id="Name_label">Name</span>
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
            aria-describedby="emailHelp"
            required={true}
          />
          <div id="nameHelp" className="form-text">
          </div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            <span id="email_label">Email address</span>
          </label>
          <input
            type="mail"
            className="form-control"
            onChange={onChange}
            id="email"
            name="email"
            required={true}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            <span id="signuppass">Password</span>
          </label>
          <input
            type="password"
            required={true}
            name="password"
            id="password"
            className="form-control"
            onChange={onChange}
          />{" "}
          <div id="passHelp" className="form-text">
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            <span id="example">Confirm Password</span>
          </label>
          <input
            type="cpassword"
            required={true}
            name="cpassword"
            id="cpassword"
            className="form-control"
            onChange={onChange}
          />
          <div id="cpassHelp" className="form-text">
          </div>
        </div>
        <button type="submit" id="signupbtn1"className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
