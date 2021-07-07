var age = 40;
var is_subscribed = true;

age = 17;
is_subscribed = false;
userData();

age = 27;
is_subscribed = false;
userData();

age = 17;
is_subscribed = true;
userData();

age = 27;
is_subscribed = true;
userData();




function userData(){
    if (age < 18) {
        console.log ("User is underage.");
    }else if (age > 18) {
        console.log ("User is over the legal age.");
    } 
    
    if (is_subscribed == true){
        console.log("User is subscribed");
    }else if (is_subscribed == false){
        console.log("User is not subscribed");
    }
    
    else {
        console.log("User soes not exist")
    }
}

