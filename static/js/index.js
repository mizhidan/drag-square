var oDrag = document.getElementById("drag-square");
var oFixed = document.getElementById("fixed-square");
var oArea = document.getElementById("drag-area");



window.onload = function() {
    this.oDrag.onmousedown = function(event) {
        event = event || window.event;
        var ol = event.pageX - oDrag.offsetLeft;
        var ot = event.pageY - oDrag.offsetTop;
        document.onmousemove = function(event) {        
            event = event || window.event;
            var left = event.pageX - ol;
            var top = event.pageY - ot;
            if(left >= 920 || left < 0) {
               left = Math.min(Math.max(0,left),920);
            }
            if(top >= 720 || top < 0) {
                top = Math.min(Math.max(0,top),720);
            }
            oDrag.style.left = left + 'px';
            oDrag.style.top = top + 'px';
            if(oDrag.offsetLeft - oFixed.offsetLeft <= 80 
                && oDrag.offsetLeft - oFixed.offsetLeft >= -80
                && oDrag.offsetTop - oFixed.offsetTop <= 80 
                && oDrag.offsetTop - oFixed.offsetTop >= -80) {
                oFixed.style.backgroundColor = "#1c43f0";
            } else {
                oFixed.style.backgroundColor = "#f0f146";
            }
        };



        document.onmouseup = function() {
            document.onmousemove = null;
        }
        return false;
    }
    
}