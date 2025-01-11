import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
    
    return (
        <BrowserRouter>
            
            <Routes>
                
                <Route path="/" element={<Home />} />
               
            </Routes>
            {/* </div> */}
        </BrowserRouter>
    );
}

export default App;
