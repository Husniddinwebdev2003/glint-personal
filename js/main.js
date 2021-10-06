// scrool nav started
window.addEventListener('scroll', () => {
    let nav = document.getElementById("nav");
    if (window.scrollY >= 10) {
        nav.classList.add('fixed__navbar');
    } else if (window.scrollY === 0) {
        nav.classList.remove('fixed__navbar');
    }

    let btn = document.getElementById('fixed-up-btn');
    if (window.scrollY >= 80) {
        btn.classList.add('active');
    } else if (window.scrollY < 80) {
        btn.classList.remove('active');
    }
});
// scrool nav finished


// fixed glint show box strated 
function addClassfunc(btn, id1, class1) {
    let btn1 = document.querySelector(btn);
    btn1.addEventListener('click', () => {
        let id = document.getElementById(id1);
        id.classList.add(class1);
    });
}

addClassfunc("#btnFixedBox", "fixedGlintBox", "show");
addClassfunc("#second", "two", "banner-item");

function removeClassfunc(btn, id1, class1) {
    let btn1 = document.querySelector(btn);
    btn1.addEventListener('click', () => {
        let id = document.getElementById(id1);
        id.classList.remove(class1);
    });
}

removeClassfunc(".icon", "fixedGlintBox", "show");
// fixed glint show box finished 


// banner slider started
function addClassfunc2(btn, id1, class1, remove1, remove2, addcls) {
    let btn1 = document.querySelector(btn);
    btn1.addEventListener('click', () => {
        let id = document.getElementById(id1);
        id.classList.add(class1);

        let oneRemove = document.querySelector(remove1);

        oneRemove.classList.remove(class1);

        let remve2 = document.querySelector(remove2);
        let addCls = document.querySelector(addcls);

        remve2.classList.remove("act");
        addCls.classList.add("act");
    });
}

addClassfunc2("#first", "one", "banner-item", "#two", "#second", "#first");
addClassfunc2("#second", "two", "banner-item", "#one", "#first", "#second");
// banner slider finished


// slider clients started
let sliderItem = document.querySelectorAll(".clients-slider-controller > button");
let sliderContent = document.querySelectorAll(".clients-slider-item");
let count = 2;
let len = sliderContent.length;

sliderItem[0].addEventListener("click", () => {

    if (count > 0) {
        --count;
    } else if (count === 0) {
        count = len - 1;
    }
    for (x of sliderContent) {
        x.classList.remove("preveus");
        x.classList.remove("active");
    }
    sliderContent[count].classList.add("preveus");
});

sliderItem[1].addEventListener("click", () => {

    if (count == len - 1) {
        count = 0;
    } else if (count >= 0) {
        ++count;
    }
    for (x of sliderContent) {
        x.classList.remove("active");
        x.classList.remove("preveus");
    }
    sliderContent[count].classList.add("active");
});

sliderItem[2].addEventListener("click", () => {

    if (count > 0) {
        --count;
    } else if (count === 0) {
        count = len - 1;
    }
    for (x of sliderContent) {
        x.classList.remove("preveus");
        x.classList.remove("active");
    }
    sliderContent[count].classList.add("preveus");
});

sliderItem[3].addEventListener("click", () => {

    if (count == len - 1) {
        count = 0;
    } else if (count >= 0) {
        ++count;
    }
    for (x of sliderContent) {
        x.classList.remove("active");
        x.classList.remove("preveus");
    }
    sliderContent[count].classList.add("active");
});
// slider clients started


// toggle nav started
function toggleNavFunc(toggleBtn, toggleNav) {
    let toggleIcon = document.getElementById(toggleBtn);
    let toggleNav2 = document.getElementById(toggleNav);

    toggleIcon.addEventListener("click", () => {
        toggleNav2.classList.toggle("active");
    });
}
toggleNavFunc("bars", "toggleNav");
toggleNavFunc("add", "dropMenu");
toggleNavFunc("add2", "dropMenu2");
toggleNavFunc("add", "add");
toggleNavFunc("add2", "add2");

function toggleNavFuncClose(toggleBtn, toggleNav) {
    let toggleIcon = document.getElementById(toggleBtn);
    let toggleNav2 = document.getElementById(toggleNav);

    toggleIcon.addEventListener("click", () => {
        toggleNav2.classList.remove("active");
    });
}

toggleNavFuncClose("close", "toggleNav");
// toggle nav finished


// active link started
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(i => {
        const sectionHeight = i.offsetHeight;
        const sectionTop = i.offsetTop - 100;

        let sectionId = i.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
            document.querySelector("ul.toggle-nav a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
            document.querySelector("ul.toggle-nav a[href*=" + sectionId + "]").classList.remove("active");
        }

    });


}

window.addEventListener("scroll", scrollActive);
// active link finished


// owl carusel controller add id strated
let a = document.querySelector('.owl-nav');
let blogCoruselControl = document.querySelector('#blog .owl-nav');

    a.id = "nav-corusel";
    let apend = document.getElementById("owl-corusel-controller");
    apend.appendChild(a);

    blogCoruselControl.classList = "owl-nav nav-corusel";
    let blogControllerContent = document.querySelector('.blogCoruselControlContent');
    blogControllerContent.appendChild(blogCoruselControl);

// owl carusel controller add id finished
