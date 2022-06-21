import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Form from "./pages/Form";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Products/>}/>
            <Route path={'/main-page'} element={<MainPage/>}/>
            <Route path={'/form-page'} element={<Form />}/>
            <Route path={'*'} element={<NotFound/>}/>
        </Routes>
    );
}

export default App;
