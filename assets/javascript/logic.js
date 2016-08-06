//VARIABLES
//===============
var trains =[];


// moment.js

// FUNCTIONS
// ===============

// function to calculate time
var calc = function(startTime, freq) {

    var moment = moment();
    //put first train time in to military time
    var firstTrainTime = moment(startTime, "HH:MM");

}

// MAIN PROCESSES
//===============

// Function for submit button on the form
$("#addButton").on("click", function(){

      // form variables, stored as what is entered and whitespace is trimmed
      var name = $("#name").val().trim();
      var dest = $("#dest").val().trim();
      var freq = $("#freq").val().trim();
      var next = $("#next").val().trim();
      var away = $("#away").val().trim();

      //push the input into a table

      //moment.js stuff

      var cvNext = moment(next, "hh:mm");
      console.log(cvNext);

      var cvFreq = moment(freq, "mm");
      console.log(cvNext);

      var cvAway = moment(away, "mm");
      console.log(cvAway);

})
