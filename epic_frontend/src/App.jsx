import './App.css'
import LocomotiveScroll from 'locomotive-scroll';
import CustomCursor from './components/CustomCursor';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import User_Calendar from './components/User_Calendar';
import ContactWithNav from './components/ContactWithNav';
import ContactUserNav from './components/ContactUserNav';
import ReportForm from './components/ReportForm';
import User_Shop from './components/User_Shop';
// import Shop from './components/shop';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>

    <CustomCursor/>
    <BrowserRouter>
    
    <Routes>

    <Route path='/' element = {<Home/>}></Route>
    <Route path='/login' element = {<Login/>}></Route>
    <Route path='/register' element ={<Register/>}></Route>
    <Route path='/track/:id' element = {<User_Calendar/>}></Route>
    <Route path='/contactUs' element = {<ContactWithNav/>}> </Route>
    <Route path='/contactUs/:id' element = {<ContactUserNav/>}> </Route>
    <Route path='/userform/:id' element={<ReportForm/>}></Route>
    <Route path='/shop/:id' element={<User_Shop/>}></Route>

    </Routes>

    </BrowserRouter>
      
    </>
  )
}

export default App
