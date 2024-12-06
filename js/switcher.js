function switcher(x) {
    let id = x.id;
    let doc = document.getElementById(id + "-page");
    let comp = getComputedStyle(doc);

    if (comp.getPropertyValue("display") != "none") {
        return;
    } 

    if (id == "release" && comp.getPropertyValue("display") == "none") {
        document.getElementById("library-page").style.display = "none";
        doc.style.display = "grid";
    } else if (id == "library" && comp.getPropertyValue("display") == "none") {
        document.getElementById("release-page").style.display = "none";
        doc.style.display = "block";
    }
}