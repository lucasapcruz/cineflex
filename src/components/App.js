import styled from "styled-components";
import GlobalStyle from "../globalstyles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Header from "./Header";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
