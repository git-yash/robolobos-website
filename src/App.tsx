import React from 'react';
import './App.css';
import RoboNavbar from "./Components/RoboNavbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./Screens/HomePage/HomePage";
import CalendarPage from "./Screens/CalendarPage/CalendarPage";
import ResourcesPage from "./Screens/ResourcesPage/ResourcesPage";
import BoosterPage from "./Screens/SupportUsDropDown/BoosterPage/BoosterPage";
import DonatePage from "./Screens/SupportUsDropDown/DonatePage/DonatePage";
import FundraisingPage from "./Screens/SupportUsDropDown/FundraisingPage/FundraisingPage";
import StorePage from "./Screens/SupportUsDropDown/StorePage/StorePage";
import FRCPage from "./Screens/TeamsDropDown/FRCPage/FRCPage";
import FTCPage from "./Screens/TeamsDropDown/FTCPage/FTCPage";
import VolunteerPage from "./Screens/VolunteerPage/VolunteerPage";

const App = () => {
  return (
      <>
          <Router>
              <RoboNavbar/>
              <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/Calender' element={<CalendarPage/>} />
                  <Route path='/Resources' element={<ResourcesPage/>} />
                  <Route path='/Support-Us/Booster' element={<BoosterPage/>} />
                  <Route path='/Support-Us/Donate' element={<DonatePage/>} />
                  <Route path='/Support-Us/Fundraising' element={<FundraisingPage/>} />
                  <Route path='/Support-Us/Store' element={<StorePage/>} />
                  <Route path='/Teams/FRC' element={<FRCPage/>} />
                  <Route path='/Teams/FTC' element={<FTCPage/>} />
                  <Route path='/Volunteer' element={<VolunteerPage/>} />
              </Routes>
          </Router>
      </>
  );
}

export default App;
