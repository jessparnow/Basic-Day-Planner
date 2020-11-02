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


    $(".saveBtn").on("click", function(event){
        event.preventDefault();
     
           $('#9am').val();
           $('#9am option:selected').text();
                localStorage.setItem('input', hourNineAm.value);
        
    });
    localStorage.getItem("input");

    console.log(localStorage);

   
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