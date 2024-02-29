import React, { useState } from "react";
import logo from '../assets/Images/logo.png'
import { HiHome, HiStar, HiPlayCircle, HiTv, HiMagnifyingGlass } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {

    const [toggle, setToggle] = useState(false);

    const menu = [
        {
            name: 'HOME',
            icon: HiHome,
        }, {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ]
    return <div className="flex justify-between p-5">
        <div className="flex gap-10 items-center">
            <img src={logo} className="w-[80px] md:w-[115px] object-cover mt-[-10px]" alt="logo" />
            <div className="hidden md:flex gap-8">
                {menu.map((menuItem, index) => (<HeaderItem key={index} name={menuItem.name} Icon={menuItem.icon} />)
                )}
            </div>
            <div className="flex md:hidden gap-7">
                {menu.map((menuItem, index) => index < 3 && (<HeaderItem key={index} name={''} Icon={menuItem.icon} />)
                )}
                {/* index<3&& chỉ hiển thị ra 3 items  */}
                <div className="md:hidden" onClick={() => setToggle(!toggle)}>
                    <HeaderItem Icon={HiDotsVertical} name={''} />
                    {toggle ? <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3
                   px-5 pt-4 pb-0">
                        {menu.map((menuItem, index) => index > 3 && (<HeaderItem key={index} name={menuItem.name} Icon={menuItem.icon} />))}
                    </div> : null}
                </div>
            </div>
        </div>
        <img src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/428623123_2117524685275651_2907463162550065241_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=L4gimAeaMtEAX-HNTKC&_nc_ht=scontent.fdad1-4.fna&oh=00_AfAYa-4TK9UTEcBK5apGIF-Q45VqdYv7W1zcs-y2acphEg&oe=65E0C670" className="w-[40px] h-[40px] rounded-full " alt="" />
    </div>
}

export default Header;
