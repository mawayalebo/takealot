import { XIcon } from '@heroicons/react/solid'
import { useState } from 'react'
const AlertInfo = () => {
    const [show, setShow] = useState(false);
    
    return ( 
        <div className={`${!show?'relative':'hidden'} bg-[#0b79bf] p-4 flex justify-center items-center`}>
            <div className="flex justify-center flex-1">
                <span className="text-white text-center tex-sm"><b>Stay informed!</b> Visit the SA Department of Health's website for COVID-19 updates: <a href="https://www.sacoronavirus.co.za" target="_blank"><u>www.sacoronavirus.co.za</u></a></span>
            </div>
            <div className="px-2">
                <XIcon onClick={() => setShow(true)} className = {` text-white h-4 hover:scale-125 transtion ease-out duration-300 cursor-pointer`}/>
            </div>
        </div>
     );
}
 
export default AlertInfo;