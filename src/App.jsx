import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
