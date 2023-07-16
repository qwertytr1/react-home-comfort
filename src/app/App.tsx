import React from "react";

import { Layout } from "./layout/index";
import "app/app.css";
import { Basket } from "./basket/index";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/basket" element={<Basket />} />
        </Routes>
    );
}

export default App;
