import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects";
import { superuserSidebarItems } from "../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../redux/reducers/shReducers";

import { useDispatch } from "react-redux";
export default function SuperUser() {
  const dispatch = useDispatch();
  dispatch(setSidebarItems(superuserSidebarItems));
  return (
    <div>
      <h1>SuperUser</h1>
      <Link to="/super-user/projects">Projects</Link>
    </div>
  );
}
