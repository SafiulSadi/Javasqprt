
person["Name:"] = ""
person["Username"]=""



function validateForm() {
    var x = document.forms["forms"]["Name:"].value;
    if ( x == null || x == "" ) {
       alert("Name must be filled out");
       return false;
    }
    var y = document.forms["forms"]["Username:"].value;
    if ( y == null || y == " " ) {
       alert("Username must be filled out and cannot contain black spaces");
       return false;
    }
    var z = document.forms["forms"]["Password:"].value;
    if ( z.length >=8  || z.length == 32 ) {
       alert("Name must be filled out");
       return false;
    }
    var a = document.forms["forms"]["Gender:"].value;
    if ( a.Gender== slected ) {
       alert("Name must be filled out");
       return false;
    }
 }