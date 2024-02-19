const skillIcon = document.getElementsByClassName("tooltip");


const addEventListenersToSkillIcon = () => {
    for (let i = 0; i < skillIcon.length; i++) {
        skillIcon[i].addEventListener("click", (e) => {
            console.log(e.target);
            updateDescription(e.target.id);
        });
    }
};

addEventListenersToSkillIcon();

const descriptionDiv = document.getElementsByClassName("about-section");
const updateDescription = (id) => {
    let description = "";

    switch (id) {
        case "HTML":
            description = "HTML: HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.";
            break;
       case "CSS":
            description = "CSS: CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML).";
            break;
        case "Bootstrap":
            description = "Bootstrap: Bootstrap is developed mobile first, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries.";
            break;
        case "JS":
            description = "Javascript: JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.";
            break;
        case "ReactJS":
            description = "React JS: React. js is built using JSX – A combination of JavaScript and XML. Elements are created using JSX, then use JavaScript to render them on your site."
            break;
        case "Python":
            description = "Python: Python is a computer programming language often used to build websites and software, automate tasks, and analyze data.";
            break;
        case "NodeJS":
            description = "Node JS: Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.";
            break;
        case "ExpressJS":
            description = "Express JS: Express is a simple web framework for Node. js technology. As its name indicates itself, express meaning fast." ;
            break;
        case "MySQL":
            description = "MySQL: A relational database stores data in separate tables rather than putting all the data in one big storeroom.";
            break;
        case "SQLite":
            description = "SQLite: QLite is an embedded, server-less relational database management system. It is an in-memory open-source library with zero configuration and does not require any installation.";
            break;
        case "MongoDB":
            description = "MongoDB: MongoDB provides high availability with replica sets including two or more copies of the data.";
            break;
               
        default:
            description = "Description of the selected icon will appear here.";
    }
    for (let i = 0; i < descriptionDiv.length; i++) {
        descriptionDiv[i].textContent = description;
    }
};

updateDescription("HTML");