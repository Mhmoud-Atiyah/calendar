// change resolution dynamically
function appResize(){
    // some important variabls
    let document_height = window.innerHeight;
    let document_width = window.innerWidth;
    let window_height = window.outerHeight;
    let window_width = window.outerWidth;

    document.body.style.height = document_height + 'px';
    document.body.style.width = document_width + 'px';
    document.getElementById("side").style.height = document_height + 'px';
    document.getElementById("top").style.width = document_width - 302 + 'px';
    document.getElementById("main").style.height = document_height - 70 + 'px';
    document.getElementById("main").style.width = document_width - 300 + 'px';
    document.getElementById("my-day").style.height = document_height - 180 + 'px';
    document.getElementsByClassName("main-calendar")[0].style.height = document_height - 120 + 'px';
    /**
     document.getElementsByClassName("main-calendar-days-week")[0].style.height = ((document_height - 120)/5) + 'px';
     document.getElementsByClassName("main-calendar-days-week")[1].style.height = ((document_height - 120)/5) + 'px';
     document.getElementsByClassName("main-calendar-days-week")[2].style.height = ((document_height - 120)/5) + 'px';
     document.getElementsByClassName("main-calendar-days-week")[3].style.height = ((document_height - 120)/5) + 'px';
     document.getElementsByClassName("main-calendar-days-week")[4].style.height = ((document_height - 120)/5) + 'px';
     * 
     */
    //document.getElementById("alpha_order").style.height = document_height - 120+ 'px';
}
// first open look
window.onload=()=>{
    appResize();
}
// on change look
window.onresize= ()=>{
    appResize();
}
// 
