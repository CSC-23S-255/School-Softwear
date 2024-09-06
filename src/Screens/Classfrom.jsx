import React, { useState } from 'react'
import Navbars from '../components/Navbar'
import Options from '../components/Options'

import { Button, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../cofig/firebase'

const Classfrom = () => {

 const [Name,setName] = useState('');
 const [LastName,setLastName] = useState('')
 const [email,setEmail] = useState('')
 const [Phone,setPhone] = useState('')
 const [BirthDate,setBirthDate] = useState('')
 const [Qualification,setQualification] = useState('')
 const [Gender,setGender] = useState('');



  const navigate = useNavigate();

  const handlesubmit = async (e)=>{
    e.preventDefault();
    console.log(Name,LastName,email,BirthDate,Qualification);
     
    let classobj = {
      Name,
      LastName,
      email,
      Phone,
      BirthDate,
      Qualification,
      Gender,
    }

    try {
      const docRef = await addDoc(collection(database, "Class"),classobj)
      console.log("Document written with ID: ", docRef.id);
      navigate('/classlist')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  }
  return (
    <div>

    <Navbars/>

    <div style={{display:'flex'}}>
   <div>
     <Options/>
   </div>
   <div style={{paddingLeft:"80px"}}>
   <form onSubmit={handlesubmit} >
      <Paper sx={{ margin: 2, padding: 5 ,overflow:"auto"}}>
        <Typography variant="h4" sx={{ marginBottom: 5 ,textAlign:"center"}}>
          <u>ADMISSION FORM</u>
        </Typography>
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Full Name"
          onChange={(e)=>setName(e.target.value)}
        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Last Name"
          onChange={(e)=>setLastName(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Email"
          onChange={(e)=>setEmail(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Phone Number"
          onChange={(e)=>setPhone(e.target.value)}

        />
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          placeholder='MM/DD/YYYY'
          label="Date of Birth"
          onChange={(e)=>setBirthDate(e.target.value)}

        />
         <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Qualification"
          onChange={(e)=>setQualification(e.target.value)}

        />
          <br />
          <FormLabel  sx={{color:"blue",fontSize:"20px"}}component="legend">Gender</FormLabel>
           <RadioGroup
        aria-label="gender"
        name="gender"
        // Step 3: Bind value to state
        onChange={(e)=>setGender(e.target.value)} // Step 4: Handle change event
        row // Optional: Aligns radio buttons horizontally
      >
        <FormControlLabel
        sx={{color:"blue",fontSize:"20px"}}
           value={'Male'}
          control={<Radio color="primary" />}
          label="Male"
        />
        <FormControlLabel
        sx={{color:"blue",fontSize:"20px"}}
          value={'Female'}
          control={<Radio color="primary" />}
          label="Female"
        />
      </RadioGroup> <br /> <br />
        <Button fullWidth variant="contained" type="submit">
          Submit
        </Button>
      </Paper>
    </form>
   </div>
    </div>
 </div>
  )
}

export default Classfrom

