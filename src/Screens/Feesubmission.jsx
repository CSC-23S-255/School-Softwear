import React, { useState } from 'react'
import Navbars from '../components/Navbar'
import Options from '../components/Options'

import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../cofig/firebase'
import { useNavigate } from 'react-router-dom'


const Feesubmission = () => {

  const [Name,setName] = useState('');
   
  const [classes,setClasses] = useState('')

  const [Amount,setAmount] = useState('');



 
  const handlesubfrom = async (e)=>{
      e.preventDefault();
      console.log(Name,classes,Amount)
  
      let subobj = {
          Name,
           classes,
           Amount,
          
      }
  
      try {
          const docRef = await addDoc(collection(database, "Feesubmission"),subobj)
          console.log("Document written with ID: ", docRef.id);
          
  
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
          <u>Payment For</u>
        </Typography>
        <TextField
          required
          sx={{ mb: 3 ,color:"blue"}}
          fullWidth
          label="Full Name"
          onChange={(e)=>setName(e.target.value)}
        />
               <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Class"
          onChange={(e)=>setClasses(e.target.value)}

        />

          <br />
          <TextField
          sx={{ mb: 3 }}
          fullWidth
          label="Amount"
          onChange={(e)=>setAmount(e.target.value)}

        />
        
        <FormControl fullWidth margin="normal">
        <InputLabel id="option1-label" sx={{ color: 'blue' }} required >
            <h6>Payment Method</h6>
        </InputLabel>
        <Select labelId="option1-label">
          <MenuItem  sx={{ color: 'blue' }}>
            CREDIT CARD
          </MenuItem>
          <MenuItem   sx={{ color: 'blue' }} >
            DEBIT CARD
          </MenuItem>
          <MenuItem   sx={{ color: 'blue' }} >
           NET BANKING
          </MenuItem>
          <MenuItem   sx={{ color: 'blue' }} >
            UPI
          </MenuItem>
        </Select>
      </FormControl>
       <br /><br />
        <Button fullWidth variant="contained" type="submit">
          Submit Payment
        </Button>
      </Paper>
    </form>
   </div>
    </div>
 </div>

  )
}

export default Feesubmission
