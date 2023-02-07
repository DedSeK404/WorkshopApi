import { Card } from "./Card"

export const RecipeList = ({list}) =>{
    return(
        <>
        {list.map((e)=>(
            <Card recipe={e.recipe}/>
        ))}
        
        
        </>
    )
}