export default function MenuItem(props){
console.log(props.imageData)
        return(
                <article id={props.id} className="col-6 card">
                    {props.imageData && <img src={props.imageData.image} className="card-img-top" />}
                    <h1 className="text-capitalize cursive card-body">{props.name} {props.price}</h1>
                    <p className="card-body">{props.description}</p>
                </article>
        );
    }