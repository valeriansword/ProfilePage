import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeProfile from "./components/Profile/HomeProfile";
import LearningProfile from "./components/Profile/LearningProfile";
import AnalyticsProfile from './components/Profile/AnalyticsProfile';
import Certifications from "./components/Profile/Certifications";
import SkillCentreNavbar from './components/SkillCentreNavbar';
import Sampl from './components/Profile/DriveFilePicker';
import  AuthProvider  from './components/Profile/AuthProvider';
import ProtectedComponent from './components/Profile/ProtectedComponent';



function App() {
  
  return (
    <BrowserRouter>
    <SkillCentreNavbar />
    <AuthProvider>{/*this is auth provider context api refer authprovider component for better undestanding */}
      <ProtectedComponent>
    <Routes>
      {/* <Route path='/' element={<HomeProfile />}></Route> */}
      {/* <Route path="/" element={<Sampl />} /> */}
      
      <Route path="/SkillCentre/profile" element={<HomeProfile />} />
			<Route path="/SkillCentre/profile/learnings" element={<LearningProfile />} />
			<Route path="/SkillCentre/profile/analytics" element={<AnalyticsProfile />} />
			<Route path="/SkillCentre/profile/certifications" element={<Certifications />} />
      
       
    </Routes>
         </ProtectedComponent>
      </AuthProvider>
    </BrowserRouter>
 )
}

export default App