import React from 'react';
import newletter from '../../assets/images/newsletter.png';

const Footer = () => {

    return (
        <>
            <div className='bg-midnight'>
                <div className='container mx-auto py-16'>
                    <div className='flex justify-between flex-col md:flex-row items-center gap-6 md:gap-0'>
                        <div className='flex items-center gap-4'>
                            <img src={newletter} alt="" />
                            <h1 className='text-white text-xl font-bold'>Sign Up For Newsletter</h1>
                        </div>

                        <div className=''>
                            <div className="join">
                                <div>
                                    <div>
                                    <input className="input input-bordered join-item" placeholder="Your Email"/>
                                    </div>
                                </div>
                                
                                <div className="indicator">
                                    <button className="btn join-item uppercase">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-b-2 border-silver'></div>

                <div className='container mx-auto'>
                    <footer className="footer py-10 text-white px-14 md:px-0">
                        <nav>
                            <header className="footer-title">Information</header> 
                            <a className="link link-hover">Privacy Policy</a>
                            <a className="link link-hover">Refund Policy</a>
                            <a className="link link-hover">Shipping Policy</a>
                            <a className="link link-hover">Terms of Services</a>
                            <a className="link link-hover">Bolgs</a>
                        </nav> 
                        <nav>
                            <header className="footer-title">Account</header> 
                            <a className="link link-hover">Search</a>
                            <a className="link link-hover">About Us</a>
                            <a className="link link-hover">FAQ</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Size Chart</a>
                        </nav>
                        <nav>
                            <header className="footer-title">Quick Links</header> 
                            <a className="link link-hover">Accessories</a>
                            <a className="link link-hover">Laptops</a>
                            <a className="link link-hover">Smartphones</a>
                            <a className="link link-hover">Headphones</a>
                            <a className="link link-hover">Smart Watehes</a>
                        </nav>
                    </footer>
                </div>

                <div className='border-b-2 border-silver'></div>
                <div className='container mx-auto px-14 md:px-0'>
                    <div className='text-white text-base font-medium py-4'>
                        <p>&copy; {new Date().getFullYear()}; Selz Powered by Developer</p>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Footer;