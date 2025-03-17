import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100 p-5">
                <nav className="flex justify-between bg-blue-600 p-4 text-white">
                    <h1 className="text-xl font-bold">My Portfolio</h1>
                    <div>
                        <Link to="/" className="mr-4">Home</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
