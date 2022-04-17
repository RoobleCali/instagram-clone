import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./components/feed/Feed";
import Profile from "./components/profile/Profile";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/User" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
