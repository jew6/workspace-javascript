//event handler
function changestyle(){
    var classname = this.getAttribute("class");
    if(classname == "answer"){
        this.setAttribute('class','answer');
    }else{
        this.setAttribute('class','answer');
    }
    
}
for(var i=0; i<4; i++){
    document.getElementsByClassName('answer')[4].addEventListener('click',changestyle,false);
}