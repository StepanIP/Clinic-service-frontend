import { Routes ,Route } from 'react-router-dom';
import React from "react";
import Home from "./pages/home/Home";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/singup/SignUp";
import Account from "./pages/account/Account";
import Schedule from "./pages/shedule/Schedule";
import ProcedureRooms from "./pages/procedurerooms/ProcedureRooms";
import Patients from "./pages/patients/Patients";

function App() {
  return (
    <div className="App" style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    }
    }>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/schedule' element={<Schedule/>}/>
            <Route path='/procedurerooms' element={<ProcedureRooms/>}/>
            <Route path='/patients' element={<Patients/>}/>
        </Routes>
    </div>
  );
}

export default App;
