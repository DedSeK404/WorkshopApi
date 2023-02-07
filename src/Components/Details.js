import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export const Details = () => {
    const [data, setData]=useState()
    const {idrecipe} = useParams()
    console.log(idrecipe)
    useEffect(()=>{
        const getOneRecipe = async () => {
            try {
                const res = await axios.get(
                  `https://api.edamam.com/api/recipes/v2/${idrecipe}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}
                  `
                );
                // console.log(res.data.hits)
                setData(res.data.recipe);
              } catch (error) {
                console.log(error);
              }
            };
            getOneRecipe();
        
    },[idrecipe])
    return(
        <div>

        </div>
    )
}