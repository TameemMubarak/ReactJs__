import RecipeHeader from "./Components/RecipeHeader";
import RecipeBody from "./Components/RecipeBody";
import RecipeFooter from "./Components/RecipeFooter";

 export default function RecipeCard(propss){
    return (
        <section className="recipe-card">
            <RecipeHeader name={propss.item_name} time={propss.item_time} region={propss.item_region}/>
            <RecipeBody  />
            <RecipeFooter />
        </section>
    );
}