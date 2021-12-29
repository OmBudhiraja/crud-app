import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import Home from "./pages/Home";
import PostDetailsPage from "./pages/PostDetailsPage";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/posts/:postId" element={<PostDetailsPage />} />
        <Route path="/posts/edit/:postId" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
