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


let typeSelectors = [...document.querySelectorAll(".type-selector")];
if(typeSelectors){
    typeSelectors.forEach((prnt)=>{
        let childrens = prnt.querySelectorAll(".tag")
        childrens.forEach((chld)=>{
            chld.addEventListener('click', ()=>{
                childrens.forEach((ele)=>{
                    ele.classList.add("is-light");
                    chld.classList.remove("is-light");
                    showall(chld.getAttribute("showerData"))
                })
            })
        })
    })
}

function showall(getted){
    let box = document.querySelector(`[toShowData=${getted}]`);
    let parent = box.parentElement;
    let boxes = parent.querySelectorAll(`[toShowData]`);
    boxes.forEach((ele)=>{
        ele.classList.remove("show")
    });
    box.classList.add('show');
}

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
    }, 1800);   
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
        console.log(val)
        document.querySelector(`[dashSect=${val}]`).classList.add("active");
    })
})


const toolControl = document.querySelector("#toolControl");
const toolsControlPopup = document.querySelector("#toolsControlPopup");
toolControl?.addEventListener('click', ()=>{
    toolsControlPopup.style.display = "flex";
    setTimeout(() => {
        toolsControlPopup.classList.add('active');
    }, 10);  
})



let exportDataTable = document.getElementById("exportDataTable");
exportDataTable?.addEventListener('click', ()=>{
    let doc = new jsPDF();
    const fileName = document.querySelector(".backnav").querySelector("p").textContent;
    doc.autoTable({ html: 'table' });
    doc.save(`${fileName}.pdf`);
})










// showReportDataPopup() 


