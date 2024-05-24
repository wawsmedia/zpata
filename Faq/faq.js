var tracker = 'p';
function changefunction(){
    var x = document.getElementById("bus-ans");
    if (x.style.display === "none"){
        x.style.display = "block";
    }else {
        x.style.display = "none";
    }
    var y = document.getElementById("plus-icon");
    if (tracker =='p'){
        y.src="/Faq/images/minus.svg"
        tracker = 'm';
    }else{
        y.src = 'images/plus.svg'
        tracker = 'p';
    }
}
