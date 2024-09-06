import React from 'react'
import Options from '../components/Options'
import Navbars from '../components/Navbar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Feestructure = () => {

  const navigate = useNavigate();
  return (
    <div>

    <Navbars/>

    <div style={{display:'flex'}}>
   <div>
     <Options/>
   </div>
   <div style={{paddingLeft:"200px",paddingTop:"100px",paddingRight:"100px"}}>
         <h1 style={{textAlign:"center"}}> <u>Fees Voucher</u> </h1><br /><br />
         
         <Card className="text-center">
      <Card.Header>Fee Voucher </Card.Header>
      <Card.Body>
      <Card.Title>Class 1</Card.Title>

        <Card.Title>Monthly Fee : <span style={{paddingLeft:"500px"}}> 500 </span></Card.Title>
        <Card.Title>Yearly Fee : <span style={{paddingLeft:"500px"}}> 6000 </span></Card.Title>
        <Button variant="primary" onClick={()=>navigate('/feesubmission')}>Pay Now</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card className="text-center">
      <Card.Header>Fee Voucher </Card.Header>
      <Card.Body>
      <Card.Title>Class 2</Card.Title>

        <Card.Title>Monthly Fee : <span style={{paddingLeft:"500px"}}> 600 </span></Card.Title>
        <Card.Title>Yearly Fee : <span style={{paddingLeft:"500px"}}> 7200 </span></Card.Title>
        <Button variant="primary" onClick={()=>navigate('/feesubmission')}>Pay Now</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card className="text-center">
      <Card.Header>Fee Voucher</Card.Header>
      <Card.Body>
      <Card.Title>Class 3</Card.Title>

        <Card.Title>Monthly Fee : <span style={{paddingLeft:"500px"}}> 700 </span></Card.Title>
        <Card.Title>Yearly Fee : <span style={{paddingLeft:"500px"}}> 8400 </span></Card.Title>
        <Button variant="primary" onClick={()=>navigate('/feesubmission')}>Pay Now</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card className="text-center">
      <Card.Header>Fee Voucher </Card.Header>
      <Card.Body>
      <Card.Title>Class 4</Card.Title>

        <Card.Title>Monthly Fee : <span style={{paddingLeft:"500px"}}> 800 </span></Card.Title>
        <Card.Title>Yearly Fee : <span style={{paddingLeft:"500px"}}> 9600 </span></Card.Title>
        <Button variant="primary" onClick={()=>navigate('/feesubmission')}>Pay Now</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card className="text-center">
      <Card.Header>Fee Voucher </Card.Header>
      <Card.Body>
      <Card.Title>Class 5</Card.Title>

        <Card.Title>Monthly Fee : <span style={{paddingLeft:"500px"}}> 900 </span></Card.Title>
        <Card.Title>Yearly Fee : <span style={{paddingLeft:"500px"}}> 10800 </span></Card.Title>
        <Button variant="primary" onClick={()=>navigate('/feesubmission')}>Pay Now</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card className="text-center">
      <Card.Header>Fee Voucher </Card.Header>
      <Card.Body>
      <Card.Title>Class 6</Card.Title>

        <Card.Title>Monthly Fee : <span style={{paddingLeft:"500px"}}> 1000 </span></Card.Title>
        <Card.Title>Yearly Fee : <span style={{paddingLeft:"500px"}}> 12000 </span></Card.Title>
        <Button variant="primary" onClick={()=>navigate('/feesubmission')}>Pay Now</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card className="text-center">
      <Card.Header>Fee Voucher </Card.Header>
      <Card.Body>
      <Card.Title>Class 7</Card.Title>

        <Card.Title>Monthly Fee : <span style={{paddingLeft:"500px"}}> 1100 </span></Card.Title>
        <Card.Title>Yearly Fee : <span style={{paddingLeft:"500px"}}> 13200 </span></Card.Title>
        <Button variant="primary" onClick={()=>navigate('/feesubmission')}>Pay Now</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card className="text-center">
      <Card.Header>Fee Voucher </Card.Header>
      <Card.Body>
      <Card.Title>Class 8</Card.Title>

        <Card.Title>Monthly Fee : <span style={{paddingLeft:"500px"}}> 1200 </span></Card.Title>
        <Card.Title>Yearly Fee : <span style={{paddingLeft:"500px"}}> 14400 </span></Card.Title>
        <Button variant="primary" onClick={()=>navigate('/feesubmission')}>Pay Now</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card className="text-center">
      <Card.Header>Fee Voucher </Card.Header>
      <Card.Body>
      <Card.Title>Class 9</Card.Title>

        <Card.Title>Monthly Fee : <span style={{paddingLeft:"500px"}}> 1300 </span></Card.Title>
        <Card.Title>Yearly Fee : <span style={{paddingLeft:"500px"}}> 15600 </span></Card.Title>
        <Button variant="primary" onClick={()=>navigate('/feesubmission')}>Pay Now</Button>
      </Card.Body>

    </Card>
    <br /><br />
    <Card className="text-center">
      <Card.Header>Fee Voucher </Card.Header>
      <Card.Body>
      <Card.Title>Class 10</Card.Title>

        <Card.Title>Monthly Fee : <span style={{paddingLeft:"500px"}}> 1400 </span></Card.Title>
        <Card.Title>Yearly Fee : <span style={{paddingLeft:"500px"}}> 16800 </span></Card.Title>
        <Button variant="primary" onClick={()=>navigate('/feesubmission')}>Pay Now</Button>
      </Card.Body>

    </Card>
   
    
   
   

    
   </div>
    </div>
 </div>
  )
}

export default Feestructure
