import React from "react";
import { makeStyles, 
  // eslint-disable-next-line
  withStyles } from "@material-ui/core/styles";
import { 
  // eslint-disable-next-line
  TextField, Typography, 
  // eslint-disable-next-line
  Button, Grid, Box } from "@material-ui/core";
//import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import * as emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "#66fcf1",
    borderColor: "#66fcf1",
  },
}));

// const InputField = withStyles({
//   root: {
//     "& label.Mui-focused": {
//       color: "#66fcf1",
//     },
//     "& label": {
//       color: "#C5C6C7",
//     },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "#C5C6C7",
//       },
//       "&:hover fieldset": {
//         borderColor: "#C5C6C7",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "#C5C6C7",
//       },
//     },
//   },
// })(TextField);
 
const Contacts = () => {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm();

  const sendFeedback = (serviceID, templateId, variables, userID) => {
    emailjs.send(
        serviceID, templateId,
        variables, userID
    ).then(res => {
        console.log('Email successfully sent!')
    })
        .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
  };

  const onSubmit = (data, r) => {
    alert(`Thank you for your message from ${data.email}`);
    const templateId = 'template_vw9a6a3';
    const serviceID = 'service_9rndepw';
    const newvar = { from_name: data.name, message_html: data.comment, reply_to: data.email };
    const uid = 'user_dS8u0MRcIhsCW0DEALomr';
    sendFeedback(serviceID, templateId, newvar, uid);
    r.target.reset();
  };
  

  return (
    <Box component="div" style={{ background: "#141424", height: "100vh" }}>
      <Navbar />
      <Grid container justify="center">
        <Box className={classes.form}>
          <Typography
            variant="h5"
            style={{
              color: "#66fcf1",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            hire or contact me...
          </Typography>
          <br/>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete = "off">
                <input 
                    placeholder="Name"
                    class = "mainLoginInput"
                    name="name" 
                    style={{ width: "300px" ,font: "Arial"}}
                    ref={
                        register({ 
                            required: "Please enter your name", 
                            maxLength: {
                                value: 20,
                                message: "Please enter a name with fewer than 20 characters"
                            } 
                        })
                    } 
                /><br />
                {errors.name && errors.name.message}<br />

                <input
                    placeholder="E-mail"
                    class = "mainLoginInput"
                    name="email"
                    style={{ width: "300px" ,font: "Arial"}}
                    ref={
                        register({
                            required: "Please enter an email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })
                    }
                /><br/>
                {errors.email && errors.email.message}<br />

                <textarea 
                    placeholder="Message"
                    class = "mainLoginInput"
                    name="comment" 
                    style={{ width: "300px" ,height: "100px",font: "Arial"}}
                    ref={
                        register({
                            required: true
                        })
                    } 
                /><br />
                {errors.comment && "oops, you forgot your message!"}<br />

                <input type="submit" />
                </form>
          </Box>
        </Grid>
    </Box>
  );
};

export default Contacts;
