import React from "react"
import  "./Sidebar.css";
import {AiOutlineHome} from "react-icons/ai";
import {BsTicketPerforated} from "react-icons/bs"
import { FiSettings } from "react-icons/fi";
import { TbFileInvoice } from "react-icons/tb";

export const Sidebar:React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img className="sidebar__logo-img" src="https://scontent.fsgn6-2.fna.fbcdn.net/v/t1.15752-9/335968345_131426836542206_8133676188727322024_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=h1EauwMC5-kAX-8cQ2T&_nc_ht=scontent.fsgn6-2.fna&oh=03_AdTML3UUgL9hTpFTziFXt_G50NGYoLreMWfyMYiMDf-OIw&oe=643A08EC"
                 alt="" />
            </div>
            <ul className="sidebar__list">
                <li className="sidebar__list-item"><AiOutlineHome className="sidebar__list-item-home-icon"/>Trang chủ</li>
                <li className="sidebar__list-item active"><BsTicketPerforated className="side__list-item-ticket-icon"/>Quản lí vé</li>
                <li className="sidebar__list-item"><TbFileInvoice className="side__list-item-list-icon"/>Đối soát vé</li>
                <li className="sidebar__list-item"><FiSettings className="sidebar__list-item-setting-icon" />Cài đặt</li>
            </ul>
        </div>
    )
}
export default Sidebar;