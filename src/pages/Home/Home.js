import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ol>
        <li>
          <Link to="client">Client</Link>
        </li>
        <li>
          <Link to="super-user">SuperUser</Link>
        </li>    <li>
          <Link to="contractor/dashboard">contractor</Link>
        </li>
      </ol>
    </div>
  );
}
