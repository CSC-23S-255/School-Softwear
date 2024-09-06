import React from 'react'
import Options from '../components/Options'
import Navbars from '../components/Navbar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Examschedule = () => {

  const navigate = useNavigate();
  return (
    <div>

    <Navbars/>

    <div style={{display:'flex'}}>
   <div>
     <Options/>
   </div>
   <div style={{paddingLeft:"300px",paddingTop:"100px",paddingRight:"100px"}}>
         <h1 style={{textAlign:"center"}}> <u>Exam SCHEDULE</u> </h1><br /><br />
         
         <Card >
      <Card.Header>Class 1 </Card.Header>
      <Card.Body>
      <Card.Title>Mathematics</Card.Title>

        <Card.Title>Date : 2024-8-15</Card.Title>
        <Card.Title>Start time : 9:00 AM | End time : 12:00</Card.Title>
        <Button variant="primary">Viwe details</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card >
      <Card.Header>Class 1 </Card.Header>
      <Card.Body>
      <Card.Title>Science</Card.Title>

        <Card.Title>Date : 2024-8-16</Card.Title>
        <Card.Title>Start time : 9:00 AM | End time : 12:00</Card.Title>
        <Button variant="primary">Viwe details</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card >
      <Card.Header>Class 2 </Card.Header>
      <Card.Body>
      <Card.Title>English</Card.Title>

        <Card.Title>Date : 2024-8-15</Card.Title>
        <Card.Title>Start time : 9:00 AM | End time : 12:00</Card.Title>
        <Button variant="primary">Viwe details</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card >
      <Card.Header>Class 2 </Card.Header>
      <Card.Body>
      <Card.Title>Islamiat</Card.Title>

        <Card.Title>Date : 2024-8-16</Card.Title>
        <Card.Title>Start time : 9:00 AM | End time : 12:00</Card.Title>
        <Button variant="primary">Viwe details</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card >
      <Card.Header>Class 3 </Card.Header>
      <Card.Body>
      <Card.Title>Mathematics</Card.Title>

        <Card.Title>Date : 2024-8-15</Card.Title>
        <Card.Title>Start time : 9:00 AM | End time : 12:00</Card.Title>
        <Button variant="primary">Viwe details</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card >
      <Card.Header>Class 4 </Card.Header>
      <Card.Body>
      <Card.Title>Mathematics</Card.Title>

        <Card.Title>Date : 2024-8-15</Card.Title>
        <Card.Title>Start time : 9:00 AM | End time : 12:00</Card.Title>
        <Button variant="primary">Viwe details</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card >
      <Card.Header>Class 5 </Card.Header>
      <Card.Body>
      <Card.Title>Science</Card.Title>

        <Card.Title>Date : 2024-8-15</Card.Title>
        <Card.Title>Start time : 9:00 AM | End time : 12:00</Card.Title>
        <Button variant="primary">Viwe details</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card >
      <Card.Header>Class 6 </Card.Header>
      <Card.Body>
      <Card.Title>Computer</Card.Title>

        <Card.Title>Date : 2024-8-15</Card.Title>
        <Card.Title>Start time : 9:00 AM | End time : 12:00</Card.Title>
        <Button variant="primary">Viwe details</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card >
      <Card.Header>Class 7 </Card.Header>
      <Card.Body>
      <Card.Title>Pak Studies</Card.Title>

        <Card.Title>Date : 2024-8-15</Card.Title>
        <Card.Title>Start time : 9:00 AM | End time : 12:00</Card.Title>
        <Button variant="primary">Viwe details</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card >
      <Card.Header>Class 8 </Card.Header>
      <Card.Body>
      <Card.Title>Biology</Card.Title>

        <Card.Title>Date : 2024-8-15</Card.Title>
        <Card.Title>Start time : 9:00 AM | End time : 12:00</Card.Title>
        <Button variant="primary">Viwe details</Button>
      </Card.Body>

    </Card>
   <br /><br />
   <Card >
      <Card.Header>Class 9 </Card.Header>
      <Card.Body>
      <Card.Title>Physics</Card.Title>

        <Card.Title>Date : 2024-8-15</Card.Title>
        <Card.Title>Start time : 9:00 AM | End time : 12:00</Card.Title>
        <Button variant="primary">Viwe details</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card >
      <Card.Header>Class 10 </Card.Header>
      <Card.Body>
      <Card.Title>Geography</Card.Title>

        <Card.Title>Date : 2024-8-15</Card.Title>
        <Card.Title>Start time : 9:00 AM | End time : 12:00</Card.Title>
        <Button variant="primary">Viwe details</Button>
      </Card.Body>

    </Card>
   
   

    
   </div>
    </div>
 </div>
  )
}

export default Examschedule
