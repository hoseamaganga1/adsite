var width = 10
var root_div = document.getElementById("root") // 
window.onload = screen
window.onresize = screen
function screen(){
    width = window.innerWidth
}
function cust_div(id){  // div with id
    var c_div = document.createElement("div")
    c_div.id = id
    return c_div
}
function cust_p(class_name, p_txt){     // pagraph with class and text
    var c_p = document.createElement("p")
    c_p.className = class_name
    c_p.textContent = p_txt
    return c_p
}
function cust_img(class_name, source, alt){     // img with src, class and alt
    var c_img = document.createElement("img")
    c_img.className = class_name
    c_img.src = source
    c_img.alt = alt
    return c_img
}
var header = cust_div("header")     // header
var main = cust_div("main")     // main
var footer = cust_div("footer")     // footer
root_div.appendChild(header)
root_div.appendChild(main)
root_div.appendChild(footer)
var logo = cust_div("logo")
var menu = cust_div("menu")
header.appendChild(logo)
header.appendChild(menu)
var link4 = document.createElement("a")
link4.href = "#"
link4.innerHTML = "HM"
logo.appendChild(link4)
// logo.innerHTML = "HM LOGO"
var home = cust_div("home")
var contact = cust_div("contact")
var about = cust_div("about")
menu.appendChild(home)
menu.appendChild(contact)
menu.appendChild(about)
var link5 = document.createElement("a")
link5.href = "#"
link5.innerHTML = "HOME"
home.appendChild(link5)
var link6 = document.createElement("a")
link6.href = "#"
link6.innerHTML = "CONTACT"
contact.appendChild(link6)
var link7 = document.createElement("a")
link7.href = "#"
link7.innerHTML = "ABOUT"
about.appendChild(link7)
var img1 = cust_div("img1")
var img01 = cust_img("img01", "./img/Amwager-Sign-up-Promo.jpg","img01")
var txt1 = cust_div("txt1")
img1.appendChild(img01)
main.appendChild(img1)
var pt1 = cust_div("pt1")
var link = document.createElement("a")
link.href = "https://www.kqzyfj.com/click-101427914-15734478"
link.innerHTML = "After profits?"
pt1.appendChild(link)
var link2 = document.createElement("a")
link2.href = "https://www.kqzyfj.com/click-101427914-15734478"
link2.innerHTML = "New Customer Offer: $150 Deposit Match"
pt1.appendChild(document.createElement("hr"))
pt1.appendChild(document.createElement("hr"))
pt1.appendChild(link2)
pt1.appendChild(document.createElement("hr"))
var link3 = document.createElement("a")
link3.href = "https://www.kqzyfj.com/click-101427914-15734478"
link3.innerHTML = "☝️"
link3.className = "emoji"
pt1.appendChild(link3)
txt1.appendChild(pt1)
main.appendChild(txt1)
var li_img = cust_img("li_img", "./img/Asset 2.svg", "li_img")
var link8 = document.createElement("a")
link8.href = "https://www.linkedin.com/in/hosea-maganga-5b8ab41b7"
link8.appendChild(li_img)
footer.appendChild(link8)