import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const Banner = () => {
    return ( 
        <div className="z-[-100] w-[550px] h-[250px]">
            <Carousel showThumbs={false} showStatus={false} showIndicators={true} infiniteLoop={true} interval={3000}>
                <div className="w-[550px] h-[250px]">
                    <Image src="/images/banner_3.png" layout="fill"/>
                </div>
                <div className="w-[550px] h-[250px]">
                    <Image src="/images/banner_2.png" layout="fill"/>
                </div>
                <div className="w-[550px] h-[250px]">
                    <Image src="/images/banner_3.png" layout="fill"/>
                </div>
            </Carousel>
        </div>
     );
}
 
export default Banner;