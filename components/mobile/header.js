import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import { selectShowMobileNav, setShowMobileNav } from "../../features/slices/uiData";
import { useSelector, useDispatch} from "react-redux";

const HeaderMobile = () => {
    const dispatch = useDispatch();
    const showMobileNav = useSelector(selectShowMobileNav);
    return ( 
        <div className="relative bg-white w-[100%] shadow-md">
            <div className="flex py-[16px] px-[17px] items-center space-x-2 lg:hidden w-screen">
                <MenuIcon onClick={()=>{dispatch(setShowMobileNav(true))}} className="text-gray-600 h-[24px]" />
                <img src={"/images/logo.svg"} alt="logo" className="h-[29px] w-[140px] flex-1" />
                <SearchIcon className="text-gray-600 h-[24px]" />
                <ShoppingCartIcon className="text-gray-600 h-[24px]" />
            </div>
        </div>
     );
}
 
export default HeaderMobile;