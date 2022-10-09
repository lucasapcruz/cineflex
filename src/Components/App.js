import styled from "styled-components";
import GlobalStyle from "../globalstyles";
import { useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export default function App() {
    return(
        <>
        <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                </Routes>
            </BrowserRouter>
        </>
    )
}
