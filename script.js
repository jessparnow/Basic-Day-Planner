//pull from html using variables
let todoEl = $("#data-input");


//use local storage to save information

// localstorage.setitem("save as an object", variable set for the appointments)
// get item to pull from and place on screem
    // make an object that stores 9-5 variables

    $(".saveBtn").on("click", function(event){
        event.preventDefault();
        function store() {
            window.localStorage.setItem("data-input", JSON.stringify(todoEl));
        }
     
    store();
    
    });

    function getFromStorage() {
        window.localStorage.getItem("data-input");
        let stringified = JSON.parse(todoEl);
        return stringified;
    }
    getFromStorage();

    // set colors with changing times
        //set conditionals if/else
        //set times
        //moment.hours set to variable
            //evaluate that value to the time block between "#time-id"
            //assign past/present/furture colors


//dot siblings or parent

    // let userInput = key.value;

    // localStorage.setItem("data-input", userInput);
    // todoEl.text = userInput;
    //    todoEl.text = localStorage.getItem("userInput");

    //set date and time using moment

    let m = moment();

    console.log(m.format("L"));

    // create variable to display content on page


    let dateDisplay = $("#currentDay");

let today = moment().format("dddd, L");
dateDisplay.text(today);

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