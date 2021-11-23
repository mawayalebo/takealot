import { XIcon } from '@heroicons/react/solid'

const AlertInfo = () => {
    return ( 
        <div className="bg-[#0b79bf] p-4 flex justify-center items-center">
            <div className="flex justify-center flex-1">
                <span className="text-white text-center tex-sm"><b>Stay informed!</b> Visit the SA Department of Health's website for COVID-19 updates: <a href="https://www.sacoronavirus.co.za" target="_blank"><u>www.sacoronavirus.co.za</u></a></span>
            </div>
            <div className="px-2">
                <XIcon className="text-white h-4"/>
            </div>
        </div>
     );
}
 
export default AlertInfo;