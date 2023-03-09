import React from "react";
import GooglePage from '../Assets/screencapture-google-search-2023-03-08-19_56_02.png'

const keyword = [
    {id:1, name:'DOMAIN_1 KEYWORD_1'},
    {id:1, name:'DOMAIN_1 KEYWORD_2'},
    {id:1, name:'DOMAIN_1 KEYWORD_3'},
    {id:1, name:'DOMAIN_1 KEYWORD_4'},
    {id:1, name:'DOMAIN_1 KEYWORD_5'},
];

function SideMenu () {
    return (
        <div className="flex flex-row h-auto bg-[#0F1C1D]">
            <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
                <div className="w-auto h-full text-white flex flex-row justify-center">
                    <ul className="text-[16px] leading-10 mt-10">
                        {
                            keyword.map((k,i) => (
                                <li key={k.id} className="text-sm sm:text-[16px] p-3 mb-6"><span className="border border-dashed border-white rounded-[100%] p-2 mr-2">{i+1}</span>{k.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-span-2 w-full h-full bg-white">
                    <img src={GooglePage}/>
                </div>
            </div>
        </div>
    );

};
export default SideMenu;
