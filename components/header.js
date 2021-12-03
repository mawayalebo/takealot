import HeaderBotttom from "./headerBottom";
import HeaderTop from "./headerTop";

const Header = () => {
    return ( 
        <div className="relative">
            {/* header top */}
            <HeaderTop/>
            {/* header bottom */}
            <HeaderBotttom/>
        </div>
     );
}
 
export default Header;