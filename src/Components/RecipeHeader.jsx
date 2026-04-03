export default function RecipeHeader(props){
    return(
        <header className="recipe-header">
            <h1>{props.name}</h1>
            {/* props properity of react JS */}
            <p>Prep Time : {props.time} | Regional : {props.region}</p>
        </header>
    );
}
