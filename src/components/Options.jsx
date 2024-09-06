import React from 'react';
import { Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

const Options = () => {
  const navigate = useNavigate();

  return (
    <Container
      style={{
        width: '300px',
        maxHeight: '630px',
        overflowY: 'auto',
        boxShadow: '2px 2px 2px 2px black',
        padding: '20px',
        position: 'sticky', // Makes the component sticky
        top: '10px', // Adjust this value as needed to control the sticky position
      }}
    >
      {/* Dropdown 1 */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="option1-label" sx={{ color: 'blue' }}>
         <h5> Students</h5>
        </InputLabel>
        <Select labelId="option1-label">
          <MenuItem sx={{ color: 'blue' }}>
            <NavLink to={'/stdregister'}>Student Registration</NavLink>
          </MenuItem>
          <MenuItem sx={{ color: 'blue' }} onClick={() => navigate('/studentlist')}>
            Student List
          </MenuItem>
        </Select>
      </FormControl>

      {/* Dropdown 2 */}
      <FormControl fullWidth margin="normal">
        <InputLabel sx={{ color: 'blue' }} id="option2-label">
         <h5> Teachers</h5>
        </InputLabel>
        <Select labelId="option2-label">
          <MenuItem sx={{ color: 'blue' }} onClick={() => navigate('/teachregister')}>
            Teacher Registration
          </MenuItem>
          <MenuItem sx={{ color: 'blue' }} onClick={() => navigate('/techlist')}>
            Teacher List
          </MenuItem>
        </Select>
      </FormControl>

      {/* Dropdown 3 */}
      <FormControl fullWidth margin="normal">
        <InputLabel sx={{ color: 'blue' }} id="option3-label">
           <h5>  Subjects</h5>
        </InputLabel>
        <Select labelId="option3-label">
          <MenuItem sx={{ color: 'blue' }} onClick={() => navigate('/subadd')}>
            Subject Add
          </MenuItem>
          <MenuItem sx={{ color: 'blue' }} onClick={() => navigate('/sublist')}>
            Subject List
          </MenuItem>
        </Select>
      </FormControl>

      {/* Dropdown 4 */}
      <FormControl fullWidth margin="normal">
        <InputLabel sx={{ color: 'blue' }} id="option4-label">
          <h5>Syllabus</h5>
        </InputLabel>
        <Select labelId="option4-label">
          <MenuItem sx={{ color: 'blue' }} onClick={() => navigate('/syllbusadd')}>
            Syllabus Form
          </MenuItem>
          <MenuItem sx={{ color: 'blue' }} onClick={() => navigate('/syllbuslist')}>
            Syllabus List
          </MenuItem>
        </Select>
      </FormControl>

      {/* Dropdown 5 */}
      <FormControl fullWidth margin="normal">
        <InputLabel sx={{ color: 'blue' }} id="option5-label">
          <h5>School</h5>
        </InputLabel>
        <Select labelId="option5-label">
          <MenuItem sx={{ color: 'blue' }} onClick={() => navigate('/stdregister')}>
            Students Registration Form
          </MenuItem>
          <MenuItem sx={{ color: 'blue' }} onClick={() => navigate('/teachregister')}>
            Teachers Registration Form
          </MenuItem>
        </Select>
      </FormControl>

      {/* Dropdown 6 */}
      <FormControl fullWidth margin="normal">
        <InputLabel sx={{ color: 'blue' }} id="option6-label">
          <h5>Class</h5>
        </InputLabel>
        <Select labelId="option6-label">
          <MenuItem sx={{ color: 'blue' }} onClick={() => navigate('/classfrom')}>
            Class Form
          </MenuItem>
          <MenuItem sx={{ color: 'blue' }} onClick={() => navigate('/classlist')}>
            Class List
          </MenuItem>
        </Select>
      </FormControl>

      {/* Dropdown 7 */}
      <FormControl fullWidth margin="normal">
        <InputLabel sx={{ color: 'blue' }} id="option7-label">
          <h5>Fees</h5>
        </InputLabel>
        <Select labelId="option7-label">
          <MenuItem sx={{ color: 'blue' }} onClick={() => navigate('/feevoucher')}>
            Fee Vouchers
          </MenuItem>
          <MenuItem sx={{ color: 'blue' }} onClick={() => navigate('/feesubmission')}>
            Fee Submission
          </MenuItem>
        </Select>
      </FormControl>

      {/* Dropdown 8 */}
      <FormControl fullWidth margin="normal">
        <InputLabel sx={{ color: 'blue' }} id="option8-label">
         <h5> Admission</h5>
        </InputLabel>
        <Select labelId="option8-label">
        <MenuItem sx={{ color: 'blue' }} onClick={() => navigate('/classfrom')}>
            Admission Form
          </MenuItem>
        </Select>
      </FormControl>

      {/* Dropdown 9 */}
      <FormControl fullWidth margin="normal">
        <InputLabel sx={{ color: 'blue' }} id="option9-label">
         <h5> Exam</h5>
        </InputLabel>
        <Select labelId="option9-label">
          <MenuItem sx={{ color: 'blue' }} onClick={()=>navigate('/examschedule')}>Exam schedule</MenuItem>
       
        </Select>
      </FormControl>
    </Container>
  );
};

export default Options;
