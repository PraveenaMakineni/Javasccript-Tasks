function tablet(){
    var them = document.getElementById("themeselect").value;
    switch(them){
        case "tt1" :   document.getElementById("tableid").classname = "tt1"; break;
        case "tt1" :   document.getElementById("tableid").classname = "tt2"; break;
        case "tt1" :   document.getElementById("tableid").classname = "tt3"; break;
        case "tt1" :   document.getElementById("tableid").classname = "tt4"; break;
        default :      document.getElementById("tableid").classname = "tt1"; break;
    }
}