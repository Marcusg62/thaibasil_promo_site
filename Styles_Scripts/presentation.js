document.querySelector(".active-link").addEventListener("click", ($event) => {

    $event.preventDefault(); 

    let links = document.querySelectorAll(".inactive");
    if (links.length > 0) {
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("inactive"); 
        }
        document.querySelector("nav").classList.add("h-auto"); 
    }
    else {
        let hideLinks = document.querySelectorAll(".secondaryNavLink");
        for (let i = 0; i < hideLinks.length; i++) {
            hideLinks[i].classList.add("inactive"); 
        }
        console.log(hideLinks)
    }



})