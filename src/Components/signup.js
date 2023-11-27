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
  FormLabel,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import Images from "../Assets/bgImage.jpeg";
import LockIcon from "@mui/icons-material/Lock";
import { CheckBox } from "@mui/icons-material";

const typography_textfield_legalrep = {
  fontStyle: "Poppins",
  // fontFamily: "Poppins",
  fontWeight: "400",
  lineHeight: "24px",
  fontSize: "16px",
  color: "#200E32",
};
const bgImageContainerMarket = () => ({
  height: "1200px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  // position:"absolute",
  backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0)),url("${Images}")`,
});

const bgImageContainer = () => ({
  height: "230px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  // position:"absolute",
  backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0)),url("${Images}")`,
});
const Signup = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Typography sx={bgImageContainerMarket()}>
        <Grid container xs={12} sx={{ display: "flex", height: "100%" }} back>
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
                height: "90%",
                width: "85%",
                marginRight: "100px",
                flexDirection: "column",
              }}
            >
              <Typography sx={bgImageContainer}>
                <Box
                  sx={{
                    height: "25%",
                    display: "flex",
                    flexDirection: "column",

                    // background: "black",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontFamily: "sans-serif",
                      fontSize: "12px",
                      fontSize: 30,
                      paddingTop: "15px",
                      paddingLeft: "20px",
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
                      paddingLeft: "20px",
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
                      marginLeft: "20px",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Button
                    onClick={handleClick}
                    sx={{
                      background: "teal",
                      width: "30%",
                      marginTop: "25px",
                      marginLeft: "20px",
                      color: "white",
                      "&:hover": {
                        background: "teal",
                      },
                    }}
                  >
                    LOGIN
                  </Button>
                </Box>
              </Typography>

              <Box
                sx={{
                  backgroundColor: "white",
                  height: "70%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "10px",
                }}
              >
                <Grid
                  container
                  sx={{
                    // backgroundColor: "black",
                    width: "95%",
                    gap: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "90%",
                    flexDirection: "column",
                    paddingBottom: "40px",
                    marginTop: "20px",
                  }}
                >
                  <Grid
                    item
                    sx={{
                      width: "45%",
                      gap: "20px",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormLabel
                        sx={typography_textfield_legalrep}
                        variant="h6"
                      >
                        Last Name
                      </FormLabel>
                      <TextField
                        required
                        sx={{ "& input": { padding: "10px" }, height: "10px" }}
                        placeholder="Last Name"
                        id="contact"
                        type="text"
                        name="contact"
                        inputProps={{
                          pattern: "[a-zA-Z]*",
                          inputMode: "text",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormLabel
                        sx={typography_textfield_legalrep}
                        variant="h6"
                      >
                        Middle Name
                      </FormLabel>
                      <TextField
                        required
                        sx={{ "& input": { padding: "10px" }, height: "10px" }}
                        placeholder="Middle Name"
                        id="contact"
                        type="text"
                        name="contact"
                        inputProps={{
                          pattern: "[a-zA-Z]*",
                          inputMode: "text",
                          padding: "0px",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormLabel
                        sx={typography_textfield_legalrep}
                        variant="h6"
                      >
                        Address
                      </FormLabel>
                      <TextField
                        required
                        sx={{ "& input": { padding: "10px" }, height: "10px" }}
                        placeholder="Address"
                        id="contact"
                        type="text"
                        name="contact"
                        inputProps={{
                          pattern: "[a-zA-Z]*",
                          inputMode: "text",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormLabel
                        sx={typography_textfield_legalrep}
                        variant="h6"
                      >
                        City
                      </FormLabel>
                      <TextField
                        required
                        sx={{ "& input": { padding: "10px" }, height: "10px" }}
                        placeholder="City"
                        id="contact"
                        type="text"
                        name="contact"
                        inputProps={{
                          pattern: "[a-zA-Z]*",
                          inputMode: "text",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormLabel
                        sx={typography_textfield_legalrep}
                        variant="h6"
                      >
                        Address Postal Code
                      </FormLabel>
                      <TextField
                        required
                        sx={{ "& input": { padding: "10px" }, height: "10px" }}
                        placeholder="Address Postal Code"
                        id="contact"
                        type="text"
                        name="contact"
                        inputProps={{
                          pattern: "[a-zA-Z]*",
                          inputMode: "text",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormLabel
                        sx={typography_textfield_legalrep}
                        variant="h6"
                      >
                        Fax
                      </FormLabel>
                      <TextField
                        required
                        sx={{ "& input": { padding: "10px" }, height: "10px" }}
                        placeholder="Fax"
                        id="contact"
                        type="text"
                        name="contact"
                        inputProps={{
                          pattern: "[a-zA-Z]*",
                          inputMode: "text",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormLabel
                        sx={typography_textfield_legalrep}
                        variant="h6"
                      >
                        Lawyer Name
                      </FormLabel>
                      <TextField
                        required
                        sx={{ "& input": { padding: "10px" }, height: "10px" }}
                        placeholder="Lawyer Name"
                        id="contact"
                        type="text"
                        name="contact"
                        inputProps={{
                          pattern: "[a-zA-Z]*",
                          inputMode: "text",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormLabel
                        sx={typography_textfield_legalrep}
                        variant="h6"
                      >
                        
                      </FormLabel>
                      <TextField
                        required
                        sx={{ "& input": { padding: "10px" }, height: "10px", fontFamily:"poppins", border:"none" }}
                        // placeholder="Jurisdiction"
                        id="contact"
                        type="text"
                        name="contact"
                        inputProps={{
                          pattern: "[a-zA-Z]*",
                          inputMode: "text",
                          border:"none"
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      width: "45%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormLabel
                        sx={typography_textfield_legalrep}
                        variant="h6"
                      >
                        Contact
                      </FormLabel>
                      <TextField
                        required
                        sx={{ "& input": { padding: "10px" }, height: "10px" }}
                        placeholder="Placeholder"
                        id="contact"
                        type="text"
                        name="contact"
                        inputProps={{
                          pattern: "[a-zA-Z]*",
                          inputMode: "text",
                        }}
                      />
                    </div> */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormLabel
                        sx={typography_textfield_legalrep}
                        variant="h6"
                      >
                        First Name
                      </FormLabel>
                      <TextField
                        required
                        sx={{ "& input": { padding: "10px" }, height: "10px" }}
                        placeholder="First Name"
                        id="contact"
                        type="text"
                        name="contact"
                        inputProps={{
                          pattern: "[a-zA-Z]*",
                          inputMode: "text",
                          padding: "0px",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormLabel
                        sx={typography_textfield_legalrep}
                        variant="h6"
                      >
                       Office Name
                      </FormLabel>
                      <TextField
                        required
                        sx={{ "& input": { padding: "10px" }, height: "10px" }}
                        placeholder="Office Name"
                        id="contact"
                        type="text"
                        name="contact"
                        inputProps={{
                          pattern: "[a-zA-Z]*",
                          inputMode: "text",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormLabel
                        sx={typography_textfield_legalrep}
                        variant="h6"
                      >
                        Address Province
                      </FormLabel>
                      <TextField
                        required
                        sx={{ "& input": { padding: "10px" }, height: "10px" }}
                        placeholder="Address Province"
                        id="contact"
                        type="text"
                        name="contact"
                        inputProps={{
                          pattern: "[a-zA-Z]*",
                          inputMode: "text",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormLabel
                        sx={typography_textfield_legalrep}
                        variant="h6"
                      >
                        Phone
                      </FormLabel>
                      <TextField
                        required
                        sx={{ "& input": { padding: "10px" }, height: "10px" }}
                        placeholder="Phone"
                        id="contact"
                        type="text"
                        name="contact"
                        inputProps={{
                          pattern: "[a-zA-Z]*",
                          inputMode: "text",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormLabel
                        sx={typography_textfield_legalrep}
                        variant="h6"
                      >
                        Email
                      </FormLabel>
                      <TextField
                        required
                        sx={{ "& input": { padding: "10px" }, height: "10px" }}
                        placeholder="Email"
                        id="contact"
                        type="text"
                        name="contact"
                        inputProps={{
                          pattern: "[a-zA-Z]*",
                          inputMode: "text",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormLabel
                        sx={typography_textfield_legalrep}
                        variant="h6"
                      >
                        License Number
                      </FormLabel>
                      <TextField
                        required
                        sx={{ "& input": { padding: "10px" }, height: "10px" }}
                        placeholder="License Number"
                        id="contact"
                        type="text"
                        name="contact"
                        inputProps={{
                          pattern: "[a-zA-Z]*",
                          inputMode: "text",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <FormLabel
                        sx={typography_textfield_legalrep}
                        variant="h6"
                      >
                        Account Type
                      </FormLabel>
                      {/* <TextField
                        required
                        sx={{ "& input": { padding: "10px" }, height: "10px" }}
                        placeholder="Account Type"
                        id="contact"
                        type="text"
                        name="contact"
                        inputProps={{
                          pattern: "[a-zA-Z]*",
                          inputMode: "text",
                        }}
                      /> */}
                      <select style={{ height: "45px", borderRadius: "5px" }}>
                        <option>Law Firm</option>
                        <option>Paralegal</option>
                        <option>Others</option>
                      </select>
                    </div>
                  </Grid>
                </Grid>
                <Button
                  onClick={handleClick}
                  sx={{
                    background: "teal",
                    width: "30%",
                    // height: "200px",
                    marginTop: "25px",
                    marginLeft: "40px",
                    color: "white",
                    "&:hover": {
                      background: "teal",
                    },
                  }}
                >
                  LOGIN
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Typography>
    </>
  );
};

export default Signup;
