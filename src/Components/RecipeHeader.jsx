export default function RecipeHeader(props){
    return(
          {/* props properity of react JS */}
        <header className="recipe-header">
            <h1>{props.name}</h1>
            <p>Prep Time : {props.time} | Regional : {props.region}</p>
        </header>
    );
}
