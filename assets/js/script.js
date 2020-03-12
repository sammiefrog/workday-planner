$(document).ready(function() {
//dont touch this it works
var nowMoment = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentHour = moment().hour();
var eDisplayMoment = $('#currentDay');
eDisplayMoment.text(nowMoment);

//where the time blocks go in html
var timeBlocks = $('#time-blocks');
// var blockContainer = $('.container');

// var workHours = {"8AM": "", "9AM": "", "10AM": "", "11AM": "", "12PM": "", "1PM": "", "2PM": "", "3PM": "", "4PM": ""};
// var workDayHours = ['8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm'];

//currently in use
// var savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
var userTask;
var timeSlot;
const savedTasks = localStorage.getItem(timeSlot) || {};

// var savedTasks = localStorage.getItem(timeSlot);

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
            '<span class="input-group-text">' + workDayHours[i]+ ":00" +
             '</span>' +
            '</div>' +
            '<input type="text" class="form-control" id="' + workDayHours[i] + '" value=""/>' +
            '<div class="input-group-append">' +
            '<button class="btn btn-success saveButton" data-time="' + workDayHours[i] + '"><i class="fa fa-save"></i></button>' +
            '</div>' +
            '</div>';
        blocks += hourBlocks;
        for (var j = 0; j < workDayHours.length; j++) {
            $('#' + workDayHours[i]).text(timeSlot);
        }
    }
    timeBlocks.append(blocks);

    


//this click is used for either method of showing rows^
    $('.saveButton').on("click", function() {

        var timeSlot = $(this).attr('data-time');
        var userTask = $(`#${timeSlot}`).val();


        localStorage.setItem(timeSlot, userTask);

        console.log(localStorage);
        // var savedTask = {
        //     timeSlot : userTask
        // }

        // localStorage.setItem('savedTasks', savedTask);
        // localStorage.getItem(JSON.parse('savedTasks'));
        

        // var savedTasks = localStorage.setItem(timeSlot, userTask);
        // localStorage.getItem(JSON.parse(timeSlot, userTask));

        // things to search/try..
        // 1. saving unique key pairs to local storage
        // 2. retrieving key value pairs from local storage after save
        // var myObj = localStorage.getItem(timeSlot, userTask);

        // if(myObj) {
        //     myObj = JSON.parse(myObj); 
        // } 
        // else {
        //     myObj = {};
        // }
        // appendNewValue();
        // function appendNewValue(timeSlot, userTask){
        //     myObj[timeSlot] = userTask;
        //     localStorage.setItem(timeSlot, JSON.stringify(myObj));
        //             /* Saves data immediately. Instead of saving every time, you can
        //             also add this persistence feature to the `(before)unload` handler. */
        // }
    });


//colorizing the input fields!!!!!
for (i = 0; i < workDayHours.length; i++) {

    if (currentHour === workDayHours[i]) {
        $("#" + workDayHours[i]).addClass('present');
    }
    if (currentHour > workDayHours[i]) {
        $("#" + workDayHours[i]).addClass('past');
    }
    if (currentHour < workDayHours[i]) {
        $("#" + workDayHours[i]).addClass('future');
    }
    
}

}
console.log(currentHour);

createTimeBlocks();

//don't delete this dummy
});


        // savedTasks[timeSlot] = userTask;
        // localStorage.setItem("tasks", JSON.stringify(savedTasks));