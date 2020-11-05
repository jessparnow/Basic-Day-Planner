//pull from html using variables
let hourNineAm = $("#9am");
let hourTenAm = $('#10am');
let hourElevenAm = $('#11am');
let hourTwelvePm = $('#12pm');
let hourOnePm= $('#1pm');
let hourTwoPm = $('#2pm');
let hourThreePM = $('#3pm');
let hourFourPm =$('#4pm');
let hourFivePm = $('#5pm');

//use local storage to save information

//do seperate save buttons for each hour to prevent overwriting

    $(".saveBtn").on("click", function(event){
        event.preventDefault();
        // selects the parent div (figure out which hour to save)
        let hourToSave = $(this).parent().text().trim();
        // select the id of the text area .val() selects the user input
        let textToSave = $("#" + hourToSave).val();
        // first part is the key and the second part is the value of the variable
        localStorage.setItem(hourToSave, textToSave);
        
          console.log(textToSave);
    });
//looping through local storage
    for (let i = 0; i < localStorage.length; i++){
        //selecting the id and placing into the display key() represents the key in the object 
         $("#" + localStorage.key(i)).val(localStorage.getItem(localStorage.key(i)));
        console.log(localStorage.key(i))
    }

    // $("#9am").val(localStorage.getItem("9am"));
   
    //set date and time using moment

    let m = moment();

    console.log(m.format("L"));

    // create variable to display content on page
   let dateDisplay = $("#currentDay");

let today = moment().format("dddd, L");
dateDisplay.text(today);


// track the time and change the colors
function hourTracker() {
    let timeBlockEl = moment().hours();

$(".timeblock").each(function (){
    let timeHour = parseInt($(this).attr("id").split("-")[1]);

    if (timeHour < timeBlockEl) {
        $(this).addClass("past");

    } else if (timeHour === timeBlockEl) {
        $(this).addClass("present");
        $(this).removeClass("past");
    }
    if (timeHour > timeBlockEl) {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    }
}
)};
hourTracker();