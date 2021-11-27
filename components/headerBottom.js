import { ChevronDownIcon, SearchIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux';
import { selectDepartments , selectThirdPartyData } from '../features/slices/uiData';

const HeaderBotttom =({}) => {
    const departments = useSelector(selectDepartments);
    const thirdPartyData = useSelector(selectThirdPartyData);
    return ( 
        <div className="bg-[#0b79bf] px-[45px] pb-2">
            <div className="flex items-center py-2">
                <div className="px-3 flex-flex-col items-center"> 
                    <button className="relative flex items-center bg-[#4d4d4f] rounded-t-sm pr-[64px] p-[9px]">
                        <span className="text-white text-sm font-semibold flex-1 text-left">Shop by Department</span>
                        <ChevronDownIcon className="h-4 text-white absolute right-2" />
                    </button>
                    <div className="absolute flex flex-col bg-white">
                        {
                            departments.map((data, index)=> (
                                <div key={index} className="flex items-center p-2">
                                    <span className="text-gray-600 text-xs flex-1">{data}</span>
                                    <ChevronRightIcon className="h-4 text-gray-600 ml-2" />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col flex-1 space-y-2 px-[12px]">
                    
                    <div className="flex items-center  flex-1 justify-end">
                        {/*search bar*/}
                        <input type="text" name="search" id="serachbar" className="py-1 rounded-l-sm text-xs w-[521px]" placeholder="Search for products, brands..."/>        
                        {/*select department*/}
                        <div>
                            <select name="" id="" className="py-1 pr-[25px] text-xs">
                                <option value="all departments">All Departments</option>
                            </select>
                        </div>
                        {/*search button*/}
                        <button className="flex items-center bg-[#4d4d4f] rounded-r-sm px-3 py-1">
                            <SearchIcon className="h-4 text-white" />
                        </button>
                    </div> 

                    <div className="flex items-center">
                    <div className="flex items-center rounded-md overflow-x-scroll scrollbar-hide  justify-start">
                        {
                            thirdPartyData.map((data, index) => {
                                        return (
                                            <div key={index} className={`${index===0?"bg-[#f9db09] hover:bg-[#dac003]":"bg-white hover:bg-[#dbdada]"} rouded-sm px-[8px]  border-solid border-gray-400 border-l-[1px] hover:cursor-pointer`}>
                                                <span className="text-[#333] text-xs whitespace-nowrap">{data}</span>
                                            </div>
                                        )
                                    }
                                )
                        }
                    </div>
                </div>
                </div>
               
               
            </div>
        </div>
     );
}


export default HeaderBotttom;