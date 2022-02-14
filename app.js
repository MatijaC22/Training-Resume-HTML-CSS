document.documentElement.clientHeight;
//const profilePicture = document.getElementById("image1") as HTMLImageElement;
var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st >= 137.0) {
        document.getElementById("image4").style.visibility = "visible";
    }
    else {
        document.getElementById("image4").style.visibility = "hidden";
    }
    console.log(st + 'Scroled');
    console.log(typeof (st));
    if (st >= lastScrollTop) {
        // downscroll code 
        document.getElementById("superman").style.visibility = "visible";
        // picture movement
        document.getElementById("image4").src = "pictures/ohNO.jpg";
        if (st >= 137.5) {
            //var value = parseInt(document.getElementById('image4').style.left);
            var value = 0;
            var rezultat = value + st;
            var stringRezultat = rezultat.toString();
            //let text = num.toString();
            var result = stringRezultat.concat('px');
            document.getElementById('image4').style.top = result;
        }
        lastScrollTop = st;
    }
    else {
        // upscroll code
        document.getElementById("superman").style.visibility = "hidden";
        //picture movement
        document.getElementById("image4").src = "pictures/push.jpg";
        if (st >= 137.5) {
            var value = 0;
            var rezultat = value + st;
            var stringRezultat = rezultat.toString();
            var result = stringRezultat.concat('px');
            document.getElementById('image4').style.top = result;
        }
        lastScrollTop = st;
    }
}, false);
//# sourceMappingURL=app.js.map