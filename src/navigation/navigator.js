import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AccordionPage from "../pages/AccordionPage";
import DropdownPage from "../pages/DropdownPage";
import SearchListPage from "../pages/SearchListPage";

const Navigator = () => {
    return (
        <Routes>
          <Route exact path="/" element={<AccordionPage />} />
          <Route path="/dropdown" element={<DropdownPage />} />
          <Route path="/searchlist" element={<SearchListPage />} />
        </Routes>
    )
}

export default Navigator;
