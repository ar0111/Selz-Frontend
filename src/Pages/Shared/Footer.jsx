import React from 'react';
import newletter from '../../assets/images/newsletter.png';

const Footer = () => {
    return (
        <>
            <div className='bg-midnight'>
                <div className='container mx-auto py-16'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-4'>
                            <img src={newletter} alt="" />
                            <h1 className='text-white text-xl font-bold'>Sign Up For Newsletter</h1>
                        </div>

                        <div>
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
                    <footer className="footer py-10 text-white">
                        <nav>
                            <header className="footer-title">Contact Us</header> 
                            <p className="link link-hover">Demo Store</p>
                            <p className="link link-hover">No. 1259 Freedom, New York, 11111</p>
                            <p className="link link-hover">United States</p>
                            <p className="link link-hover">+91-987654321</p>
                            <a className="link link-hover">demo@exampledemo.com</a>
                        </nav> 
                        <nav>
                            <header className="footer-title">Information</header> 
                            <a className="link link-hover hidden md:block">Privacy Policy</a>
                            <a className="link link-hover hidden md:block">Refund Policy</a>
                            <a className="link link-hover hidden md:block">Shipping Policy</a>
                            <a className="link link-hover hidden md:block">Terms of Services</a>
                            <a className="link link-hover hidden md:block">Bolgs</a>
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
                <div className='container mx-auto'>
                    <div className='text-white text-base font-medium py-4'>
                        <p>&copy; {new Date().getFullYear()}; Selz Powered by Developer</p>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Footer;