// callback function
// async call/task - once this task is completed - then only callback function will be called

// basic callback:
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

// callback function
function welcome() {
    console.log('well')
}

greet('Son', welcome);

// callback with async function
function printInfo(name, callback) {
    // async function/task/step
    setTimeout(function() {
        console.log("Print info for " + name);
        callback("Callback here");
    }, 1000); // delay of 1000ms/1sec
}

function displayMessage(mess) {
    console.log(mess);
}

printInfo("Lisa", displayMessage);