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
    burger.addEventListener('click',()=>{
        linksMenu.classList.toggle('active');
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
        "Home": {
            'href': "/", 
            "whtpg": "home", 
            "icon": ['fa-duotone', 'fa-house'],
        },
        "Learn": {
            'href': "/learn", 
            "whtpg": "learn", 
            "icon": ['fa-duotone', 'fa-books']
        },
        "Reports": {
            'href': "/reports", 
            "whtpg": "reports", 
            "icon": ['fa-duotone', 'fa-chart-simple']
        },
        "Notification": {
            'href': "/notification", 
            "whtpg": "notification", 
            "icon": ['fa-regular', 'fa-bell']
        },
        "Account": {
            'href': "/account", 
            "whtpg": "account", 
            "icon": ['fa-duotone', 'fa-user']
        }
    }

    generateNav(pages);
    generateMobileNav(pages);
    currentPage(pageTitle.textContent)
}