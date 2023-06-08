import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Grid, AppBar,Toolbar,TextField, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    marginTop:"20px",
    width: "fit-content",
    fontFamily: "Open Sans"
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: "400px",
    margin: '20px auto',
    padding: 40,
    border: '1px solid #ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    fontFamily: "Open Sans"
  },
  inputGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    fontWeight: 'bold',
    fontFamily: "Open Sans"
  },
  textField: {
    // marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
    fontFamily: "Open Sans",
    borderColor: "#d31334"
  },
  submitButton: {
    width: '100%',
    fontFamily: "Open Sans",
    backgroundColor: '#d31334'

  },
  errorText: {
    fontSize: '0.8rem',
    color: theme.palette.error.main,
    fontFamily: "Open Sans"
  },
  appBar: {
    backgroundColor: '#A03838', // Set the desired color here
  },
}));

const RegistrationForm = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error messages
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Validation checks
    let isValid = true;

    if (!firstName) {
      setFirstNameError('First Name is required');
      isValid = false;
    }

    if (!lastName) {
      setLastNameError('Last Name is required');
      isValid = false;
    }

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid Email');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    // Submit the form if all validations pass
    if (isValid) {
    
       navigate('/profile');
    }
  };

  const isValidEmail = (value) => {
    // Basic email format validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    
    <div className={classes.root} backgroundColor= "#EEC7C7">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Verizon
          </Typography>
        </Toolbar>
      </AppBar>
      <div className='Title'> <Typography variant='h2' align='center'className={classes.title} gutterBottom>Registration Page</Typography></div>
    
    <Grid container justifyContent="center" alignItems="center">
    <Grid item xs={12} sm={6} md={4}>
    {/* <div className={classes.container}> */}
    <form  className={classes.form} onSubmit={handleSubmit}>    
      {/* <div className={classes.inputGroup}> */}
      <label>First Name:</label>
      <TextField
        label="First Name"
        variant="outlined"
        borderColor="#d31334"
        className={classes.textField}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      {firstNameError && <Typography className={classes.errorText}>{firstNameError}</Typography>}
      <br/>
      <label>Last Name:</label>
      <TextField
        label="Last Name"
        variant="outlined"
        className={classes.textField}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      {/* </div> */}
      {lastNameError && <Typography className={classes.errorText}>{lastNameError}</Typography>}
      <br/>
      <label>Email:</label>
      <TextField
        label="Email"
        variant="outlined"
        className={classes.textField}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <Typography className={classes.errorText}>{emailError}</Typography>}
      <br/>
      <label>Password:</label>
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        className={classes.textField}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {passwordError && <Typography className={classes.errorText}>{passwordError}</Typography>}
      <br/>
      <label>Confirm Password:</label>
      <TextField
        label="Confirm Password"
        variant="outlined"
        type="password"
        className={classes.textField}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {confirmPasswordError && <Typography className={classes.errorText}>{confirmPasswordError}</Typography>}
      <br/>
      <br/>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className={classes.submitButton}
      >
        Register
      </Button>
    </form>
    </Grid>
    </Grid>
    </div>

    // </div>
  );
};

export default RegistrationForm;
