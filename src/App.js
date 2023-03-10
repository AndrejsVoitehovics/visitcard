
import React, {useLayoutEffect} from "react";
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
import {useLocation} from "react-router-dom";
function App() {

    const Wrapper = ({children}) => {
        const location = useLocation();
        useLayoutEffect(() => {
            document.documentElement.scrollTo(0, 0);
        }, [location.pathname]);
        return children
    }



    return (
<Wrapper>
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
</Wrapper>
    );
}

export default App;
