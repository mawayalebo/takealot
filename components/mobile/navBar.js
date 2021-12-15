import Navigator from "./navigator";
import { XIcon } from "@heroicons/react/solid";
import { selectShowMobileNav, setShowMobileNav } from "../../features/slices/uiData";
import { useSelector, useDispatch} from "react-redux";

const NavBar = () => {
    const dispatch = useDispatch();
    const showMobileNav = useSelector(selectShowMobileNav);

    const data = {}
    return ( 
        <div className={`bg-[#0000008a] w-screen h-screen ${showMobileNav?"absolute":"hidden"} z-40 flex lg:hidden space-x-2`}>
                <div className="flex flex-col bg-[#f0f0f0] w-[90vw] h-screen">
                    <div className="flex p-[26px] bg-white shadow-md">
                        <div className="">
                            <img src="/images/logo.svg"  className="h-[23px] w-[111.03px] flex-1" />
                        </div>
                    </div>
                    <Navigator data={data}/>
                </div>
                <div className="p-2">
                    <XIcon onClick={()=>{dispatch(setShowMobileNav(false))}} className="h-[23px] text-white hover:scale-110"/>
                </div>
                
        </div>
     );
}
 
export default NavBar;