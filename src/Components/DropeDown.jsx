import React, {useState} from "react";
import {useNavigate, useNavigation} from "react-router-dom";

const dropeDownOpt = [
    {id:1, name: 'DOMAIN_1.COM', path:'/'},
    {id:1, name: 'DOMAIN_2.COM', path:'/p2'},
    {id:1, name: 'DOMAIN_3.COM', path:'/p3'},
    {id:1, name: 'DOMAIN_4.COM', path:'/p4'},
    {id:1, name: 'DOMAIN_5.COM', path:'/p5'}
]

function DropeDown() {
    const [dropeDownValue, setDropeDownValue] = useState('ACCULYNX.COM');
    // const navigate = useNavigate();

    const changeHandler = (event) => {
        const selectedDropeDown = dropeDownOpt.find(option=>option.name === event.target.value);
        // navigate(selectedDropeDown.path);
        setDropeDownValue(event.target.value);
    }

    return (
        <div className="pt-3">
            <select className="w-52 h-10 bg-[#173B33] border-none text-white rounded-md border-[#1B463D] cursor-pointer" value={dropeDownValue} onChange={changeHandler}>
                {dropeDownOpt.map(v=>(
                    <option key={v.id} value={v.name}>
                        {v.name}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default DropeDown;