/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/"  element={<Home/>} />
                <Route path="/blog"  element={<Blog/>} />
                <Route path="/about"  element={<About/>} />
                <Route path="/contact"  element={<Contact/>} />
                <Route element={<NotFound/>} />
            </Routes>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
