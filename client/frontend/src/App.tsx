import { Route, Routes } from 'react-router-dom'
import { Redirecter } from './components/Redirecter';
import Shortener from "./components/Shortener";
import { ErrorPage } from './components/ErrorPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shortener />} />
        <Route path="/:shortcode" element={<Redirecter />} />
        <Route path="/404" element={<ErrorPage/>} />
      </Routes>

      <ToastContainer/>    
    </>
  )
}

export default App
