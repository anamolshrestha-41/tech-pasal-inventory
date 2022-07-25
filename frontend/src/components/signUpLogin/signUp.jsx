import { useState } from 'react';
import './signUp.css';
import defaultAvatar from '../../demo/defaultAvatar.png'
import techLogo from '../../demo/techlogo.png'
import { resizeImageFile } from '../../utils/imageSizeReducer';
import { Avatar, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function SignUp() {
    const[imagePreview,setImagePreview]=useState(defaultAvatar);
    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        customerType:'individual',
        state: "",
        city: "",
        street: "",
        contactNo:"",
       profileImage:imagePreview
      
      });
      const { name, email,contactNo,customerType, state, city, street, profileImage} =
        signUpData;
    
        const handleDataChange = (e) => {
            e.preventDefault();
            // console.log("done");
            if (e.target.name === "profileImage") {
              const file = e.target.files[0];
              resizeImageFile(file).then((image) => {
                console.log(image);
                setImagePreview(image);
              });
            } else {
              console.log(e.target.name);
              setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
            }
          };

    const handleSubmitSignUp = (e) => {
        e.preventDefault();
        console.log(signUpData);
        
      };
    return (  <div className="signup">
    <div className="signup-box">
      <div className="logo-signup">
        <img src={techLogo} alt="techlogo" />
        <h3>Register</h3>
      </div>
      <form
        className="signup-form"
        action="submit"
        onSubmit={handleSubmitSignUp}
      >
        <div >
            <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            placeholder="email address"
            value={email}
            name='email'
            onChange={handleDataChange}
          />
        </div>
        <div >
            <label htmlFor="name">Name:</label>
          <input
            type="text"
            required
            placeholder="name"
            value={name}
            name='name'
            onChange={handleDataChange}
          />
        </div>
        <div>
        <FormControl fullWidth required>
            <div className='customer-type'>
            <label htmlFor="customerType">Customer Type:</label>
        
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="customerType"
              value={customerType}
              onChange={handleDataChange}
              sx={{display:'flex',alignItems:"center"}}
              
            >
              <FormControlLabel
                value="individual"
                control={<Radio/>}
                label={<Typography sx={{fontSize:"20px"}}>Individual</Typography>}
               
              />
              <FormControlLabel value="company" control={<Radio />} 
            label={<Typography sx={{fontSize:"20px"}}>Company</Typography>}
               />
             
            </RadioGroup>
            </div>
     

           
          </FormControl>
        </div>
        <div className="address">
        <div >
            <label htmlFor="state">State:</label>
          <input
            type="text"
            placeholder="state"
            required
            value={state}
            name='state'
            onChange={handleDataChange}
          />
        </div>
        <div >
            <label htmlFor="city">City:</label>
          <input
            type="text"
            placeholder="city"
            required
            value={city}
            name='city'
            onChange={handleDataChange}
          />
        </div>
        
        </div>
        <div className="contact">
        <div >
            <label htmlFor="state">Street:</label>
          <input
            type="text"
            placeholder="street"
            required
            value={street}
            name='street'
            onChange={handleDataChange}
          />
        </div>
        <div >
            <label htmlFor="contactNo">ContactNo:</label>
          <input
            type="number"
            min="0"
            required
            
           
            placeholder="contact number"
            value={contactNo}
            name='contactNo'
            onChange={handleDataChange}
          />
        </div>
        
        </div>
        
<div className="profile-image">

    <Avatar src={imagePreview} sx={{width:120,height:120}}/>
   
                 <input
                    type="file"
                    name="profileImage"
                    
                    accept="image/*"
                    required
                
                    onChange={handleDataChange}
                  />
                
</div>
       
        <div className="submit-btn">
         
          <Button
          type='submit'
         size='large'
            sx={{
              backgroundColor: "rgb(113, 118, 113)",
              color: "white",
              borderRadius: "20px",
              paddingLeft: "15px",
              paddingRight: "15px",
              ':hover': {
                  bgcolor: 'primary.main', // theme.palette.primary.main
                  color: 'black',
                }
            }}
          >
             Sign Up
          
          </Button> 
          
        </div>
        <Link to={`/`}> <div className='login-return'>Go to login</div></Link>
       
        
      </form>
    </div>
  </div>);
}

export default SignUp;