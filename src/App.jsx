import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:slug" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
