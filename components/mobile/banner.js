import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const BannerMobile = () => {
    return ( 
        <div className="relative w-[100vw] h-[250px] lg:hidden">
            <Carousel showThumbs={false} showStatus={false} showIndicators={true} infiniteLoop={true} interval={3} >
                <div className="w-screen h-[250px]">
                    <Image src="/images/banner_1.png" layout="fill" objectFit="cover"/>
                </div>
                <div className="w-screen h-[250px]">
                    <Image src="/images/banner_2.png" layout="fill" objectFit="cover"/>
                </div>
                <div className="w-screen h-[250px]">
                    <Image src="/images/banner_3.png" layout="fill" objectFit="cover"/>
                </div>
            </Carousel>
        </div>
     );
}
 
export default BannerMobile;