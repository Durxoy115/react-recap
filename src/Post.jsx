export default function Post({post}){
    const{id, title, body} = post;

    return(
        <div className="post">
            <h3>ID: {id}</h3>
            <h4>Title: {title}</h4>
            <p>Body: {body}</p>
        </div>
    )
}