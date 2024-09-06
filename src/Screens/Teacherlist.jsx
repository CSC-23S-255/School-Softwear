import React, { useEffect, useState } from 'react'
import Navbars from '../components/Navbar'
import Options from '../components/Options'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../cofig/firebase'
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  


const Teacherlist = () => {

    const navigate = useNavigate();
    const [Techerdata,setTeacherdata] = useState([]);
    

    useEffect(() => {
      getData();
    },[]);
  
    //   Data get from firebase Firestore Database
  
    const getData = async () => {
      try {
        const arr = [];
        const getData = await getDocs(collection(database, "Teachers"));
  
        getData.forEach((doc) => {
          arr.push({ ...doc.data(), id: doc.id });
        });
  
        setTeacherdata(arr);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(Techerdata)

  return (
    <div>

       <Navbars/>

       <div style={{display:'flex'}}>
      <div>
        <Options/>
      </div>
      <div style={{paddingLeft:"100px",paddingTop:"50px",backgroundColor:"whitesmoke"}}>
            <h1 style={{textAlign:"center"}}>Teachers List</h1><br /><br />
            <Button onClick={()=>navigate('/teachregister')} sx={{backgroundColor:'blue',color:'white',marginBottom:"2px"}}>Add Teacher</Button>


      <TableContainer component={Paper} style={{overflowY: 'auto'}}>
      <Table sx={{ minWidth: 850 ,overflow:"auto"}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Class</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {Techerdata.map((e) => (
            <StyledTableRow key={e.id}>
              <StyledTableCell component="th" scope="row">
                {e.id}
              </StyledTableCell>
              <StyledTableCell align="right">{e.Name}</StyledTableCell>
              <StyledTableCell align="right">{e.LastName}</StyledTableCell>
              <StyledTableCell align="right">{e.email}</StyledTableCell>
              <StyledTableCell align="right">{e.classes}</StyledTableCell>
              <StyledTableCell align="right">{e.Gender}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      </div>
       </div>
    </div>

  )
}

export default Teacherlist
