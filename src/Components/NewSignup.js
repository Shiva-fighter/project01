import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  TextField,
  Avatar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import Images from "../Assets/bgImage.jpeg";
import LockIcon from "@mui/icons-material/Lock";
import { CheckBox } from "@mui/icons-material";

const bgImageContainerMarket = () => ({
  height: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  // position:"absolute",
  backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0)),url("${Images}")`,
});

export const NewSignup = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/Signup")
        }
  return (
    <>
      <Grid container xs={12} sx={{ display: "flex", height: "100vH" }} back>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "50%",
              height: "20%",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "sans-serif",
                fontSize: "12px",
                fontSize: 50,
              }}
            >
              New Features
            </Typography>
            <Typography
              sx={{
                marginTop: "-10px",
                color: "white",
                fontFamily: "sans-serif",
                fontSize: "12px",
                fontSize: 50,
              }}
            >
              One app Solutions
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                color: "white",
                fontFamily: "sans-serif",
                fontSize: "5px",
                fontSize: 25,
              }}
            >
              Lorem Ipsum is simply dummy text
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              backgroundColor: "white",
              height: "85%",
              width: "85%",
              marginRight: "100px",
              flexDirection: "column",
            }}
          >
            <Typography sx={bgImageContainerMarket()}>
              <Box
                sx={{
                  height: "50%",
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "75px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "sans-serif",
                    fontSize: "12px",
                    fontSize: 30,
                    paddingTop: "75px",
                  }}
                >
                  Welcome
                </Typography>
                <Typography
                  sx={{
                    marginTop: "-10px",
                    color: "white",
                    fontFamily: "sans-serif",
                    fontSize: "12px",
                    fontSize: 30,
                  }}
                >
                  To the website
                </Typography>
                <Typography
                  sx={{
                    marginTop: "-10px",
                    color: "white",
                    fontFamily: "sans-serif",
                    fontSize: "12px",
                    width: "90%",
                    fontSize: "15px",
                    marginTop: "2px",
                    marginLeft: "2px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.
                </Typography>
                <Button
                onClick={handleClick}
                  sx={{
                    
                    background: "teal",
                    width: "30%",
                    marginTop: "20px",
                    color: "white",
                    '&:hover': {
                      background: 'teal', 
                    },
                  }}

                >
                  CREATE ACCOUNT
                </Button>
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  height: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid
                  container
                  sx={{
                    // backgroundColor: "black",
                    width: "80%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80%",
                  }}
                >
                  
                    <Grid>
                      <Paper
                        elevation={3}
                        style={{
                          // padding: "20px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          boxShadow:"none"
                        }}
                      >
                
                        <Typography component="h1" variant="h5" sx={{color:"#1976d2"}}>
                          USER LOGIN
                        </Typography>
                        <form style={{ width: "100%" }}>
                          <TextField
                           placeholder="Username"
                            variant="filled"
                            margin="normal"
                            sx={{ backgroundColor: '#1976d2', '& input': { color: 'white' ,backgroundColor: '#1976d2',   textAlign: 'center'}, borderRadius:"10px" }}
                            required
                            fullWidth
                            InputProps={{
                              startAdornment: (
                                // <div style={{ marginRight: "10px" }}>
                                //   <svg
                                //     xmlns="http://www.w3.org/2000/svg"
                                //     height="24"
                                //     viewBox="0 0 24 24"
                                //     width="24"
                                //   >
                                //     <path d="M0 0h24v24H0z" fill="none" />
                                //     <path
                                //       fill="blue"
                                //       d="M21.5 2A2.5 2.5 0 0 1 24 4.5v15a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 19V4.5A2.5 2.5 0 0 1 5 2h16.5zm.5 2H20v6h1V4.999zM20 10v2h-2v-2h2zm-2 4v2h2v-2h-2z"
                                //     />
                                //   </svg>
                                // </div>
                                <PersonIcon sx={{ color: 'white' }} />
                              ),
                            }}
                          />
                          <TextField
                            placeholder="Password"
                            variant="filled"
                            margin="normal"
                            type="password"
                            required
                            sx={{ backgroundColor: '#1976d2', '& input': { color: 'white' ,backgroundColor: '#1976d2', textAlign:"center"}, borderRadius:"10px" }}
                            fullWidth
                            InputProps={{
                              startAdornment: (
                                // <div style={{ marginRight: "10px" }}>
                                //   <svg
                                //     xmlns="http://www.w3.org/2000/svg"
                                //     height="24"
                                //     viewBox="0 0 24 24"
                                //     width="24"
                                //   >
                                //     <path d="M0 0h24v24H0z" fill="white" />
                                //     <path
                                //       fill="blue"
                                //       d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6h2v2h-2zm0-4h2v3h-2z"
                                //     />
                                //   </svg>
                                // </div>
                                <LockIcon sx={{ color: 'white' }} />
                              ),
                            }}
                          />
                          <Box sx={{display:"flex", justifyContent:"space-between"}}>
                            <Box sx={{color:"#1976d2",}}>
                              <CheckBox></CheckBox>
                              Remember
                            </Box>
                            <Box sx={{color:"#1976d2"}}>
                              Forgot Password
                            </Box>
                          </Box>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ marginTop: "20px" }}
                          >
                            Sign In
                          </Button>
                        </form>
                      </Paper>
                    </Grid>
                  
                </Grid>
              </Box>
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
