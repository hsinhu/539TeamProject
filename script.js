$(".vintalight__photo").click(function popout(e){
    var element = e.target;
    if (element.tagName == "DIV") {
        var src = element.querySelector("img").getAttribute("src"),
            descrip = element.querySelector("img").getAttribute("alt"),
        vintalightOverlay = document.createElement("div");
        vintalightOverlay.classList.add("vintalight-overlay");
        vintalightOverlay.innerHTML = "\n<figure class=\"vintalight__container active\">\n<div class=\"vintalight__photo\">\n<img src=\"" + src + "\" alt=\"" + descrip + "\" class=\"vintalight__img\"/>\n</div>\n<figcaption class=\"vintalight__caption\">\n<h3 class=\"vintalight__text\">" + descrip + "</h3>\n</figcaption>\n<button class=\"vintalight__button\" id=\"button-close\">\u2715</button>\n</figure>\n";
        document.body.appendChild(vintalightOverlay);
        setTimeout(function () {
            vintalightOverlay.classList.add("active");
        }, 1);
        document.body.style.overflow = "hidden";
        // document.getElementById("button-close")
        document.getElementById("button-close").addEventListener("click", function () {
            vintalightOverlay.classList.remove("active");
            setTimeout(function () {
                document.body.removeChild(vintalightOverlay);
            }, 500);
            document.body.style.overflow = "auto";
        });
        window.addEventListener("keydown", Myfunction, {once: true});
    }
});

function Myfunction(e){
    if (e.key === "Escape") {
        if ($(".active").length == 2){
        document.getElementById("button-close").click();}
    }
}

$(".vintalight__container").keydown(function(e){
    if (e.keyCode ==13 ){
        if (!($(".active").length)){
            var element = e.target;
            var dsa = element.querySelector("div")
            if (dsa.tagName == "DIV") {
                var src = dsa.querySelector("img").getAttribute("src"),
                descrip = dsa.querySelector("img").getAttribute("alt"),
                vintalightOverlay = document.createElement("div");
                vintalightOverlay.classList.add("vintalight-overlay");
                vintalightOverlay.innerHTML = "\n<figure class=\"vintalight__container active\">\n<div class=\"vintalight__photo\">\n<img src=\"" + src + "\" alt=\"" + descrip + "\" class=\"vintalight__img\"/>\n</div>\n<figcaption class=\"vintalight__caption\">\n<h3 class=\"vintalight__text\">" + descrip + "</h3>\n</figcaption>\n<button class=\"vintalight__button\" id=\"button-close\">\u2715</button>\n</figure>\n";
                document.body.appendChild(vintalightOverlay);
                setTimeout(function () {
                    vintalightOverlay.classList.add("active");
                }, 1);
                document.body.style.overflow = "hidden";
                document.getElementById("button-close").addEventListener("click", function () {
                    vintalightOverlay.classList.remove("active");
                    setTimeout(function () {
                        document.body.removeChild(vintalightOverlay);
                    }, 500);
                    document.body.style.overflow = "auto";

                });
            window.addEventListener("keydown", Myfunction, {once: true});
            } 
        }
    }
    if (e.key === "Escape" ){
        if ($(".active").length == 2){
        document.getElementById("button-close").click();}
    }

});

