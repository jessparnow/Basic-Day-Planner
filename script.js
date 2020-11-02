//pull from html using variables

let todoList = $("#todoList");

//use local storage to save information
if (window.localStorage){

    $(".saveBtn").on("click", function(event){
        event.preventDefault();
        setStorageItems();

    });
}
    console.log(localStorage);

    if (window.localStorage) {
        let dataInput = $("#data-input");

        dataInput.value = localStorage.getItem('input');

        function setStorageItems(){
            localStorage.setItem('input', dataInput.value);
        } false;
    }

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