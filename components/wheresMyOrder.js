
const WheresMyOrder = () => {
    return ( 
        <div className="p-2 shadow-md">
            <div className="relative flex items-center overflow-hidden">
                <div className="absolute bg-[#50bcff] rounded-full h-40 w-40 -top-8 -left-20"></div>
                
                <div className="relative">
                     <img src="/images/truck_image.svg" className="" width={100} height={80}/>
                </div>
                <div className="flex flex-col p-2 pl-4">
                    <h1 className="font-bold whitespace-nowrap">Where's my order?</h1>
                    <span className="text-xs">Check your delivery or collection status.</span>
                </div>   
            </div>
        </div>
     );
}
 
export default WheresMyOrder;