// for hotel registration
var test = {
    hotelname: "Marriot",
    room: 350,
    booked: 120,
    display: function(){
        return this.hotelname;
    }
};

console.log(test.hotelname);
console.log(test.room);
//event
$(function(){
    $('#submit').click(reservation);
    $('#lists').click(displayR);
});

var guestgroup = new Array();
function reservation(){
    var guest={
        name: $('#name').val(),
        numberofGuest: $('#num').val(),
        checkin: $('#checkin').val()
    };
    $("p:first").html("Thak you for your reservation!");
    guestgroup.push(guest); // store in the array
    console.log(guestgroup);
}

function displayR(){
    $("form").append("<table>");
    for(var i in guestgroup){
        var theguest = guestgroup[i];
        var row = "<tr><td>" + theguest.name+"</td><td>"+theguest.checkin+"</td></tr>";
        console.log(row);
        $("table").append(row);
    }
}