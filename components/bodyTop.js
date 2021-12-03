import Banner from "./banner";

const BodyTop = () => {
    return ( <div className="relative flex items-center px-[45px]">
        <div className="w-[100vw]">

        </div>
        <div className="flex p-5">
            <div className="relative flex flex-col">
                <Banner/>
                <div>
                    <h1>featured brands</h1>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="w-[306px]">
                    <h1>wheres my order</h1>
                </div>
                <div>
                    <h1>Advert goes here</h1>
                </div>
            </div>
        </div>
        
    </div> );
}
 
export default BodyTop;