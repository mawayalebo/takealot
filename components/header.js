import HeaderBotttom from "./headerBottom";
import HeaderTop from "./headerTop";

const Header = () => {
    return ( 
        <div className="hidden lg:block relative">
            {/* header top */}
            <HeaderTop/>
            {/* header bottom */}
            <HeaderBotttom/>
        </div>
     );
}
 
export default Header;