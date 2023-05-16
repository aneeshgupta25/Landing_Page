//populate header content to content
addHomeContent();
addChoseUsContent();
addBestProducts();
addExperiences();
addMaterials();
addTestimonials();
addContactUs();

document.getElementById("content").appendChild(content_doc_fragment);
// select first section of navbar as default
selectNavBar(data[0].id);

const navbarHeight = document.querySelector('.navigation').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navbarHeight + 30 + "px");
//listeners on navigation bar
document.getElementById("navigation_right").addEventListener(
    "click", function(event) {
        console.log(navbarHeight)
        if(event.target.nodeName === 'LI') {
            selectNavBar(event.target.id)
            document.getElementById(event.target.id + "_helper").scrollIntoView();
        }   
        document.querySelector("#navigation_right ul").classList.toggle("mobile_view")     
    }
);
//update navbar according to section currently in viewport
document.addEventListener("scroll", function(event) {
    let min_dist = Infinity;
    let element = selected;
    for(let i = 0; i < data.length; i++) {              
        let top = document.getElementById(data[i].id + "_helper").getBoundingClientRect().top
        if(min_dist > Math.abs(top)) {
            min_dist = Math.abs(top);
            element = data[i].id;
        }        
    }    
    selectNavBar(element);    
});


document.getElementById("hamburger").addEventListener("click", function() {
    document.querySelector("#navigation_right ul").classList.toggle("mobile_view")
});