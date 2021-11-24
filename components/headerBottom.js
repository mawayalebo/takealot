import { ChevronDownIcon } from '@heroicons/react/solid';

const HeaderBotttom = () => {
    return ( 
        <div className="bg-[#0b79bf] h-20 px-[45px]">
            <div className="flex items-center py-2">
                <div className="px-3"> 
                    <div className="flex items-center p-2 bg-[#4d4d4f] rounded-t-md w-60">
                        <span className="text-white font-semibold flex-1">Shop by Department</span>
                        <ChevronDownIcon className="h-4 text-white ml-2" />
                    </div>
                </div>
                <div className="flex">
                    {/*search bar*/}
                    <div>
                        <input type="search" name="search" id="serachbar" />
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default HeaderBotttom;