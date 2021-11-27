const thirdPartyAPI = (req, res) =>{
    const data = [
        "Blue Dot Sale", "Shop Christamas", "Summer", "New To Takealot", "Fashion Outlet", "Exclusive To Takealot", "Brand Stores", "Clerance"
     ];
     res.status(200).json(data);
 }
 export default thirdPartyAPI;