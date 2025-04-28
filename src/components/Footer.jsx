import React from 'react'
import logo from "../assets/Vector.png"
import googleImage from "../assets/google-page-speed 1.png";
import facebook from "../assets/facebook 1.png";
import twitter from "../assets/twitter 1.png";
import linkedin from "../assets/linkedin 1.png";
import instagram from "../assets/instagram 1.png";

export const Footer = () => {

    const links = [
        { id: 1, title: "About us", link: "#" },
        { id: 2, title: "Services", link: "#" },
        { id: 3, title: "Case studies", link: "#" },
        { id: 4, title: "How it works", link: "#" },
        { id: 5, title: "Blog", link: "#" },
        { id: 6, title: "Careers", link: "#" },
        { id: 7, title: "Areas We Serve", link: "#" },
    ];

    const socialMediaHandle = [
        { id: 1, icon: facebook, link: "https://facebook.com" },
        { id: 2, icon: twitter, link: "https://twitter.com" },
        { id: 3, icon: linkedin, link: "https://linkedin.com" },
        { id: 4, icon: instagram, link: "https://instagram.com" },
    ];

    return (
        <div className="flex flex-col gap-y-10 w-full h-auto mx-auto pt-10 ">
            {/* Main content */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start w-full gap-10 px-20">
                
                {/* Company logo section */}
                <div className="flex flex-col gap-y-4">
                    <div className="flex items-center gap-x-2 font-inspiration font-normal text-[16px]">
                        <img src={logo} alt="company logo" className="w-6 h-auto" />
                        <span>Ik developers</span>
                    </div>

                    <div className="font-inter font-normal text-[16px] leading-[24px] max-w-xs text-[#4A5568]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>

                    <div className="mt-4">
                        <img src={googleImage} alt="google img" className="w-[150px] md:w-[200px]" />
                    </div>
                </div>

                {/* Links section */}
                <div className="flex flex-col gap-y-4">
                    <div className="font-bold text-[18px] text-[#4A5568]">Links</div>
                    <div className="flex flex-col gap-y-2">
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={link.link}
                                className="text-[#718096] font-poppins font-normal text-[16px] leading-[24px] hover:text-blue-600 transition-colors"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact us section */}
                <div className="flex flex-col gap-y-4 font-inter">
                    <div className="text-[18px] font-bold text-[#4A5568]">Contact us</div>
                    <div className="font-normal text-[16px] leading-[24px] max-w-xs text-[#718096]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                    <div className="font-normal text-[16px] text-[#718096]">
                        +923183561921
                    </div>
                </div>

                {/* Social media icons */}
                <div className="flex flex-col gap-y-4">
                    <div className="font-bold text-[18px] text-[#4A5568]">Follow us</div>
                    <div className="flex gap-4">
                        {socialMediaHandle.map((social) => (
                            <a
                                key={social.id}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-[40px] h-[40px] rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
                            >
                                <img src={social.icon} alt="social media icon" className="w-[20px] h-[20px]" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="flex justify-center items-center border-t-[1px] border-[#CBD5E0] font-inter py-6 font-normal text-[14px] text-[#4A5568]">
                © 2025 Copyright by IK Developers. All rights reserved.
            </div>
        </div>
    );
}
