

//Home To do list array
var homeArray = [
{
    task: "Ironing",
},

 {
    task: "Repair door",
    
},

 {
    task: "Cut Grass",
},

 {
    task: "Feed Lion",
},
];

//WORK To do list array
var workArray = [
{
    task: "Delete all files",
},

 {
    task: "Add bug to code",
 },

 {
    task: "Unleash a virus",
},

 {
    task: "Send rude email to manager",
},
];

//SOCIAL To do list array
var socialArray = [
{
    task: "PIL gig 4th July",
},

 {
    task: "Perform in charity event",
 },

 {
    task: "Meet friedns for coffee",
},

 {
    task: "Visit Brighton for eats",
},
];



homeTask(homeArray); //Pass the home array into the function

workTask(workArray); //Pass the work array into the function

socialTask(socialArray); //Pass the social array into the function


function homeTask(homeArray){

    for (let i of homeArray){
        console.log(`TASK: ${i.task}`);
    }
}



function workTask(homeArray){

    for (let i of homeArray){
        console.log(`TASK: ${i.task}`);
    }
}

function socialTask(homeArray){

    for (let i of homeArray){
        console.log(`TASK: ${i.task}`);
    }
}









/* for (var i = 0; i < theArray.length; i++) {
  console.log(theArray[i]); */