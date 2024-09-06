import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Screens/Login'
import Signup from './Screens/Signup'
import Dashborad from './Screens/Dashborad'
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentsAdd from './Screens/StudentsAdd'
import Studentlist from './Screens/Studentlist'
import Teacheradd from './Screens/Teacheradd'
import Teacherlist from './Screens/Teacherlist'
import SubjAdd from './Screens/SubjAdd'
import SubjList from './Screens/SubjList'
import Syllabusadd from './Screens/Syllabusadd'
import Syllabuslist from './Screens/Syllabuslist'
import Classfrom from './Screens/Classfrom'
import Classlist from './Screens/Classlist'
import Feestructure from './Screens/Feestructure'
import Feesubmission from './Screens/Feesubmission'
import Examschedule from './Screens/Examschedule'


const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='dashboard' element={<Dashborad/>}/>
          <Route path='stdregister' element={<StudentsAdd/>}/>
          <Route path='studentlist' element={<Studentlist/>}/>
          <Route path='teachregister' element={<Teacheradd/>}/>
           <Route path='techlist' element={<Teacherlist/>}/>
           <Route path='subadd' element={<SubjAdd/>}/>
           <Route path='sublist' element={<SubjList/>}/>
           <Route path='syllbusadd' element={<Syllabusadd/>}/>
           <Route path='syllbuslist' element={<Syllabuslist/>}/>
           <Route path='classfrom' element={<Classfrom/>}/>
           <Route path='classlist' element={<Classlist/>}/>
           <Route path='feevoucher' element={<Feestructure/>}/>
           <Route path='feesubmission' element={<Feesubmission/>}/>
           <Route path='examschedule' element={<Examschedule/>}/>
      </Routes>


    </div>
  )
}

export default App
