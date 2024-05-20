import React, { Fragment } from "react";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Practice() {
  return (
    <div>
      <h1>Hello RouterDom</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <Fragment>
      <h1>A lovely home for lovely person</h1>
    </Fragment>
  );
}
function About() {
  return (
    <Fragment>
      <h1>This is about section,what about u</h1>
    </Fragment>
  );
}

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
}
export default Practice;
