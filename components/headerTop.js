import { ChevronDownIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/solid';
import Image from 'next/image'

const HeaderTop = () => {
    return ( 
        <div className="flex items-center bg-white p-2 mx-[45px]">
                <div className="flex flex-1 items-center">
                    <div className="logo ">
                        <Image src="/images/logo.svg" alt="logo" width={180} height={37}/>
                    </div>
                    <div className="flex px-2">
                        <div className="p-2 border-r-2 border-solid border-gray-300">
                            <span className="text-xs hover:cursor-pointer hover:text-[#0b79bf] hover:underline">Help</span>
                        </div>
                        <div className="p-2">
                            <span className=" text-xs hover:cursor-pointer hover:text-[#0b79bf] hover:underline">Sell on takealot</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-end">
                    <div className="p-2 border-r-2 border-solid border-gray-300">
                        <span className="text-xs hover:cursor-pointer hover:text-[#0b79bf] hover:underline">Login</span>
                    </div>
                    <div className="p-2 border-r-2 border-solid border-gray-300">
                        <span className="text-xs hover:cursor-pointer hover:text-[#0b79bf] hover:underline">Register</span>
                    </div>
                    <div className="p-2 border-r-2 border-solid border-gray-300">
                        <span className="text-xs hover:cursor-pointer hover:text-[#0b79bf] hover:underline">Order</span>
                    </div>
                    <div className="p-2 flex space-x-2">
                        <span className="text-xs hover:cursor-pointer hover:text-[#0b79bf]">My Account</span>
                        <ChevronDownIcon className="h-4 text-gray-600" />
                    </div>
                    <div className="rounded-full bg-[#f4697a] p-1 hover:bg-red-600 ease-in transtition duration-500">
                        <HeartIcon className="text-white h-5"/>
                    </div>
                    <div className="flex px-2 py-1 space-x-2 items-center bg-[#1c8644] rounded-full ml-2">
                        <ShoppingCartIcon className="h-5 text-white"/>
                        <span className="text-white">0</span>
                    </div>
                </div>
                <div>

                </div>
            </div>
     );
}
 
export default HeaderTop;