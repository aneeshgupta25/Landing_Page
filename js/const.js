class Section {
    constructor(header, id) {
        this.header = header
        this.id = id;        
    }
}

//data for the sections
const data = new Array(
    new Section(
        "Why Us?",
        "chose_us_container",
    ),
    new Section(
        "Best Products",
        "best_products_container",
    ),
    new Section(
        "Experiences",
        "experience",
    ),
    new Section(
        "Materials",
        "material",
    ),
    new Section(
        "Reviews",
        "testimonials",
    ),
)

const content_doc_fragment = document.createDocumentFragment()
const nav_doc_fragment = document.createDocumentFragment();
let selected = "";