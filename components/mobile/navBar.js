import Navigator from "./navigator";
import { XIcon , ArrowRightIcon, ShoppingCartIcon, HeartIcon } from "@heroicons/react/solid";
import { selectShowMobileNav, setShowMobileNav } from "../../features/slices/uiData";
import { useSelector, useDispatch} from "react-redux";
import { useState } from "react";
import NavFooter from "./navFooter";

const NavBar = () => {
    const [ cartColor, setCartColor ] = useState("#0fcc5e");
    const dispatch = useDispatch();
    const showMobileNav = useSelector(selectShowMobileNav);

    const set1 = [
        {title:"Home", href:"/"},
        {title:"Shop by Category" , href:"/category", actionIcon: ArrowRightIcon},
        {title:"Deals"},
        {title:"Orders"},
        {title:"Account", href:"/account", actionIcon: ArrowRightIcon},
        {title:"Help"}
    ]

    const set2 = [
        {title:"Cart", icon:ShoppingCartIcon, icon_color:"" , href:"/cart", indicator: "0 Items"},
        {title:"List", icon:HeartIcon, icon_color: "" , href:"/list", actionIcon: ArrowRightIcon},
    ]
    return ( 
        <div className={`bg-[#0000008a] w-screen h-screen ${showMobileNav?"absolute":"hidden"} z-40 flex lg:hidden space-x-2`}>
                <div className="flex flex-col bg-[#f0f0f0] w-[90vw] h-screen">
                    <div className="flex p-[26px] bg-white shadow-md">
                        <div className="">
                            <img src="/images/logo.svg"  className="h-[23px] w-[111.03px] flex-1" />
                        </div>
                    </div>
                    <Navigator data={set1}/>
                    <Navigator data={set2}/>
                    <NavFooter />
                </div>
                <div className="p-2">
                    <XIcon onClick={()=>{dispatch(setShowMobileNav(false))}} className="h-[23px] text-white hover:scale-110"/>
                </div>
                
        </div>
     );
}
 
export default NavBar;