import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import "./style.css";

export const Project = () => {
    return (
        <div className="project-wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}