import React from "react";
import {Link} from "react-router";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content">
            <div className="w-11/12 mx-auto footer sm:footer-horizontal px-10 pt-10">
                <aside>
                    <Link to={"/"} className="btn text-xl bg-gradient-brand text-white rounded">
                        Rent Your Wheels
                    </Link>
                    <p>
                        Rent Your Wheels Corp.
                        <br />
                        Providing reliable tech since 2015
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link to={"/"} className="link link-hover">
                        Home
                    </Link>
                    <Link to={"/browseCars"} className="link link-hover">
                        Brows Cars
                    </Link>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
            <div className="divider w-11/12 mx-auto"></div>
            <div className="footer sm:footer-horizontal footer-center bg-base-200 text-base-content pb-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Rent Your Wheels Corp.</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
