import { ClockIcon } from "@heroicons/react/solid";

const DailyDealsMobile = () => {
    return ( 
        <div className="flex items-center bg-[#0fcc5e] p-2 lg:hidden">
            <div className="flex flex-1 max-h-4justify-center items-cente  space-x-2 items-center">
                <ClockIcon className="h-4 text-white" />
                <h1 className="uppercase text-white font-bold">Daily Deals</h1>
            </div>
            <div>
                <span className="text-white font-bold">View More</span>
            </div>
        </div>
     );
}
 
export default DailyDealsMobile;