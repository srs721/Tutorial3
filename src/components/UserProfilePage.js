import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { AppBar,Toolbar,TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    margin: '0 auto',
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
    fontFamily: "Open Sans",
    backgroundColor:"#f9f9f9",
    width:"100%"

  },
  title: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    fontWeight: 'bold',
    fontFamily: "Open Sans"
  },
  profileItem: {
    marginBottom: theme.spacing(2),
    fontFamily: "Open Sans",
    
  },
  appBar: {
    backgroundColor: '#A03838', // Set the desired color here
  },
  card: {
    maxWidth: "100%",
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: theme.spacing(2),
  },
}));

const UserProfilePage = () => {
  const classes = useStyles();

  // Dummy user profile data
  const userProfile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
  };

  return (

    <div backgroundColor= "#EEC7C7">
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Verizon
        </Typography>
      </Toolbar>
    </AppBar>
    <div className='Title'> <Typography variant='h2' align='center'className={classes.title} gutterBottom>User Profile Page</Typography></div>

    <Card fontWeight='bold'className={classes.root}>
    <CardContent>
        <img
          src="https://t4.ftcdn.net/jpg/00/69/31/95/240_F_69319557_uXTWMzbEOJi9Jnp7iiXgQYV9IjYQ0Rvk.jpg"
          alt="User Profile Image"
          className={classes.image}
        />
          <Typography variant="h6" color="textSecondary" fontFamily= "Open Sans">
            First Name: John
          </Typography>
          <Typography variant="h6" color="textSecondary" fontFamily= "Open Sans">
            Last Name: Doe
          </Typography>
          <Typography variant="h6" color="textSecondary" fontFamily="Open Sans">
            Email: johndoe@example.com
          </Typography>
          <Typography variant="h6" color="textSecondary" fontFamily="Open Sans">
            Products Purchased: 200+
          </Typography>
      </CardContent>
    </Card>
    </div>
  );
};

export default UserProfilePage;
