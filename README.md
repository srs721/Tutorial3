# Tutorial 3

**[Optional]** This Tutorial is about creating the registration and user profile page

* *Date Created*: 07 Jun 2023
* *Last Modification Date*: 08 Jun 2023
* *Lab URL*: <http://example.com/>
* *Git URL*: <http://example.com/>

## Authors

**[Optional]** If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

* [Name](sr381365@dal.ca) - *Developer*

## Testing

Added Validations to make sure the entire registration form and user profile is complete.

### Break down into end to end tests

Check for first name, last name, email, and if password matches.
Performed email validation, such that the user enter correct email address. Password should be minium 8 characters length, with a capital, lower, special character and a number.

### And coding style tests

These tests test the registration form validation, such tha correct information is provided by the user before creation of the user's profile.

Node.js (npm and npx is required to install React)
See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

Install Node.js
https://nodejs.org/en/download/

Run the following command in terminal:
npx create-react-app app-name

## Deployment

1. Clone the repository to a public repository which can be accessed by Netlify 
   (https://git.cs.dal.ca/srishti/csci-5709-sr381365individual/-/tree/main/Assignments/A1)
2. Create an account on Netlify -
3. Select Deploy Project --> Import from GitHub
4. Select GitHub
5. Authorize Netlify to connect to your personal GitHub account
6. Select the branch you want to deploy from and configure build options
7. Site will be deployed on Netlify and a URL will be generated which you can modify according to 
   your needs - https://srishti-a1-prototype.netlify.app/

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* Node.js - JavaScript based Back End
* React - Front End JavaScript Library
* Material UI - React component library
* Netlify - Deployment Environment

## Sources Used

* Used MUI for designing nav bar - https://mui.com/material-ui/react-app-bar/
* Used MUI for card container - https://mui.com/material-ui/react-card/

## Acknowledgments

* Google
* Netlify
* Brightspace
* TAs of CSCI 5709 and Professor Mosquera
