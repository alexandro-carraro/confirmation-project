import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Register/Register'
import Confirmation from './Confirmation/Confirmation'


function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Register/Register' element={<Register/>}/>
                <Route path='/Confirmation/Confirmation' element={<Confirmation/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App