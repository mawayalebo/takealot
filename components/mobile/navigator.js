
const Navigator = ({data}) => {
    
    return ( 
        <div className="bg-white shadow-md flex flex-col mt-6">
            {
                data?.map((item, index) => {
                    return (
                        <div key={index} className="shadow-sm">
                            <div className="flex p-4 space-x-4">
                                {
                                    item.icon?<item.icon className={` h-[24px] text-[${item.icon_color}]`} />:null
                                }
                                <div className="flex-1">
                                    <span className="text-[#4d4d4f] text-xs">{item.title}</span>
                                </div>
                                {
                                    item.indicator?<span className="text-xs text-[#4d4d4f]">{item.indicator}</span>:null
                                }
                                {
                                    item.actionIcon?<item.actionIcon className="h-[14px] text-[#4d4d4f]" />:null
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Navigator;