import { UserIcon } from "@heroicons/react/solid";

const NavFooter = () => {
    return ( 
        <div className="fixed bottom-0 flex bg-white shadow-md w-[87vw]">
            <div className="flex space-x-6 items-center p-4 w-full">
                <div className="bg-[#0b79bf] flex rounded-full items-center space-x-2 px-4 py-2">
                    <UserIcon className="h-6 text-white" />
                    <span className="text-white font-bold">Login</span>
                </div>
                <span className="text-[#0b79bf] font-bold">Register</span>
            </div>
        </div>
     );
}
 
export default NavFooter;