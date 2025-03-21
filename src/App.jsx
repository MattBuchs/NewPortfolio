import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Project = lazy(() => import("./pages/Project"));
const Contact = lazy(() => import("./pages/Contact"));
const Error = lazy(() => import("./pages/Error"));

function App() {
    return (
        <BrowserRouter>
            <Suspense
                fallback={
                    <div className="flex justify-center items-center h-screen">
                        <ScaleLoader color="#000" size={30} />
                    </div>
                }
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:slug" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
