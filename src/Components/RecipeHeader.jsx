export default function RecipeHeader(props){
    return(
        <header className="recipe-header">
            <h1>{props.name}</h1>
            <p>Prep Time : {props.time} | Regional : {props.region}</p>
        </header>
    );
}