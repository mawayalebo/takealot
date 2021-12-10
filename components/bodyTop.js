import Banner from "./banner";
import WheresMyOrder from "./wheresMyOrder";

const BodyTop = () => {
    return ( <div className="relative flex items-center !pl-16">
        <div className="w-[20vw]">

        </div>
        <div className="flex p-5">
            <div className="relative flex flex-col">
                <Banner/>
                <div>
                    <h1>featured brands</h1>
                </div>
            </div>
            <div className="flex flex-col pl-4">
                <WheresMyOrder/>
                <div>
                    <h1>Advert goes here</h1>
                </div>
            </div>
        </div>
        
    </div> );
}
 
export default BodyTop;