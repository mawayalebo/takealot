import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/solid";

const HeaderMobile = () => {
    return ( 
        <div className="relativebg-white w-[100%] shadow-md">
            <div className="flex py-[16px] px-[17px] items-center space-x-2 lg:hidden w-screen">
                <MenuIcon className="text-gray-600 h-[24px]" />
                <img src={"/images/logo.svg"} alt="logo" className="h-[29px] w-[140px] flex-1" />
                <SearchIcon className="text-gray-600 h-[24px]" />
                <ShoppingCartIcon className="text-gray-600 h-[24px]" />
            </div>
        </div>
     );
}
 
export default HeaderMobile;