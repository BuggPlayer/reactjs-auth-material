import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  // validation state
  const [errorfn, seterrorfn] = useState("");
  const [errormsg, seterrormsg] = useState("");
  const [errorphone, seterrorphone] = useState("");
  const [errorpassword, seterrorpassword] = useState("");

  const emailValidation = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      setEmail(email);
      seterrormsg("");
    } else {
      seterrormsg("Please Enter a valid email");
    }
    if (email.trim() === "") {
      seterrormsg("Email is required");
    }
  };

  const phoneValidation = (number) => {
    console.log(number);
    const pat = new RegExp(/^[0-9\b]+$/);
    if (!pat.test(number)) {
      seterrorphone("Enter Only Number!");
    } else if (number.length != 10) {
      seterrorphone("Please Enter a valid phone number");
    } else {
      seterrorphone("");
    }
  };

  const emailHandler = (e) => {
    emailValidation(e.target.value);
  };

  const passwordvalidatation = (password) => {
    if (password === "") {
      seterrorpassword("password is required!");
    }
  };

  const submitData = () => {
    if (firstname === "" && password === "" && email === "" && phone == "") {
      alert("all fileds are required");
    } else {
      axios
        .post(`http://localhost:4000/register`, {
          name: firstname,
          email,
          phone,
          password: password,
        })
        .then((res) => console.log("res", res.data))
        .catch((err) => console.error("eror", err));
    }
    console.log("fn", firstname);
    console.log("fn", email);
    console.log("fn", phone);
    console.log("fn", password);
  };

  return (
    <div>
      <Grid
        Container
        style={{ display: "flex", backgroundColor: "#EBEEF2", height: 722 }}
      >
        <Grid
          item
          md={6}
          style={{
            backgroundColor: "#2D2B52",
            borderTopRightRadius: "20%",
            borderBottomRightRadius: "20%",
          }}
        >
          <Container>
            <div style={{ marginTop: "5%", paddingLeft: "7%" }}>
              <h1
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 36,
                  paddingLeft: "17%",
                  paddingTop: "5%",
                  color: "#ffffff",
                }}
              >
                Join Our Family
              </h1>

              <div>
                <TextField
                  variant="outlined"
                  placeholder="Firstname"
                  style={{
                    marginLeft: "10%",
                    backgroundColor: "white",
                    width: "370px",
                    color: "white",
                    marginBottom: "4%",
                    borderRadius: "10px",
                  }}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>

              <TextField
                variant="outlined"
                placeholder="email"
                style={{
                  marginLeft: "10%",
                  backgroundColor: "white",
                  width: "370px",
                  color: "white",
                  marginBottom: "4%",
                  borderRadius: "10px",
                }}
                onChange={emailHandler}
              />
              <p style={{ color: "red" }}>{errormsg}</p>

              <TextField
                variant="outlined"
                placeholder="password"
                style={{
                  marginLeft: "10%",
                  backgroundColor: "white",
                  width: "370px",
                  color: "white",
                  marginBottom: "4%",
                  borderRadius: "10px",
                }}
                onChange={(e) => {
                  passwordvalidatation(e.target.value);
                }}
              />
              <p style={{ color: "red" }}>{errorpassword}</p>
              <TextField
                variant="outlined"
                placeholder="phone"
                style={{
                  marginLeft: "10%",
                  backgroundColor: "white",
                  width: "370px",
                  color: "white",
                  marginBottom: "4%",
                  borderRadius: "10px",
                }}
                onChange={(e) => {
                  phoneValidation(e.target.value);
                }}
              />
              <p style={{ color: "red" }}>{errorphone}</p>

              <Button
                style={{
                  marginLeft: 100,
                  width: 280,
                  backgroundColor: "#FD6141",
                  fontSize: 19,
                  color: "white",
                  fontWeight: "bold",
                }}
                variant="contained"
                onClick={() => submitData(firstname, email, phone, password)}
              >
                Get Started
              </Button>

              <div
                style={{ display: "flex", paddingLeft: "5%", color: "white" }}
              >
                <h5>Already have an account?</h5>
                <Link
                  style={{ textDecoration: "none", paddingLeft: "2%" }}
                  to="/login"
                >
                  <h5 style={{ paddingLeft: "5%", color: "white" }}>Login</h5>
                </Link>
              </div>
            </div>
          </Container>
        </Grid>
        <Grid item md={6} style={{ backgroundColor: "#EBEEF2" }}>
          <img
            style={{ height: 550, paddingTop: "5%" }}
            src="https://cdn.dribbble.com/users/56427/screenshots/6856489/attachments/1462312/personalhub_hero_dribbble-01.jpg?compress=1&resize=800x600"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
