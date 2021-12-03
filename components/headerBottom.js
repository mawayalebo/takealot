import { ChevronDownIcon, SearchIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux';
import { selectDepartments , selectThirdPartyData } from '../features/slices/uiData';

const HeaderBotttom =({}) => {
    const departments = useSelector(selectDepartments);
    const thirdPartyData = useSelector(selectThirdPartyData);
    return ( 
        <div className="bg-[#0b79bf] px-[45px] pb-2">
            <div className="flex items-center py-2">
                <div className="relative px-3 flex-flex-col justify-center items-center"> 
                    <button className="relative flex items-center bg-[#4d4d4f] rounded-t-sm pr-[64px] p-[9px]">
                        <span className="text-white text-sm font-semibold flex-1 text-left whitespace-nowrap">Shop by Department</span>
                        <ChevronDownIcon className="h-4 text-white absolute right-2" />
                    </button>
                    <div className="absolute flex flex-col bg-white w-[89.5%] py-2 shadow-md z-30">
                        {
                            departments.map((data, index)=> (
                                <div key={index} className="group flex items-center px-2 hover:bg-[#0b79bf] hover:text-white">
                                    <span className="text-gray-600 text-xs flex-1 group-hover:text-white group-hover:p-2">{data}</span>
                                    <ChevronRightIcon className="h-4 text-gray-600 ml-2 group-hover:text-white" />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col flex-1 space-y-2 px-[12px] ">
                    
                    <div className="flex items-center flex-1 justify-center">
                        {/*search bar*/}
                        <input type="text" name="search" id="serachbar" className="py-1 rounded-l-sm border-0 text-xs w-[521px] flex-grow" placeholder="Search for products, brands..."/>        
                        {/*select department*/}
                        <div>
                            <select name="" id="" className="py-1 pr-[45px] text-xs">
                                <option value="all departments">All Departments</option>
                                {
                                    departments.map((data, index)=> (
                                        <option key={index} value={data}>{data}</option>
                                    ))
                                }
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