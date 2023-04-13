import Footer from "./components/Footer";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import UserEngagements from "./pages/UserEngagements";
import LikedPages from "./pages/LikedPages";
import Navbar from "./components/Navbar";
import Location from "./pages/Location";
import Tag from "./pages/Tag";
import Keyword from "./pages/Keyword";
import AllServer from "./pages/AllServer";
import Servers from "./pages/Servers";
import ActiveServer from "./pages/ActiveServer";
import IdleServer from "./pages/IdleServer";

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
        </Routes>
      <Footer />
    </div>
  );
}

export default App;