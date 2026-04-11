import RecipeCard from "./RecipeCard";

export default function MenuCard(){
    return(
        // this the skeleton structure of the menu card 
        
      <div className="menu-card">
        <RecipeCard item_name="Biryani" item_time="30 Min" item_region="Deccan" />
        <RecipeCard item_name="Masala Dosa" item_time="10 Min" item_region="Deccan" />
        <RecipeCard item_name="Hyderbad Dum Biryani" item_time="30 Min" item_region="Deccan" />
        <RecipeCard item_name="Killi Parotta" item_time="25 Min" item_region="Deccan" />
        <RecipeCard item_name="Vanjara Fish Fry" item_time="15 Min" item_region="Deccan" />
        <RecipeCard item_name="Paniyaram" item_time="20 Min" item_region="Deccan" />
        <RecipeCard item_name="Idiyappam" item_time="5 Min" item_region="Deccan" />
        <RecipeCard item_name="KIchidi" item_time="5 Min" item_region="Deccan" />
        <RecipeCard item_name="Veg Pulav" item_time="5 Min" item_region="Deccan" />
        <RecipeCard item_name="Full Meals" item_time="10 Min" item_region="Deccan" />
      </div>
    );
}
