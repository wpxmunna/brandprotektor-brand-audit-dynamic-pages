import React from 'react';
import Logo from '../Assets/Group.png';
import GoogleLogo from '../Assets/Frame 9.png';
import '.././index.css';
import DropeDown from "./DropeDown";

function HeroSection() {
    return (
        <section className="bg-hero-bg bg-no-repeat w-full bg-cover h-auto pb-4">
            <div className="flex flex-row justify-center">
                <a href="#" className="mt-5" role="alert">
                    <img className="mt-5" src={Logo}/>
                </a>
            </div>
            <p className="text-[#FFAC00] text-center mt-10"><span className="text-[#95E3C5] mr-2">&gt; &gt; &gt;</span>GOOGLE BRAND AUDIT<span className="text-[#95E3C5] ml-2">&lt; &lt; &lt;</span></p>
            <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <div className="flex flex-wrap justify-center mt-10 gap-6">
                        <DropeDown/>
                        <p className="text-[42px] text-white font-roboto">Is Hijacking Your</p>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <div className="flex flex-wrap justify-center mt-2 gap-3">
                        <p className="text-[42px] text-white">Company Name Google</p>
                        <img className="w-10 h-10 mt-5" src={GoogleLogo}/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-10 mb-10">
                <button className="transform transition-all ease-in-out duration-500 font-bold w-52 h-14 rounded-3xl text-center bg-[#15CD5E] bg-gradient-to-br from-[#15CD5E] via-[#F9FF50] hover:-translate-y-1 hover:scale-100 bg-size-200 bg-pos-0 hover:bg-pos-100">FIGHT BACK NOW</button>
            </div>
        </section>
    );
}
export default HeroSection;