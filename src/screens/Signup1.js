import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

export const Signup1 = () => {
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
              <div style={{}}>
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
                />
              </div>
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
                />
              </div>
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
                />
              </div>
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
                />
              </div>
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
                />
              </div>
              <div style={{ paddingLeft: "4%" }}>
                <Button
                  style={{
                    width: 450,
                    backgroundColor: "#FD6141",
                    fontSize: 19,
                    color: "white",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                >
                  Get Started
                </Button>
              </div>
              <div
                style={{ display: "flex", paddingLeft: "5%", color: "white" }}
              >
                <h5>Already have an account?</h5>
                <Link
                  style={{ textDecoration: "none", paddingLeft: "2%" }}
                  to="/abc"
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
