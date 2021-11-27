const thirdPartyAPI = (req, res) =>{
    const data = [
        "Blue Dot Sale", "Shop Christmas", "Summer", "New To Takealot", "Fashion Outlet", "Exclusive To Takealot", "Brand Stores", "Clearance"
     ];
     res.status(200).json(data);
 }
 export default thirdPartyAPI;