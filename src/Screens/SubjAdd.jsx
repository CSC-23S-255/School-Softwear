import React, { useState } from 'react'
import Navbars from '../components/Navbar'
import Options from '../components/Options'

import { Button, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../cofig/firebase'
import { useNavigate } from 'react-router-dom'



const SubjAdd = () => {

    const [SubName,setSubName] = useState('');
   
    const [classes,setClasses] = useState('')

    const [Group,setGroup] = useState('');
    const navigate = useNavigate();
   
    const handlesubfrom = async (e)=>{
        e.preventDefault();
        console.log(SubName,classes,Group);
    
        let subobj = {
            SubName,
             classes,
             Group,
        }
    
        try {
            const docRef = await addDoc(collection(database, "Subjects"),subobj)
            console.log("Document written with ID: ", docRef.id);
            navigate('/sublist')
    
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
   <div style={{ paddingLeft: '250px'}}>
   <form  onSubmit={handlesubfrom} >
      <Paper sx={{ margin: 2, padding: 5 ,overflow:"auto"}}>
        <Typography variant="h4" sx={{ marginBottom: 5 ,textAlign:"center"}}>
          <u>Subjects Add</u>
        </Typography>
        <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Full Name"
          onChange={(e)=>setSubName(e.target.value)}
        />
               <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Class"
          onChange={(e)=>setClasses(e.target.value)}

        />

          <br />
          <FormLabel sx={{color:"blue",fontSize:"20px"}} component="legend">Group</FormLabel>
           <RadioGroup
        aria-label="gender"
        name="gender"
        // Step 3: Bind value to state
        onChange={(e)=>setGroup(e.target.value)} // Step 4: Handle change event
        row // Optional: Aligns radio buttons horizontally
      >
        <FormControlLabel
        sx={{color:"blue",fontSize:"20px"}}
           value={'Genrel Science'}
          control={<Radio color="primary" />}
          label="Genrel Science"
        />
        <FormControlLabel
        sx={{color:"blue",fontSize:"20px"}}
          value={'Pre-Engineering'}
          control={<Radio color="primary" />}
          label="Pre-Engineering"
        />
      </RadioGroup>
       <br /><br />
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

export default SubjAdd
