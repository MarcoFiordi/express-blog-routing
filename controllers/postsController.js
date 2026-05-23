import posts from "../data/posts.js";


function index(request, response){
    response.json(posts);
}

function create(request, response) {
    response.json({
        messaggio: "richiesta di creazione"
    })
}

function update(request, response){
    const id = request.params.id;
    response.json({
        messaggio:`modifica del post ${id}`
    })
}

export { index,
    create,
    update };