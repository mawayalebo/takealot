const getDeptAPI = (req, res) =>{
   const data = ["Automotive & DIY",
    "Baby & Toddler",
    "Beauty",
    "Books & Courses",
    "Camping & Outdoor",
    "Cellphones & Wearables",
    "Fashion & Luggage",
    "Computers & Electronics",
    "Gaming",
    "Garden", "Pool & Patio",
    "Groceries & Household",
    "Health & Personal Care",
    "Home & Appliances",
    "Liquor",
    "Office & Stationery",
    "Pets",
    "Sport & Training",
    "Toys",
    "TV, Audio & Media"
    ];
    res.status(200).json(data);
    console.log(data);
}
export default getDeptAPI;