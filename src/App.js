import "./App.css";
import User from "./components/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comments from "./components/Comments";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<User />} />
          <Route path="/posts/:id" element={<Posts />} />
          <Route path="/posts/comments/:id" element={<Comments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
