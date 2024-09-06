import React, { useEffect, useState } from 'react';
import Navbars from '../components/Navbar';
import Options from '../components/Options';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../cofig/firebase';
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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Syllabuslist = () => {
  const navigate = useNavigate();
  const [subdata, setSubdata] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // Fetch data from Firestore
  const getData = async () => {
    try {
      const arr = [];
      const getData = await getDocs(collection(database, 'Syllabus'));

      getData.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });

      setSubdata(arr);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle PDF download
  const handleDownload = (pdfUrl) => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'syllabus.pdf'; // Set the default filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('PDF file not available.');
    }
  };

  return (
    <div>
      <Navbars />

      <div style={{ display: 'flex' }}>
        <div>
          <Options />
        </div>
        <div style={{ paddingLeft: '100px', paddingTop: '50px', backgroundColor: 'whitesmoke' }}>
          <h1 style={{ textAlign: 'center' }}>Syllabus List</h1>
          <br />
          <br />
          <Button onClick={() => navigate('/syllbusadd')} sx={{ backgroundColor: 'blue', color: 'white', marginBottom: '2px' }}>
            Add
          </Button>

          <TableContainer component={Paper} style={{ overflowY: 'auto' }}>
            <Table sx={{ minWidth: 850, overflow: 'auto' }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Id</StyledTableCell>
                  <StyledTableCell align="right">Subject Name</StyledTableCell>
                  <StyledTableCell align="right">Class</StyledTableCell>
                  <StyledTableCell align="right">Download</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subdata.map((e) => (
                  <StyledTableRow key={e.id}>
                    <StyledTableCell component="th" scope="row">
                      {e.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">{e.SubName}</StyledTableCell>
                    <StyledTableCell align="right">{e.classes}</StyledTableCell>
                    <StyledTableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => handleDownload(e.pdfUrl)} // Assuming 'pdfUrl' holds the path to the PDF
                      >
                        Download PDF
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Syllabuslist;
