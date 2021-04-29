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

  const submitData = () => {
    console.log("fn", firstname);

    console.log("fn", email);
    console.log("fn", phone);
    console.log("fn", password);

    axios
      .post(`http://localhost:4000/register`, {
        name: firstname,
        email,
        phone,
        password: password,
      })
      .then((res) => console.log("res", res.data))
      .catch((err) => console.error("eror", err));
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
            {/* <Card style={{marginTop:"6%", width:"85%", }}>
            <CardContent> */}
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
                onChange={(e) => setEmail(e.target.value)}
              />

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
                onChange={(e) => setPassword(e.target.value)}
              />

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
                onChange={(e) => setPhone(e.target.value)}
              />

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
