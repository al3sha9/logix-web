import { BrowserRouter as Router , Routes,Route } from "react-router-dom"
import NAVBAR from './navbar/nav';
import NEWS from './news/news';

import MAIN from './main';


const Routers= ()=>{
    return (
        <>
        <Router>
        <NAVBAR />
            
            <Routes>
                <Route path="/" element={<MAIN/>}></Route>
                <Route path="/news" element={<NEWS/>}></Route>
            </Routes>
            
        </Router>
        
        </>
    )
}

export default Routers