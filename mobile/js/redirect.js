const redir = {
    "bc": "../bandcamp",
    "sc": "../soundcloud"
};

function redirect(x) {
    let ham = document.getElementById("links");
    ham.style.display = "none";
    window.open(redir[x.id], "_blank")
}