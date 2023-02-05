import React from "react";

const NewsLetter = () => {
    return (
        <div className="w-full py-16 text-white px-4">
           <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">

                <div className="lg:col-span-2">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Protection against ransomware attacks</h1>
                    <p className="text-slate-500">Protect your information. Don't let your personal photos, files, and documents fall victim to hackers using ransomware.</p>
                </div>

                <div className="my-4">

                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
                        <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:opacity-70 ease-in-out duration-500">Notify Me</button>
                    </div>

                    <p>We Care About The Protection of Your Data. Read Our <span className="text-[#00df9a]">Privacy Policy.</span></p>
                    
                </div>

           </div>
        </div>
    )
}


export default NewsLetter