const pageTitle = document.querySelector('#pageTitle');


(function(){
    const leasonBoxes = [...document.querySelectorAll(".leasonBox")];
    if(leasonBoxes[0]){
        leasonBoxes.forEach((ele)=>{
            ele.addEventListener('click',()=>{
                ele.nextElementSibling.classList.toggle('active')
            })
        })
    }
}())



function generateNav(allpages){
    const linksMenu = document.querySelector('.linksMenu');

    const burger = document.createElement('i');
    burger.classList.add("fa-solid", "fa-bars", "burger");
    // burger.classList.add("fa-solid", "fa-minus", "burger");
    burger.addEventListener('click',()=>{
        linksMenu.classList.toggle('active');
        linksMenu.querySelector("i").classList.toggle('fa-minus');
        linksMenu.querySelector("i").classList.toggle('fa-bars');
    })

    const liks = document.createElement('div');
    liks.classList.add('liks');

    for(page in allpages){
        let pagea = document.createElement('a');
        pagea.href = allpages[page]["href"];
        pagea.setAttribute("whtpg", allpages[page]["whtpg"]);
        
        let icon = document.createElement('i');
        icon.classList.add(...allpages[page]['icon']);

        let span = document.createElement('span');
        span.textContent = page;

        pagea.append(icon);
        pagea.append(span);
        liks.append(pagea)
    }

    linksMenu.append(burger);
    linksMenu.append(liks);
}

function generateMobileNav(allpages){
    const mobileHeader = document.querySelector('.mobileHeader');

    for(page in allpages){
        let pagea = document.createElement('a');
        pagea.classList.add('navbar-item', 'mobileHide');
        pagea.href = allpages[page]["href"];
        pagea .setAttribute("whtpg", allpages[page]["whtpg"]);
        
        let icon = document.createElement('i');
        icon.classList.add(...allpages[page]['icon']);

        pagea.append(icon);
        mobileHeader.append(pagea)
    }
}

function currentPage(current){
    let elements = [...document.querySelectorAll(`[whtpg="${current}"]`)];
    for(i of elements){
        i.classList.add("active")
    }
}



if(pageTitle){
    let pages = {
        "Dashboard": {
            'href': "/", 
            "whtpg": "dashboard", 
            "icon": ['fa-solid', 'fa-table-columns'],
        },
        "Learn": {
            'href': "/learn", 
            "whtpg": "learn", 
            "icon": ['fa-solid', 'fa-book']
        },
        "Reports": {
            'href': "/reports", 
            "whtpg": "reports", 
            "icon": ['fa-solid', 'fa-chart-simple']
        },
        "Roadmap": {
            'href': "/roadmap", 
            "whtpg": "roadmap", 
            "icon": ['fa-regular', 'fa-map']
        },
        "Tools": {
            'href': "/tools", 
            "whtpg": "tools", 
            "icon": ['fa-solid', 'fa-screwdriver-wrench']
        },
        // "Notification": {
        //     'href': "/notification", 
        //     "whtpg": "notification", 
        //     "icon": ['fa-solid', 'fa-bell']
        // },
        // "Supscription": {
        //     'href': "/supscription", 
        //     "whtpg": "supscription", 
        //     "icon": ['fa-solid', 'fa-user']
        // }
    }

    generateNav(pages);
    generateMobileNav(pages);
    currentPage(pageTitle.textContent)
}


const composerPrivate = function(...funcs) {
    return function(value) {
        return funcs.reduce((acc, func) => func(acc), value);
    }
}







const specifyReportSection = function(getted){
    let parent = document.querySelector(`[showerData=${getted}]`).closest(".lessonsPage");
    let searchInput = parent.querySelector("[searchPlace]");
    searchInput.setAttribute("searchPlace", getted);

    let loadcardsBtn = parent.querySelector("[loadPlace]");
    loadcardsBtn.setAttribute("loadPlace", getted);
    return getted
}
const showSectonReports = function(getted){
    let box = document.querySelector(`[toShowData=${getted}]`);
    let parent = box.parentElement;
    let boxes = parent.querySelectorAll(`[toShowData]`);
    boxes.forEach((ele)=>{
        ele.classList.remove("show")
    });
    box.classList.add('show');
    return getted
}
const chaingeReportSection = composerPrivate(showSectonReports, specifyReportSection);

const typeSelectors = document.querySelectorAll(".type-selector");
typeSelectors.forEach((prnt)=>{
    let childrens = prnt.querySelectorAll(".tag")
    childrens.forEach((chld)=>{
        chld.addEventListener('click', ()=>{
            childrens.forEach((ele)=>{
                ele.classList.add("is-light");
                chld.classList.remove("is-light");

                chaingeReportSection(chld.getAttribute("showerData"));
            })
        })
    })
})
const searchbtn = document.querySelectorAll("[searchbtn]");
searchbtn.forEach((searchbtn)=>{
    searchbtn.addEventListener('click', (e)=>{
        let searchbar = e.target.previousElementSibling;
        let searchingValue = searchbar.value;
        let searchingPlaceName = searchbar.getAttribute("searchPlace");
        let searchingPlace = document.querySelector(`[toShowData="${searchingPlaceName}"]`)

        searchInReports(searchingValue, searchingPlace)
    })
})

// function chooseParent
const searchInReports = function(searchTerm, parentSelector) {
    searchTerm = searchTerm.toLowerCase();
    
    $(parentSelector).find('.reportData').each(function() {
        let $div = $(this);
        let divText = $div.text().toLowerCase();
        
        if (searchTerm === '' || divText.indexOf(searchTerm) !== -1) {
            $div.show(); // Show the div
        } else {
            $div.hide(); // Hide the div
        }
    });
}  


const loadPlaceBtn = document.querySelectorAll("[loadPlace]");
loadPlaceBtn.forEach((searchbtn)=>{
    searchbtn.addEventListener('click', (e)=>{
        let loadingPlaceName = e.target.getAttribute("loadPlace");
        let loadingPlace = document.querySelector(`[toShowData="${loadingPlaceName}"]`) || e.target.closest(".lessonsPage")

        loadReportsRoadmaps(loadingPlace)
    })
})
const loadReportsRoadmaps = function(parentSelector){
    $(parentSelector).find('.reportData').each(function() {
        let $div = $(this);        
        $div.show(); // Show the div
    });
}





// Function to show details of every reportSection






let dashpage = [...document.querySelectorAll('[dashpage]')];
let dashSect = [...document.querySelectorAll('[dashSect]')]
dashpage.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        dashSect.forEach((sect)=>{
            sect.classList.remove("active");
        })
        dashpage.forEach((child)=>{
            child.classList.remove("active")
        })
        ele.classList.add('active')
        let val = ele.getAttribute('dashpage');
        document.querySelector(`[dashSect=${val}]`).classList.add("active");
    })
})










const hidePopUp = function(e){
    let parent = e.target.closest(".dataPop")
    parent.classList.remove('active');
    setTimeout(() => {
        parent.style.display = "none"
    }, 310);
}
const showPopUp = function(e){
    let parent = document.getElementById(e.target.getAttribute("targeted"))
    parent.style.display = "flex";
    setTimeout(() => {
        parent.classList.add("opacityAni", "active")
    }, 0);
}
const hidePopUpBtns = document.querySelectorAll("[workrole=hidePopup]");
hidePopUpBtns?.forEach((ele)=>{
    ele.addEventListener('click', (e)=>{
        hidePopUp(e)
    })
}) 
const showPopUpBtns = document.querySelectorAll("[workrole=showPopup]");
showPopUpBtns?.forEach((ele)=>{
    ele.addEventListener("click", (e)=>{
        showPopUp(e)
    })
})





let reportData = [...document.querySelectorAll(".reportData")]
reportData.forEach((ele)=>{
    ele.addEventListener('click', ()=>{
        showReportDataPopup()
    })
})
function showReportDataPopup(){
    let popData = document.querySelector(".dataPop");
    popData.style.display = "flex";
    setTimeout(() => {
        popData.classList.add('active');
    }, 10);   
}
function hideReportDataPopup(){
    let popData = document.querySelector(".dataPop");
    popData.classList.remove('active');
    setTimeout(() => {
        popData.style.display = "none";
    }, 700);   
}






let exportDataTable = [...document.querySelectorAll("[exporter=exportDataTable]")];
exportDataTable.forEach((ele)=>{
    ele?.addEventListener('click', ()=>{
        let doc = new jsPDF();
        const fileName = ele.getAttribute("fileName");
        const table = ele.parentElement.querySelector('table')
        doc.autoTable({ html: table });
        doc.save(`${fileName}.pdf`);
    })
}) 

let exportReportData = document.querySelector("#exportSheet");
exportReportData?.addEventListener('click', ()=>{
    const element = document.getElementById("popHtml");
    const html = element.outerHTML;

    const stylesheets = Array.from(document.styleSheets);
    let css = '';

    stylesheets.forEach((stylesheet) => {
        const rules = Array.from(stylesheet.cssRules);
        rules.forEach((rule) => {
            css += rule.cssText;
        });
    });

    const combinedHTML = `
        <html>
        <head>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <style>
            ${css}
            .popup-container{
                bottom: 0;
                width: 100%;
                min-width: 100%;
                height: 100vh;
            }
            button{
                display: none !important;
            }
            i{
                display: none !important;
            }
            .writings:last-of-type {
                margin-bottom: 60px;
            }
        </style>
        </head>
        <body>
        ${html}
        </body>
        </html>
    `;

    let fileName = `${document.querySelector("[fileName]").getAttribute("fileName")}${document.querySelector("[fildeid]").textContent}`

    const link = document.createElement('a');
    link.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(combinedHTML));
    link.setAttribute('download', fileName);
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})







