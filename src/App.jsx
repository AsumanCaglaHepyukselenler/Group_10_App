import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import List from "./pages/list/List";
import RestaurantPage from "./pages/restaurant/RestaurantPage";
import SpaWellnessPage from "./pages/spaWellness/SpaWellnessPage";
import ScrollToTop from "./components/ScrollToTop";
import ActivityFacilityPage from "./pages/activityFacility/ActivityFacilityPage";

import RoomDeluxe from "./pages/roomDeluxe/RoomDeluxe";
import RoomStandard from "./pages/roomStandard/RoomStandard";
import RoomHoneymoon from "./pages/roomHoneymoon/RoomHoneymoon";
import RoomPanoramic from "./pages/roomPanaromic/RoomPanoramic";
import RoomFamily from "./pages/roomFamily/RoomFamily";
import RoomKing from "./pages/roomKing/RoomKing";

function App() {


  
  return(
    <BrowserRouter>
      <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hotels" element={<About/>}/>
            <Route path="/hotel/:id" element={<Hotel/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Admin" element={<Admin/>}/>
            <Route path="/searchResult" element={<List/>}/>
            <Route path="/Restaurant" element={<RestaurantPage/>}/>
            <Route path="/SpaWellness" element={<SpaWellnessPage/>}/>
            <Route path="/ActivitiesFacilities" element={<ActivityFacilityPage/>}/>
            <Route path="/standardRoom" element={<RoomStandard/>}/>
            <Route path="/deluxeRoom" element={<RoomDeluxe/>}/>
            <Route path="/honeymoonSuit" element={<RoomHoneymoon/>}/>
            <Route path="/panoromaSuit" element={<RoomPanoramic/>}/>
            <Route path="/kingRoom" element={<RoomKing/>}/>
            <Route path="/familyRoom" element={<RoomFamily/>}/>
        </Routes>
  </BrowserRouter>

  )
}

export default App;
