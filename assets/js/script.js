$(document).ready(function() {
//dont touch this it works
var nowMoment = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentHour = moment().hour();
var eDisplayMoment = $('#currentDay');
eDisplayMoment.text(nowMoment);

//where the time blocks go in html
var timeBlocks = $('#time-blocks');

//currently in use
var userTask;
var timeSlot;
var taskData = {};

const savedTasks = JSON.parse(localStorage.getItem("saves")) || taskData;

console.log(savedTasks);

var workDayHours = [8, 9, 10, 11, 12, 13, 14, 15, 16];

//i use this for the second way of showing my rows

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
            '<input type="text" class="form-control" id="' + workDayHours[i] + '" savedTasks[workDayHours[i]] />' +
            '<div class="input-group-append">' +
            '<button class="btn btn-success saveButton" data-time="' + workDayHours[i] + '"><i class="fa fa-save"></i></button>' +
            '</div>' +
            '</div>';
            if (savedTasks){
                $('#' + workDayHours[i]).val(savedTasks);
                blocks += hourBlocks;
            }
            else if(!savedTasks) {
                blocks += hourBlocks;

            }

        

            
    }
    timeBlocks.append(blocks);

    


//this click is used for either method of showing rows^
    $('.saveButton').on("click", function() {

        var timeSlot = $(this).attr('data-time');
        var userTask = $(`#${timeSlot}`).val();

        savedTasks[timeSlot] = userTask;

        localStorage.setItem("saves", JSON.stringify(savedTasks));

        console.log(localStorage);

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