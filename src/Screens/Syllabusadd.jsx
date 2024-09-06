import React, { useState, useRef } from 'react';
import Navbars from '../components/Navbar';
import Options from '../components/Options';
import {
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../cofig/firebase';
import { useNavigate } from 'react-router-dom';

const Syllabusadd = () => {
  const [SubName, setSubName] = useState('');
  const [classes, setClasses] = useState('');
  
  const fileInputRef = useRef(null); // Ref to handle file input click
  const navigate = useNavigate();

  // Handle syllabus form submission
  const handleSyllabusForm = async (e) => {
    e.preventDefault();
    console.log(SubName, classes);

    let subobj = {
      SubName,
      classes,
    };

    try {
      const docRef = await addDoc(collection(database, 'Syllabus'), subobj);
      console.log('Document written with ID: ', docRef.id);
      navigate('/syllbuslist');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  // Trigger file input click
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      console.log('Uploaded file:', file);
      // Handle file saving logic or send to backend
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  return (
    <div>
      <Navbars />

      <div style={{ display: 'flex' }}>
        <div>
          <Options />
        </div>
        <div style={{ paddingLeft: '250px'}}>
          <form onSubmit={handleSyllabusForm}>
            <Paper sx={{ margin: 2, padding: 5, overflow: 'auto' }}>
              <Typography variant="h4" sx={{ marginBottom: 5, textAlign: 'center' }}>
                <u>Syllabus Add</u>
              </Typography>
              <TextField
                sx={{ mb: 3 }}
                fullWidth
                label="Subject Name"
                onChange={(e) => setSubName(e.target.value)}
              />
              <TextField
                sx={{ mb: 3 }}
                fullWidth
                label="Class"
                onChange={(e) => setClasses(e.target.value)}
              />

              {/* Upload PDF Button */}
              <Button fullWidth variant="contained" onClick={handleUploadClick}>
                Upload PDF
              </Button>

              {/* Hidden file input for PDF upload */}
              <input
                type="file"
                accept="application/pdf"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />

              <br />
              <br />
              <Button fullWidth variant="contained" type="submit">
                Submit
              </Button>
            </Paper>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Syllabusadd;
