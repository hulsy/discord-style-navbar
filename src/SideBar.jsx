import { BsPlus, BsFillLightningFill, BsLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import SideBarIcon from "./SideBarIcon"

export default function SideBar(){
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                        bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<FaFire size="28"/>} />
            <SideBarIcon icon={<FaPoo size="20"/>} />
            <SideBarIcon icon={<BsFillLightningFill size="20"/>}/>
            <SideBarIcon icon={<BsPlus size="32"/>} />
        </div>
    )
}