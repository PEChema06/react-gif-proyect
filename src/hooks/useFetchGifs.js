import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
 
const [images, setimages] = useState([]);
const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

     getGift(category)
     .then(gifs => {
       setimages(gifs)
       setIsLoading(false);
     });

   }, [])
 
 
 
    return {
    
    images,
    isLoading
  }
}
