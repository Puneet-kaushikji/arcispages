import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import SidebarMenu from './Components/SidebarMenu/SidebarMenu';
import LoginPage from './Components/LoginPage/LoginPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import OtpVerification from './Components/OtpVerification/OtpVerification';
import Dashboard from './Pages/Dashboard/CameraGrouping';

// import Renamee from './Pages/RenamePage/Renamee';
import CamSetButton from './Pages/RenamePage/CamSetButton';

function App() {
  const location = useLocation();

  // Define the paths where Header and Sidebar should not render
  const noHeaderSidebarPaths = ['/signup', '/', '/otp'];

  const shouldShowHeaderAndSidebar = !noHeaderSidebarPaths.includes(location.pathname);

  return (
    <div className="App">
      {shouldShowHeaderAndSidebar && <Header />}
      <div style={{display:"flex"}}>
      {shouldShowHeaderAndSidebar && <SidebarMenu />}
      <Routes>
        <Route path='/rename' element={<CamSetButton/>} />

        <Route path='/' element={<LoginPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='/otp' element={<OtpVerification />} />
        <Route path='/dashboard' element ={<Dashboard/>}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
