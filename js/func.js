function addHomeContent() {
    const header_doc_fragment = document.createDocumentFragment();
    const container = document.createElement('div');    
    container.style.cssText = "height: 100vh; overflow: inherit";
    container.style.backgroundImage = "url('../imgs/home_page.jpeg')"
    container.style.backgroundRepeat = "no-repeat"
    container.style.backgroundSize = "cover"
    container.style.boxShadow = "0px 0px 8px 8px white inset"       
    container.id = "header_content"    

    //nav
    const nav_container = document.createElement("nav");
    nav_container.classList.add("navigation");    
    const nav_left_container = document.createElement("div");
    const nav_right_container = document.createElement("div");
    const nav_ul = document.createElement("ul");
    nav_left_container.id = "navigation_left";
    nav_right_container.id = "navigation_right";    
    nav_ul.classList.add("navigation_list");
    nav_right_container.appendChild(nav_ul);
    nav_container.appendChild(nav_left_container);
    nav_container.appendChild(nav_right_container);
    container.appendChild(nav_container);

    //hamburger
    const hamburger_image = document.createElement('img')
    hamburger_image.id = "hamburger"
    hamburger_image.src = "../imgs/hamburger.png"
    nav_container.appendChild(hamburger_image)


    //populate the navigation bar with dynamic section values
    for(let i = 0; i < data.length; i++) {
        const nav_list_item = document.createElement('li');
        nav_list_item.id = data[i].id;
        nav_list_item.textContent = data[i].header;
        nav_list_item.classList.add("unselected");
        nav_doc_fragment.appendChild(nav_list_item);         
    }
    nav_ul.appendChild(nav_doc_fragment);
    
    //title
    const titleText = document.createElement("p");
    titleText.textContent = "Make Your Interior More"+'\n'+"Minimalistic & Modern"
    titleText.classList.add("height-1", "wcolor", "font1")
    titleText.style.cssText = "margin-top: 100px; white-space: pre"
    container.appendChild(titleText)

    //sub-title
    const subTitleText = document.createElement("p");
    subTitleText.id = "subtitle_text"
    subTitleText.textContent = "Turn your room with panto into a lot more minimalist\nand modern with ease and speed"
    subTitleText.classList.add("height-3", "wcolor", "font1")
    subTitleText.style.cssText = "margin-top: 30px; font-style: italic; text-align:center; white-space: pre"
    container.appendChild(subTitleText)

    //search box
    const search_container = document.createElement("div")
    search_container.id = "search_container"
    const search_content = document.createElement("form")
    const input = document.createElement("input")    
    input.id = "search_input"
    input.placeholder = "Search Furniture"
    //search button
    const search_button = document.createElement("img")    
    search_button.style.cssText = "height:auto; width:auto;"    
    search_button.src = "../imgs/search.png"
    search_content.appendChild(input)
    search_container.appendChild(search_content)
    search_container.appendChild(search_button)

    container.appendChild(search_container);

    header_doc_fragment.appendChild(container)
    document.getElementById("header").appendChild(header_doc_fragment);

}

function addChoseUsContent() {
    const choseUsDocFragment = document.createDocumentFragment();
    const container = document.createElement('div');
    container.id = "chose_us_container_helper"
    
    const container1 = document.createElement('div');
    const container1Content = document.createElement("p");
    container1Content.textContent = "Why Choosing Us..?"
    container1Content.classList.add("height-2", "bold-text", "font1")    
    container1.appendChild(container1Content);
    container.appendChild(container1)

    //container-2
    for(let i = 0; i < 3; i++) {
        getChoseUsSection(container, "Luxury Facilities", "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.")
    }

    choseUsDocFragment.appendChild(container);
    content_doc_fragment.appendChild(choseUsDocFragment)    
}

function getChoseUsSection(main, text1, text2) {
    const container = document.createElement("div");
    const content1 = document.createElement("p");
    content1.textContent = text1
    container.appendChild(content1)
    content1.classList.add("height-3", "font2")    
    
    const content2 = document.createElement("p");
    content2.textContent = text2
    container.appendChild(content2)
    content2.classList.add("height-4", "wcolor", "font2")
    content2.style.cssText = "margin-top: 4%"
    
    const content3 = document.createElement("p");
    content3.textContent = "More Info ->"
    container.appendChild(content3)
    content3.classList.add("height-4", "ocolor", "font2")
    content3.style.cssText = "margin-top: 4%;"

    main.appendChild(container)
}

function addBestProducts() {
    const container = document.createElement('div')    
    container.id = "best_products_container_helper"    
    const heading = document.createElement('p')
    heading.textContent = "Best Selling Product"
    heading.classList.add("height-2", "bold-text", "font1")
    heading.style.cssText = "text-align: center"
    container.appendChild(heading);
    
    //products
    const product_container = document.createElement('div');
    product_container.id = 'product_items_container'
    product_container.classList.add("grid_container")
    addProductItem(product_container, "Chair", "Most Amazingg Chair", "$ 400", "prd1.png", 5);
    addProductItem(product_container, "Chair", "Good Chair", "$ 380", "prd2.png", 3);
    addProductItem(product_container, "Chair", "Hello Chairrr", "$ 390", "prd3.png", 4);
    addProductItem(product_container, "Chair", "Cool Chair", "$ 370", "prd4.png", 3);    
    
    container.appendChild(product_container)
    content_doc_fragment.appendChild(container)    
}

function addProductItem(main, text1, text2, text3, img, rating) {
    const container = document.createElement('div');
    container.classList.add("product_item")
    const prod_image_container = document.createElement('div');
    const prod_info_container = document.createElement('div');
    prod_info_container.classList.add("product_item_info")
    prod_image_container.style.cssText = "background_color: #fafafa"
    prod_info_container.style.cssText = "background_color: #ffffff"
    
    const prod_image = document.createElement('img');
    prod_image.src = `../imgs/${img}`
    prod_image.classList.add("image")

    const info1 = document.createElement('p');
    info1.classList.add("height-3", "bold-text", "font1")
    info1.textContent = text1;
    const info2 = document.createElement('p');
    info2.classList.add("height-4", "font1")
    info2.textContent = text2;
    const info3 = document.createElement('p');
    info3.textContent = text3;
    info3.classList.add("height-4", "bold-text", "font1")

    const add_img = document.createElement('img');
    add_img.src = "../imgs/add_prd.png"
    add_img.style.cssText = "width: auto; height: 40%;"

    const rating_img_container = showRating(rating)
    
    add_img.src = "../imgs/add_prd.png"
    add_img.style.cssText = "width: auto; height: 40%;"

    prod_image_container.appendChild(prod_image)
    prod_info_container.appendChild(info1)
    prod_info_container.appendChild(info2)
    prod_info_container.appendChild(info3)
    prod_info_container.appendChild(rating_img_container)
    prod_info_container.appendChild(add_img)

    container.appendChild(prod_image_container)
    container.appendChild(prod_info_container)
    main.appendChild(container)
    
}

function addExperiences() {
    commonDesignContent("experience_helper", "common_content0", "experience.png", "Experiences", "We Provide You The Best Experience", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat culpa numquam iusto iure maxime repellendus vero provident aspernatur cumque sit.", 0)   
}

function addMaterials() {
    commonDesignContent("material_helper", "common_content1", "materials.png", "Materials", "Funny Materials for Making Furniture", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat culpa numquam iusto iure maxime repellendus vero provident aspernatur cumque sit.", 1)   
}

function commonDesignContent(id, className, img, text1, text2, text3, num) {
    const container = document.createElement('div');    
    container.id = id
    container.classList.add("common_content",)
    // container.classList.add("common_content_text")
    container.classList.add(className)
    const image = document.createElement('img');
    image.src = `../imgs/${img}`
    image.classList.add("common_content_img")
    image.style.cssText = 'width: auto, height: 100%'
    if(num%2==0) {
        container.appendChild(image)
        container.appendChild(fillContentHelper(text1, text2, text3))
    } else {
        container.appendChild(fillContentHelper(text1, text2, text3))
        container.appendChild(image)
    }
    content_doc_fragment.appendChild(container)
}

function fillContentHelper(text1, text2, text3) {
    const container = document.createElement('div');
    container.classList.add("common_content_text")
    const content1 = document.createElement('p');
    content1.classList.add("common_content_category")
    console.log(content1.classList)
    content1.textContent = text1
    const content2 = document.createElement('p');
    content2.classList.add("common_content_title", "height-2")
    content2.textContent = text2
    const content3 = document.createElement('p');
    content3.classList.add("common_content_text", "height-3")
    content3.textContent = text3
    const content4 = document.createElement('p');
    content4.classList.add("common_content_more_info")
    content4.textContent = 'More Info ->'

    container.appendChild(content1)
    container.appendChild(content2)
    container.appendChild(content3)
    container.appendChild(content4)

    return container;

}

function addTestimonials() {
    const container = document.createElement('div');
    container.id = "testimonials_helper"
    const category_text = document.createElement('p');
    category_text.textContent = "Testimonials"
    category_text.classList.add("common_content_category");
    category_text.style.cssText = "text-align: center"
    container.appendChild(category_text)
    
    const title_text = document.createElement('p');
    title_text.textContent = "Our Client Reviews"
    title_text.classList.add("common_content_title", "height-2");
    title_text.style.cssText = "text-align: center"
    container.appendChild(title_text)

    const testimonials_container = document.createElement('div')
    testimonials_container.classList.add("grid_container");
    for(let i = 1; i <= 3; i++) {
        testimonials_container.appendChild(createTestimonial(`testimonial${i}.png`, 'Bang Upin', 'Pedagang Asongan', '“Hello, This is Awesome!! I am feeling so good today!! :)“', 4));
    }        
    container.appendChild(testimonials_container)
    content_doc_fragment.appendChild(container)
}

function createTestimonial(img, text1, text2, text3, rating) {
    const container = document.createElement('div');
    container.style.cssText = "position:relative"
    const image = document.createElement('img');
    image.src = `../imgs/${img}`
    image.classList.add("image");
    container.appendChild(image)

    const review_container = document.createElement('div');
    review_container.classList.add("review_container")

    const content1 = document.createElement('p');
    content1.classList.add('reviewer')
    content1.textContent = text1
    const content2 = document.createElement('p');
    content2.textContent = text2    
    const content3 = document.createElement('p');
    content3.textContent = text3
    content3.style.cssText = "text-align: center"

    const rating_img_container = showRating(rating)
    review_container.appendChild(content1)
    review_container.appendChild(content2)
    review_container.appendChild(content3)
    review_container.appendChild(rating_img_container)

    container.appendChild(review_container)

    return container;
}

function addContactUs() {
    const container = document.createElement('div');
    container.id = "contact_helper"
    const grid_container = document.createElement('div');
    grid_container.classList.add("contact_grid_container");
    const container1 = document.createElement('div');
    container1.classList.add("contact_list_container");
    const heading = document.createElement('p');
    heading.textContent = "ANEESH GUPTA..."
    heading.classList.add("height-3", "bolder-text")
    heading.style.cssText = "text-align: center "    

    const content = document.createElement('p');
    content.textContent = "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities."
    content.style.cssText = "text-align: center"

    container1.appendChild(heading);
    container1.appendChild(content);
    container.appendChild(container1)    

    grid_container.append(addList('Services', ['Email Marketing', 'Careers', 'Campaigns', 'Branding', 'Market', 'Scenarios']))
    grid_container.append(addList('Furniture', ['Tables', 'Chairs', 'All']))
    grid_container.append(addList('Follow Us', ['Facebook', 'Twitter', 'Instagram']))


    //add copyrights
    const copyrights = document.createElement('p');
    copyrights.textContent = 'Copyrights' + '\u00A9' + ' ANEESH GUPTA'
    copyrights.style.cssText = 'text-align: center; margin-bottom: 20px'
    
    container.appendChild(grid_container)
    container.appendChild(copyrights)
    content_doc_fragment.appendChild(container)
}

function addList(context, list_details) {
    const container = document.createElement('div');
    container.classList.add("contact_list_container")
    const heading = document.createElement('p')
    heading.classList.add("contact_list_heading")
    heading.textContent = context
    container.appendChild(heading)

    const list = document.createElement('ul');
    list.classList.add('contact_section_list')
    for(let i = 0; i < list_details.length; i++) {
        const list_item = document.createElement('li')        
        list_item.textContent = list_details[i];
        list.appendChild(list_item)
    }
    container.appendChild(list);
    return container;
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
    const old_selected = document.getElementById(val);
    document.getElementById(val+"_helper").classList.remove('selected_animate')   
    document.getElementById(val+"_helper").classList.add('unselected_animate')   
    old_selected.classList.remove("selected"); 
    old_selected.classList.add("unselected");
}

function selectNewSelection(val) {
    const new_selection = document.getElementById(val);  
    document.getElementById(val+"_helper").classList.add('selected_animate')   
    document.getElementById(val+"_helper").classList.remove('unselected_animate')   
    // console.log(new_selection)
    new_selection.classList.remove("unselected");
    new_selection.classList.add("selected");
}

function showRating(rating) {
    const rating_img_container = document.createElement('div');
    rating_img_container.classList.add("rating_container")
    let num = 1;
    while(num <= 5) {
        const rating_img = document.createElement('img');
        if(rating > 0) {
            rating_img.src = '../imgs/rate.png'
            rating--;
        } else {
            rating_img.src = '../imgs/non-rate.png'
        }
        num++;
        rating_img_container.appendChild(rating_img);
    }
    return rating_img_container
}

function populateEachSection(i) {
    const container = document.createElement('div');
    //add h3 to include header of the section
    container.id = data[i].id;
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