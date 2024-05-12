let profile_icon = document.querySelector(".nav-user-icon")
let settings_menu = document.querySelector(".settings-menu")
let dark_btn = document.getElementById("dark-btn")

profile_icon.onclick=function(){
    settings_menu.classList.toggle("hide")
}

dark_btn.onclick = function(){
    dark_btn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme")
}
