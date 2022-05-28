import Banner from "./banner";
import WheresMyOrder from "./wheresMyOrder";
import Image from 'next/image';

const BodyTop = () => {
    return ( 
    <div className="hidden  lg:relative lg:flex lg:items-center lg:!pl-16 max-w-6xl mx-auto">
        <div className="w-[20vw]">
        </div>
        <div className="flex p-5">
            <div className="relative flex flex-col">
                <Banner/>
                <div>
                    <h1>featured brands</h1>
                </div>
            </div>
            <div className="flex flex-col pl-4 space-y-4">
                <WheresMyOrder/>
                <div className="relative flex flex-col justify-center w-[100%] h-96">
                    <Image src="/images/ad1.png" layout="fill" className="relative"/> 
                </div>
            </div>
        </div>
        
    </div> 
    );
}
 
export default BodyTop;