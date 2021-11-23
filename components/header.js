import Image from 'next/image'
const Header = () => {
    return ( 
        <div>
            {/* header top */}
            <div className="flex items-center bg-white p-5">
                <div className="flex items-center">
                    <div className="logo ">
                        <Image src="/images/logo.svg" alt="logo" width={180} height={37}/>
                    </div>
                    <div>
                        <div>
                            <span>Help</span>
                        </div>
                        <div>
                            <span>Sell on takealot</span>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            {/* header bottom */}
            <div>

            </div>
        </div>
     );
}
 
export default Header;