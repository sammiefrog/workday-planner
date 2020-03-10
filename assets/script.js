$(document).ready(function() {
//dont touch this it works
var nowMoment = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentHour = [moment().hour()];
var eDisplayMoment = $('#currentDay');
eDisplayMoment.text(nowMoment);

//where the time blocks go in html
var timeBlocks = $('#time-blocks');
// var blockContainer = $('.container');

// var workHours = {"8AM": "", "9AM": "", "10AM": "", "11AM": "", "12PM": "", "1PM": "", "2PM": "", "3PM": "", "4PM": ""};
// var workDayHours = ['8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm'];

//currently in use
var savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
var workDayHours = [8, 9, 10, 11, 12, 13, 14, 15, 16];

//i use this for the second way of showing my rows
// var currentTime = {8: "8AM", 9: "9AM", 10: "10AM", 11: "11AM", 12: "12PM", 13: "1PM", 14: "2PM", 15: "3PM", 16: "4PM"}

function createTimeBlocks() {
    var blocks = "";
//the first wayyyy
    for (var i = 0; i < workDayHours.length; i++) {
        var hourBlocks = "" +
            '<div class="input-group mb-3">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text">' + workDayHours[i] + '</span>' +
            '</div>' +
            '<input type="text" class="form-control" id="userInput"' + workDayHours[i] + '">' +
            '<div class="input-group-append">' +
            '<button class="btn btn-primary saveButton" data-time="' + workDayHours[i] + '"><i class="fa fa-save"></i></button>' +
            '</div>' +
            '</div>';
        blocks += hourBlocks;
    }
    timeBlocks.append(blocks);
//second way
    // $.each(currentTime, function(key, value) {
    
    //     var hourBlocks = "" +
    //     '<div class="input-group mb-3">' +
    //     '<div class="input-group-prepend">' +
    //     '<span class="input-group-text">' + value + '</span>' +
    //     '</div>' +
    //     '<input type="text" class="form-control inputVal" id="color userInput" value="">' +
    //     '<div class="input-group-append">' +
    //     '<button class="btn btn-primary saveButton" value="i" data-time="' + key + '"><i class="fa fa-save"></i></button>' +
    //     '</div>' +
    //     '</div>';
    // blocks += hourBlocks;
    // });
    // timeBlocks.append(blocks);

//this click is used for either method of showing rows^
    $(".saveButton").on("click", function(event) {
        var timeSlot = event.currentTarget.getAttribute('data-time');
        var userTask = $('#userInput').val();
        // var userTask = $('INPUT').val();
        console.log(timeSlot);
        console.log(userTask);
        savedTasks.push(userTask);
        // savedTasks[timeSlot] = userTask;
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
        localStorage.getItem("tasks");

    });

//showing up green at 8am....
for (i = 0; i < workDayHours.length; i++) {
    // var workHours = parseInt(workDayHours[i]);
    var inputField = $('#userInput');
    // var time = parseInt(nowTime);
    if (currentHour === workDayHours) {
        inputField.addClass('present');
    }
    if (currentHour > workDayHours) {
        inputField.addClass('past');
    }
    if (currentHour < workDayHours) {
        inputField.addClass('future');
    }
    
}


//third way via josh - doesnt work on my format?
// Object.keys(savedTasks).forEach(function(time) {
//     var hourBlocks = "" +
//         '<div class="input-group mb-3">' +
//         '<div class="input-group-prepend">' +
//         '<span class="input-group-text">' + time + '</span>' +
//         '</div>' +
//         `<input type="text" style="background-color: ${setColor(time)}" class="form-control" id="input-${time}" value="${savedTasks[time]}"/>` +
//         '<div class="input-group-append">' +
//         '<button class="btn btn-primary saveButton" data-time="'  + time + '"><i class="fa fa-save"></i></button>' +
//         '</div>' +
//         '</div>';
//     blocks += hourBlocks;
// });

    // $(".saveButton").on("click", function(event) {
    // var timeSlot = event.currentTarget.getAttribute('data-time');
    // var userTask = $("#userInput-" + timeSlot).val();
    // // savedTasks.push(userTask);
    // savedTasks[timeSlot] = userTask;
    // localStorage.setItem("tasks", JSON.stringify(savedTasks));

    // });



// console.log(savedTasks);
}
console.log(currentHour);
createTimeBlocks();

//don't delete this dummy
});

//pseudocode
//create an input line for each hour of the work day
//prepend the hour to each input
//append a save button to each input
//on click of the save button save it to localStorage
//also - keep it displayed there when it is saved