import Footer from "./components/Footer";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/Home";
import UserEngagements from "./pages/UserEngagements";
import LikedPages from "./pages/LikedPages";
import Navbar from "./components/Navbar";
import Location from "./pages/dashboard/Location";
import Keyword from "./pages/dashboard/Keyword";
import Tag from "./pages/dashboard/Tag";
import AllServer from "./pages/server/AllServer";
import Servers from "./pages/server/Servers";
import ActiveServer from "./pages/server/ActiveServer";
import IdleServer from "./pages/server/IdleServer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
          <Route index  element={<Keyword />} />
           <Route path="keyword" element={<Keyword />} />
           <Route path="location" element={<Location />} />
           <Route path="tag" element={<Tag/>} />
          </Route>

          <Route path="servers" element={<Servers />}>
           <Route index  element={<AllServer />} />
            <Route path="all" element={<AllServer />} />
           <Route path="active" element={<ActiveServer />} />
           <Route path="idle" element={<IdleServer />} />
          </Route>
          <Route path="/likes/:likeId" element={<LikedPages />} />
          <Route path="/engagements/:engagementId" element={<UserEngagements />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;