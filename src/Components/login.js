
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom';
// import './login.css';  
// const Login = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     });  const navigate=useNavigate();
//     const handleClick=()=>{
// navigate("/Signup")
//     }
//   const [error, setError] = useState()
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validation: Check if username and password are not empty
//     const isFormValid = formData.username.trim() !== '' && formData.password.trim() !== '';

//     if (isFormValid) {
//       // Handle form submission
//       console.log('Form submitted:', formData);
//       // Add your login logic here
//     } else {
//       // Display an error message or handle the case where the form is not valid
//       setError('Form is not valid. Please fill in all the fields.');
//     }
//   };

//   return (
//     <div className="bgmg">
//       <br />
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-6 d-flex justify-content-center align-items-center flex-direction-column">
//             <div className="text-white">
//               <h3>New feature </h3>
//               <h3>One App solution</h3>
//             </div>
//           </div>

//           <div className="col-sm-12 col-md-6">
//             <div className="card shadow">
//               <div className="container">
//                 <div className="row ">
//                   <div className="col-sm-12 bgimg">
//                     <div className="p-5">
//                       <div className="mb-2">
//                         <div className="welcome fs-3 text-white">
//                           <b>WELCOME</b>
//                         </div>
//                         <div className="welcome fs-3 text-white">
//                           <b>TO THE WEBSITE</b>
//                         </div>
//                       </div>

//                       <div className="pb-5 text-white ">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestias architecto delectus
//                         ullam ea sed optio enim, doloremque ut,
//                       </div>

//                       <p className="text-white"><button onClick={handleClick} style={{background:"transparent",border:"none",color:"white"}}>CREATE ACCOUNT</button></p>
//                     </div>
//                   </div>

//                   <div className="col-sm-12">
//                     <div className="row justify-content-center align-items-center">
//                       <div className="col-sm-8">
//                         <div className="row ">
//                           <div className="col-sm-12">
//                             <h5 className="text-center">USER LOGIN</h5>
//                           </div>
//                           <div className="col-sm-12">
//                             <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">
//                               Username
//                             </label>
//                             <div className="input-group mb-2 mr-sm-2">
//   <div className="input-group-prepend">
//     <div className="input-group-text" style={{border:"none"}}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="16"
//         height="23"
//         fill="currentColor"
//         className="bi bi-person"
//         viewBox="0 0 16 16"
//       >
//         <path
//           d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
//         />
//       </svg>
//     </div>
//   </div>
//   <input
//     type="text"
//     className="form-control"
//     style={{border:"none"}}
//     id="username"
//     placeholder="Username"
//     value={formData.username}
//     onChange={handleChange}
//   />
// </div>

//                           </div>
//                           <div className="col-sm-12">
//                             <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">
//                               Password
//                             </label>
//                             <div className="input-group mb-2 mr-sm-2">
//                               <div className="input-group-prepend">
//                                 <div className="input-group-text" style={{border:"none"}}>
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="16"
//                                     height="23"
//                                     fill="currentColor"
//                                     className="bi bi-file-lock2"
//                                     viewBox="0 0 16 16"
//                                   >
//                                     <path
//                                       d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224z"
//                                     />
//                                     <path
//                                       d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
//                                     />
//                                   </svg>
//                                 </div>
//                               </div>
//                               <input
//                                 type="password"
//                                 className="form-control"
//                                 style={{border:"none"}}
//                                 id="password"
//                                 placeholder="Password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row">
//                           <div className="col-sm-6">
//                             <p>remember me</p>
//                           </div>
//                           <div className="col-sm-6 d-flex justify-content-end">
//                             <p>forget Password</p>
//                           </div>
//                         </div>
//                         <h4>{error}</h4>
//                         <div className="row mt-2 mb-2">
//                           <div className="col-sm-12 text-center">
//                             <button className="btn btn-secondary" onClick={handleSubmit}>
//                               Submit
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  TextField,
  Avatar,
  Typography,
  Checkbox,
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

const Login = () => {

  const navigate = useNavigate();
  const handleClick=()=>{
    navigate("/Signup")
        }
  return (
    <>
    <Typography sx={bgImageContainerMarket()}>
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
                fontSize: 40,
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
                fontSize: 40,
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
                  height: "41%",
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
                  height: "59%",
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
                
                        <Typography component="h1" variant="h5" sx={{color:"#1976d2", marginBottom:"35px", fontWeight:500, fontSize:"30px"}}>
                          USER LOGIN
                        </Typography>
                        <form style={{ width: "550px", gap:"10px", display:"flex", flexDirection:"column" }}>
                          <TextField
                           placeholder="Username"
                            // variant="filled"
                            margin="normal"
                            sx={{ backgroundColor: '#1976d2', '& input': { color: 'white' ,backgroundColor: '#1976d2',   textAlign: 'center'}, borderRadius:"10px" }}
                            required
                            fullWidth
                            InputProps={{
                              startAdornment: (
                    
                                <PersonIcon sx={{ color: 'white' }} />
                              ),
                            }}
                          />
                          <TextField
                            placeholder="Password"
                            // variant="filled"
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

                            <Box sx={{color:"#1976d2",display:"flex", flexDirection:"row", gap:"5px", alignItems:"center"}}>
                              <Typography>
                              <Checkbox  defaultChecked />
                              </Typography>
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
      </Typography>
    </>
  );
};

export default Login;