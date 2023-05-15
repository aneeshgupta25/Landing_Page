class Section {
    constructor(header, section_images, content) {
        this.header = header
        this.section_images = section_images
        this.content = content
    }
}

//data for the sections
const data = new Array(
    new Section(
        "Home1",
        [],
        ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe mollitia numquam qui est harum voluptatibus quos sunt voluptatum. Possimus, voluptas? Culpa, sed.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe mollitia numquam qui est harum voluptatibus quos sunt voluptatum. Possimus, voluptas? Culpa, sed.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe mollitia numquam qui est harum voluptatibus quos sunt voluptatum. Possimus, voluptas? Culpa, sed.",]
    ),
    new Section(
        "Home2",
        [],
        ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe mollitia numquam qui est harum voluptatibus quos sunt voluptatum. Possimus, voluptas? Culpa, sed.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe mollitia numquam qui est harum voluptatibus quos sunt voluptatum. Possimus, voluptas? Culpa, sed.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe mollitia numquam qui est harum voluptatibus quos sunt voluptatum. Possimus, voluptas? Culpa, sed.",]
    ),
    new Section(
        "Home3",
        [],
        ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe mollitia numquam qui est harum voluptatibus quos sunt voluptatum. Possimus, voluptas? Culpa, sed.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe mollitia numquam qui est harum voluptatibus quos sunt voluptatum. Possimus, voluptas? Culpa, sed.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe mollitia numquam qui est harum voluptatibus quos sunt voluptatum. Possimus, voluptas? Culpa, sed.",]
    ),
    new Section(
        "Home4",
        [],
        ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe mollitia numquam qui est harum voluptatibus quos sunt voluptatum. Possimus, voluptas? Culpa, sed.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe mollitia numquam qui est harum voluptatibus quos sunt voluptatum. Possimus, voluptas? Culpa, sed.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe mollitia numquam qui est harum voluptatibus quos sunt voluptatum. Possimus, voluptas? Culpa, sed.",]
    )
)

const nav_doc_fragment = document.createDocumentFragment();
const content_doc_fragment = document.createDocumentFragment();
let selected = "";

function addHomeContent() {
    const container = document.createElement('div');    
    container.style.backgroundImage = "url('../imgs/home_page.jpeg')"
    container.style.backgroundRepeat = "no-repeat"
    container.style.backgroundSize = "cover"  
    
    //nav
    const nav_container = document.createElement("nav");
    const nav_left_container = document.createElement("div");
    const nav_right_container = document.createElement("div");
    const nav_ul = document.createElement("ul");
    nav_container.classList.add("navigation");    
    nav_left_container.id = "navigation_left";
    nav_right_container.id = "navigation_right";    
    nav_ul.id = "navigation_list";
    nav_right_container.appendChild(nav_ul);
    nav_container.appendChild(nav_left_container);
    nav_container.appendChild(nav_right_container);
    container.appendChild(nav_container);
    
    //title
    const titleText = document.createElement("p");
    titleText.textContent = "Make Your Interior More"+'\n'+"Minimalistic & Modern"
    titleText.style.cssText = "font-size: 80px; color: white; margin-top: 100px; text-align:center; white-space: pre"
    container.appendChild(titleText)

    //sub-title
    const sub_titleText = document.createElement("p");
    sub_titleText.textContent = "Turn your room with panto into a lot more minimalist\nand modern with ease and speed"
    sub_titleText.style.cssText = "font-size: 24px; color: white; margin-top: 30px; font-style: italic;text-align:center; white-space: pre"
    container.appendChild(sub_titleText)

    //dummy function for testing
    addExtraComponentsForTesting(container)

    content_doc_fragment.appendChild(container)
    document.getElementById("header").appendChild(content_doc_fragment);

}

function selectNavBar(current_selection) {
    // console.log(current_selection);
    if(current_selection != selected) {
        unselectOldSelection(selected);
        selected = current_selection;
        selectNewSelection(current_selection);
    }
}

function unselectOldSelection(val) {
    if(val === "") return;
    const old_selected = document.getElementById(val+"_header");
    old_selected.classList.remove("selected"); 
    old_selected.classList.add("unselected");
}

function selectNewSelection(val) {
    const new_selection = document.getElementById(val+"_header");     
    // console.log(new_selection)
    new_selection.classList.remove("unselected");
    new_selection.classList.add("selected");
}

function populateEachSection(i) {
    const container = document.createElement('div');
    //add h3 to include header of the section
    container.id = data[i].header;
    const section_header = document.createElement('h3');
    section_header.textContent = data[i].header;
    container.appendChild(section_header);

    container.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('../imgs/sample.jpg')"
    container.style.backgroundRepeat = "no-repeat"
    container.style.backgroundSize = "cover"  
     
    
    for(let j = 0; j < data[i].content.length; j++) {
        const inner_container = document.createElement('div');
        const section_content = document.createElement('p');
        const section_image = document.createElement('img');

        section_content.textContent = data[i].content[j];
        inner_container.appendChild(section_content);        

        section_image.src = "../imgs/sample.jpg";
        //insert image as the first child or last child accordingly
        if(j%2 == 0)
            inner_container.insertBefore(section_image, inner_container.firstChild);
        else 
            inner_container.appendChild(section_image);  
        container.appendChild(inner_container);
    }    
    return container;
}

//populate header content to content
addHomeContent();


//set scroll padding for navbar
const navbarHeight = document.querySelector('.navigation').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navbarHeight + 1 + "px");


//populate the navigation bar with dynamic section values
for(let i = 0; i < data.length; i++) {
    const nav_list_item = document.createElement('li');
    nav_list_item.id = data[i].header + "_header";
    nav_list_item.textContent = data[i].header;
    nav_list_item.classList.add("unselected");
    nav_doc_fragment.appendChild(nav_list_item);         
}
document.getElementById("navigation_list").appendChild(nav_doc_fragment);
// document.getElementById("content").appendChild(content_doc_fragment);

//select first section of navbar as default
selectNavBar(data[0].header);

//listeners on navigation bar
document.getElementById("navigation-right").addEventListener(
    "click", function(event) {
        if(event.target.nodeName === 'LI') {
            selectNavBar(event.target.textContent)
            document.getElementById(event.target.textContent).scrollIntoView();
        }
    }
);

//update navbar according to section currently in viewport
document.addEventListener("scroll", function(event) {
    let min_dist = Infinity;
    let element = selected;
    for(let i = 0; i < data.length; i++) {
        let top = document.getElementById(data[i].header).getBoundingClientRect().top;        
        // console.log("element ", data[i].header, " top ", top)
        if(min_dist > Math.abs(top)) {
            min_dist = Math.abs(top);
            element = data[i].header;
        }        
    }
    // console.log("Element ", element);
    selectNavBar(element);    
});



function addExtraComponentsForTesting(container){
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)
    var content = document.createElement('p');
    content.textContent = "Hello"
    container.appendChild(content)

}