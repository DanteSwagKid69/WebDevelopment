window.addEventListener("load", (e) => {
    const preloader = document.querySelector(".preloader");
    setInterval(function () {
        preloader.style.display = "none";  
    }, 1000);
});
