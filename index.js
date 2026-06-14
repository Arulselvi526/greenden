//Selecting side navbar, MenuIcon
var sideNav = document.getElementById("sidenav")
var menuIcon = document.getElementById("menuicon")
var closeNav = document.getElementById("closenav")
menuIcon.addEventListener("click", function()
{
sidenav.style.right = "0"
})
closeNav.addEventListener("click", function()
{
sidenav.style.right = "-50%"
})