var flagImg = false;
var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');

function changeSlide() {
    if (flagImg == true) {
        slide1.style.display = "block";
        slide2.style.display = "none";
        flagImg = false;
    } else {
        slide2.style.display = "block";
        slide1.style.display = "none";
        flagImg = true;
    }
}

var interval_obj = setInterval(changeSlide, 15000);

var dk1 = document.getElementById('dk1');
var flag1 = false;

dk1.onclick = function() {
    flag1 = changeDK(this, flag1);
};

var dk2 = document.getElementById('dk2');
var flag2 = true;

dk2.onclick = function() {
    flag2 = changeDK(this, flag2);
};

var dk3 = document.getElementById('dk3');
var flag3 = true;

dk3.onclick = function() {
    flag3 = changeDK(this, flag3);
};

function changeDK(item, flag) {
    var h5 = document.querySelector("#" + item.id + " h5");
    var i = document.querySelector("#" + item.id + " i");

    if (flag == true) {
        h5.style.display = "block";
        i.setAttribute("class", "fas fa-minus-circle");
        return false;
    } else {
        h5.style.display = "none";
        i.setAttribute("class", "fas fa-plus-circle");
        return true;
    }
}