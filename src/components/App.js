import styled from "styled-components";
import GlobalStyle from "../globalstyles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Header from "./Header";
import SessionPage from "../pages/SessionPage";

export default function App() {

    const [selectedMovie, setSelectedMovie] = useState()


    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/sessoes/:idFilme" element={<SessionPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
