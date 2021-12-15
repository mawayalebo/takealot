import { SearchIcon } from "@heroicons/react/solid";
import { selectShowSearchBar, setShowSearchBar } from "../../features/slices/uiData";
import { useSelector, useDispatch} from "react-redux";
const SearchBar = () => {
    const dispatch = useDispatch();
    const showSearchBar = useSelector(selectShowSearchBar);
    return ( 
        <div className={`${showSearchBar?"absolute":"hidden"} w-full top-0 bg-[#e6e6e6] z-30`}>
            <div className="flex items-center w-full">
                <div className="flex items-center justify-center p-[10px] space-x-4 w-full">
                    <div className="flex items-center bg-white p-[6px] flex-1 rounded-sm">
                        <SearchIcon className="h-[24px] text-[#5f5f60]"/>
                        <input type={"search"} placeholder="Search for products, brands ..."  className="flex-1 active:ring-transparent border-none"/>
                    </div>
                    <div className="flex justify-center">
                        <span onClick={()=>{dispatch( setShowSearchBar(false))}} className="font-bold text-[#5f5f60] uppercase">Cancel</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SearchBar;