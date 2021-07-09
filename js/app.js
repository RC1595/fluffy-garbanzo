var age = ["17", "27", "17", "27"];
var is_subscribed = ["false", "false", "true", "true"];

for (var counter = 0; counter < age.length; counter++) {


    if (age [counter] < 18) {
        console.log ("User is underage.");
    }else {
        console.log ("User is over the legal age.");
    } 
    
    if (is_subscribed [counter] == true){
        console.log("User is subscribed");
    }else {
        console.log("User is not subscribed");
    }
    
}

//removed function userData and user information and replaced with arrays and a loop





