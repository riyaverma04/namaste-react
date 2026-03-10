import React, { useState } from 'react';
import { useFetchRestaurantMenu } from '../utils/useFetchRestaurantMenu';  
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import { ExpandLess } from '@mui/icons-material';
import RestaurantMenuDetailsAccordianItemList from './RestaurantMenuDetailsAccordianItemList';
const RestaurantMenuDetailsAccordian=({restaurantMenu})=>{
//    const restaurentMenu = useFetchRestaurantMenu();
//     console.log("accordian data", restaurentMenu);
   const accordianDataArray = restaurantMenu.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card)=>{
    return card?.card?.card?.itemCards ;

   })
   const [openIndex, setOpenIndex] = useState(null);
   const handleArrowClick = (index)=>{
    
   
    if(openIndex === index){
        setOpenIndex(null);
    }    else{      
        setOpenIndex(index);
    }
   }

    return (
        <div>
            {
                
                accordianDataArray.map((card,index)=>{
                    const isOpen = openIndex === index;
                    return (
                      <div key={index} >
                          <div className="border-solid border-gray-400 shadow-md p-3 mt-5 flex justify-between items-center" 
                           
                          onClick={()=>handleArrowClick(index)}
                        >
                            <h2 className="text-xl font-bold">{card?.card?.card?.title}</h2>
                           {!isOpen ? <ExpandMoreIcon/> : <ExpandLess/>}
                        </div>
                        {/* accordian body */}
                        <div>
                            {isOpen ? <RestaurantMenuDetailsAccordianItemList accordianItemListArray={card?.card?.card?.itemCards} /> : null}

                        </div>
                        </div>
                    )
                })
            }
            
        </div>  
    )
}
export default RestaurantMenuDetailsAccordian;