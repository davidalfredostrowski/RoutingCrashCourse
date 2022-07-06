ubuntu@ip-172-31-40-64:~/test_routing/src$ cat App.js
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Post  from "./pages/Post";

function App() {
        return (
                <BrowserRouter>
                <div className="App">
                        <Header />
                </div>

                <Routes>
                <Route path="/"  element={<Home />}/>
                <Route path="/about"  element={<About />}/>
                <Route path="/profile"  element={<Profile />}/>
                <Route path="/post/:id" element={<Post />} />
                <Route path="*"  element={<NotFound />} />
                </Routes>
                </BrowserRouter>
        );
}





export default App;
