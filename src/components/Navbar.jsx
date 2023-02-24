import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ISKON Juhu, Mumbai</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li> */}
                            <li class={`nav-item dropdown ${location.pathname === "/about" ? "active" : ""}`}>
                                <Link class="nav-link dropdown-toggle" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/aboutIscon">About ISKCON</Link></li>
                                    <li><Link class="dropdown-item" to="iskconJuhu">ISKCON Juhu</Link></li>
                                    <li><Link class="dropdown-item" to="/mission">Our Mission</Link></li>
                                    <li><Link class="dropdown-item" to="/founder">Founder Acharya</Link></li>
                                    <li><Link class="dropdown-item" to="/beliefs">Our Beliefs</Link></li>
                                </ul>
                            </li>
                            <li class={`nav-item dropdown ${location.pathname === "/temple" ? "active" : ""}`}>
                                <Link class="nav-link dropdown-toggle" to="/temple" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Temple
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/aboutIscon">What is inside?</Link></li>
                                    <li><Link class="dropdown-item" to="iskconJuhu">Activities</Link></li>
                                    <li><Link class="dropdown-item" to="/mission">Events</Link></li>
                                    <li><Link class="dropdown-item" to="/founder">Timings</Link></li>
                                    <li><Link class="dropdown-item" to="/beliefs">Vaishnava Calendar</Link></li>
                                    <li><Link class="dropdown-item" to="/beliefs">FCRA Reports</Link></li>
                                </ul>
                            </li>
                            <li class={`nav-item dropdown ${location.pathname === "/media" ? "active" : ""}`}>
                                <Link class="nav-link dropdown-toggle" to="/media" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Media
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/aboutIscon">Live Darshan</Link></li>
                                    <li><Link class="dropdown-item" to="iskconJuhu">Daily Sringer SDarshan</Link></li>
                                    <li><Link class="dropdown-item" to="/mission">DDaily Mangala Darshan</Link></li>
                                    <li><Link class="dropdown-item" to="/founder">Festival Darshan</Link></li>
                                    <li><Link class="dropdown-item" to="/beliefs">Kirtans & Lectures</Link></li>
                                    <li><Link class="dropdown-item" to="/beliefs">BTG Subscription</Link></li>
                                    <li><Link class="dropdown-item" to="/beliefs">Temple News</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/donate" ? "active" : ""}`} to="/donate">Donate</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/bookStore" ? "active" : ""}`} to="/bookStore">Book Store</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
