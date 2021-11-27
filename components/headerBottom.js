import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid'

const HeaderBotttom =({}) => {
    
    return ( 
        <div className="bg-[#0b79bf] px-[45px] pb-2">
            <div className="flex items-center py-2">
                <div className="px-3"> 
                    <button className="flex items-center p-2 bg-[#4d4d4f] rounded-t-sm w-full">
                        <span className="text-white font-semibold flex-1">Shop by Department</span>
                        <ChevronDownIcon className="h-4 text-white ml-2" />
                    </button>
                    <div>
                        {
                            
                        }
                    </div>
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
            <div className="flex items-center">
                <div className="w-[225px]">
                    <span></span>
                </div>
                <div className="flex items-center rounded-md overflow-x-scroll scrollbar-hide  justify-start">
                    {/*
                       thirdPartyData.map((data, index) => {
                                return (
                                    <div key={index} className={`${index===0?"bg-[#f9db09] hover:bg-[#dac003]":"bg-white hover:bg-[#dbdada]"} rouded-sm px-[8px] py-1 border-solid border-gray-400 border-l-[1px] hover:cursor-pointer`}>
                                        <span className="text-[#333] text-sm whitespace-nowrap">{data}</span>
                                    </div>
                                )
                            }
                        )*/
                    }
                </div>
            </div>
            
        </div>
     );
}


export default HeaderBotttom;