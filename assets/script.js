$(document).ready(function() {

var nowMoment = moment().format('MMMM Do YYYY, h:mm:ss a');
var momentTime = [moment().hour()];
// var nowTime = parseInt(momentTime);

var eDisplayMoment = $('#currentDay');

eDisplayMoment.text(nowMoment);

var timeBlocks = $('#time-blocks');
// var blockContainer = $('.container');

// var workHours = {"8AM": "", "9AM": "", "10AM": "", "11AM": "", "12PM": "", "1PM": "", "2PM": "", "3PM": "", "4PM": ""};
// var savedTasks = JSON.parse(localStorage.getItem("tasks")) || workHours;

var workDayHours = ['8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm'];
var currentTime = {8: "8AM", 9: "9AM", 10: "10AM", 11: "11AM", 12: "12PM", 13: "1PM", 14: "2PM", 15: "3PM", 16: "4PM"}
// [moment().hour()]
// var workDayHours = [8, 9, 10, 11, 12, 13, 14, 15, 16];
// var blocks = '';

function createTimeBlocks() {
    var blocks = "";
    // for (var i = 0; i < workDayHours.length; i++) {
    //     var hourBlocks = "" +
    //         '<div class="input-group mb-3">' +
    //         '<div class="input-group-prepend">' +
    //         '<span class="input-group-text">' + workDayHours[i] + '</span>' +
    //         '</div>' +
    //         '<input type="text" class="form-control" id="userInput"' + workDayHours[i] + '">' +
    //         '<div class="input-group-append">' +
    //         '<button class="btn btn-primary saveButton" data-time="' + parseInt(workDayHours[i]) + '"><i class="fa fa-save"></i></button>' +
    //         '</div>' +
    //         '</div>';
    //     blocks += hourBlocks;
    // }

    $.each(currentTime, function(key, value) {
        var hourBlocks = "" +
        '<div class="input-group mb-3">' +
        '<div class="input-group-prepend">' +
        '<span class="input-group-text">' + currentTime[value] + '</span>' +
        '</div>' +
        '<input type="text" class="form-control" id="userInput"' + currentTime + '">' +
        '<div class="input-group-append">' +
        '<button class="btn btn-primary saveButton" data-time="' + currentTime[key] + '"><i class="fa fa-save"></i></button>' +
        '</div>' +
        '</div>';
    blocks += hourBlocks;
    });
    timeBlocks.append(blocks);



    $(".saveButton").on("click", function(event) {
        var timeSlot = event.currentTarget.getAttribute('data-time');
        var userTask = $("#userInput" + timeSlot).val();
        // savedTasks.push(userTask);
        savedTasks[timeSlot] = userTask;
        localStorage.setItem("tasks", JSON.stringify(savedTasks));

    });


// }

    // function setColor() {
    //     var workHours = parseInt(workDayHours[i]);

    //     if (nowTime === workHours) {
    //     return 'yellow'
    //      }
    //     if (nowTime > workHours) {
    //     return 'red'
    //      }
    //     if (nowTime < workHours) {
    //     return 'green'
    //     }
    //     console.log(workHours);
    //     console.log(nowTime);
    // }
    // console.log(workHours);
    // console.log(nowTime);

    // for (var i = 0; i < workHours.length; i++) {
    //     var hourBlocks = "" +
    //         '<div class="input-group mb-3">' +
    //         '<div class="input-group-prepend">' +
    //         '<span class="input-group-text">' + workHours[i] + '</span>' +
    //         '</div>' +
    //         '<input type="text" class="form-control" id="userInput"' + workHours[i] + '">' +
    //         '<div class="input-group-append">' +
    //         '<button class="btn btn-primary saveButton" data-time="' + workHours[i] + '"><i class="fa fa-save"></i></button>' +
    //         '</div>' +
    //         '</div>';
    //     blocks += hourBlocks;

    // }


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

// for (i = 0; i < workDayHours.length; i++) {
//     var workHours = parseInt(workDayHours[i]);
//     var inputField = $('#userInput');
//     // var time = parseInt(nowTime);
//     if (momentTime === workHours) {
//         !important(inputField.addClass(current));
//     }
//     if (momentTime > workHours) {
//         !important(inputField.addClass(past));
//     }
//     if (momentTime < workHours) {
//         return 'green'
//     }
//     !important(inputField.addClass(future));
// }



// console.log(savedTasks);
// setColor();
}
console.log(momentTime);
createTimeBlocks();
});

//pseudocode
//create an input line for each hour of the work day
//prepend the hour to each input
//append a save button to each input
//on click of the save button save it to localStorage
//also - keep it displayed there when it is saved