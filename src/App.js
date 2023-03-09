
import React from "react";
import './css/App.css';
import './css/FurnitureCss.css';
import {
    Routes,
    Route,
} from "react-router-dom";
import {Menu} from "./pages/Menu";
import {Home} from "./pages/Home";
import {Geo} from "./pages/Geo";
import {Buv} from  "./pages/Buv";
import {FinishingWorks} from  "./pages/FinishingWorks";
import {MiniatureWargaming} from  "./pages/MiniatureWargaming";
import {WebDev} from  "./pages/WebDev";
import {BuildInFurniture} from  "./pages/BuildInFurniture";
function App() {
    return (

        <Routes>
            <Route path="/" element={<Menu/>}>
                <Route index element={<Home/>}/>
                <Route path="Home" element={<Home/>}> </Route>
                <Route path="Geo" element={<Geo/>}> </Route>
                <Route path="Buv" element={<Buv/>}> </Route>
                <Route path="FinishingWorks" element={<FinishingWorks/>}> </Route>
                <Route path="WebDev" element={<WebDev/>}> </Route>
                <Route path="BuildInFurniture" element={<BuildInFurniture/>}> </Route>
                <Route path="MiniatureWargaming" element={<MiniatureWargaming/>}> </Route>
            </Route>
        </Routes>
    );
}

export default App;
