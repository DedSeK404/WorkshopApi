export const Search = ({searchRecipe,getSearch}) => {
    return(
        <div>
            <input onChange={(e)=> getSearch(e.target.value)} value={searchRecipe}/>
          
        </div>
    )
}