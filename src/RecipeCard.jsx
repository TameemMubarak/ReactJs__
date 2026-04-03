import RecipeHeader from "./Components/RecipeHeader";
import RecipeBody from "./Components/RecipeBody";
import RecipeFooter from "./Components/RecipeFooter";

 export default function RecipeCard(propss){
    return (
// the template for the food item details.
     <section className="recipe-card">
      {/* props properity of react JS is used here and the value are passed as attributes values. */}
            <RecipeHeader name={propss.item_name} time={propss.item_time} region={propss.item_region}/>
            <RecipeBody  />
            <RecipeFooter />
        </section>
    );
}
