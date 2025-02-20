function shownav() {
    const nav = document.querySelector(".side-nav");
    nav.style.display = "flex"
}
function hidenav() {
    const nav = document.querySelector(".side-nav");
    nav.style.display = "none"
}

function skills(){
    const skill = document.querySelector("#skills")
    const education = document.querySelector("#education")
    const experience= document.querySelector("#experience")
    skill.style.display = "block"
    education.style.display = "none"
    experience.style.display = "none"
}
function education(){
    const skill = document.querySelector("#skills")
    const education = document.querySelector("#education")
    const experience= document.querySelector("#experience")
    skill.style.display = "none"
    education.style.display = "block"
    experience.style.display = "none"
}
function experience(){
    const skill = document.querySelector("#skills")
    const education = document.querySelector("#education")
    const experience= document.querySelector("#experience")
    skill.style.display = "none"
    education.style.display = "none"
    experience.style.display = "block"
}
