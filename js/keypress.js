//event
//var messageE = document.getElementById('message');
//messageE.addEventListener('keyup', showKey);
$('#message').keyup(showKey);
document.addEventListener('mousemove', showPosition);
document.addEventListener('keydown', checkKey);

//event handler
function showKey(e){
    console.log(e.key);
    document.getElementById('lastKey').textContent="The key is "+e.key;
}

function showPosition(myEvent){
    console.log("The position is "+myEvent.pageX+", "+myEvent.pageY);
    $('#lastKey').text("The position is "+myEvent.pageX+", "+myEvent.pageY);
}

//testing on canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
