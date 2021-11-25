import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid'
const HeaderBotttom = () => {
    return ( 
        <div className="bg-[#0b79bf] h-20 px-[45px]">
            <div className="flex items-center py-2">
                <div className="px-3"> 
                    <button className="flex items-center p-2 bg-[#4d4d4f] rounded-t-sm w-full">
                        <span className="text-white font-semibold flex-1">Shop by Department</span>
                        <ChevronDownIcon className="h-4 text-white ml-2" />
                    </button>
                </div>
                <div className="flex justify-end flex-1">
                    
                    <div className="flex items-center  flex-1 justify-end px-2">
                        {/*search bar*/}
                        <input type="text" name="search" id="serachbar" className="py-1 flex-1 rounded-l-sm"/>        
                        {/*select department*/}
                        <div>
                            <select name="" id="" className="py-1 pr-10">
                                <option value="all departments">All Departments</option>
                            </select>
                        </div>
                        {/*search button*/}
                        <button className="flex items-center bg-[#4d4d4f] rounded-r-sm px-5 py-2">
                            <SearchIcon className="h-4 text-white" />
                        </button>
                    </div>   
                </div>
            </div>
            <div className="">
                
            </div>
        </div>
     );
}
 
export default HeaderBotttom;