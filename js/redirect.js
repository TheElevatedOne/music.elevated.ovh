const redir = {
    "bc": "/bandcamp",
    "sc": "/soundcloud"
};

function redirect(x) {
    window.open(redir[x.id], "_blank")
}