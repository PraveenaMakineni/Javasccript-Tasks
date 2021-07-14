function myfun() {
    var targetButtonHtml = document.getElementById('button1')
    var InputElement = document.createElement('input')
    InputElement.type = "text"
    document.getElementById('para1').appendChild(InputElement)
    document.getElementById('icon1').style.display = "block"
}
function iconfunc() {
    document.getElementById('para1').style.display = "none"
    document.getElementById('icon1').style.display = "none"
}
//password
function myfun1() {
    var targetButtonHtml1 = document.getElementById('button2')
    var InputElement1 = document.createElement('input')
    InputElement1.type = "password"
    document.getElementsByClassName('para2')[0].appendChild(InputElement1)
    document.getElementById('icon2').style.display = "block"
}
function iconfunc1() {
    document.getElementsByClassName('para2')[0].style.display = "none"
    document.getElementById('icon2').style.display = "none"
}
//password
function myfun2() {
    var targetButtonHtml1 = document.getElementById('button3')
    var InputElement1 = document.createElement('input')
    InputElement1.type = "email"
    document.getElementsByClassName('para3')[0].appendChild(InputElement1)
    document.getElementById('icon3').style.display = "block"
}
function iconfunc2() {
    document.getElementsByClassName('para3')[0].style.display = "none"
    document.getElementById('icon3').style.display = "none"

}