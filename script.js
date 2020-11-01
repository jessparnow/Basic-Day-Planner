//pull from html using variables
let userInput = $("#data-input");
let displayEl = $("<div>");

let itemsArray = [];
let items

if (localStorage.getItem('items')) {
  items = JSON.parse(localStorage.getItem('items'))
} else {
  items = []
}

localStorage.setItem("data-input", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('data-input'))

//use local storage to save information

    const liMaker = (text) => {
        let todoList = document.createElement("li");
        todoList.text = text;
        displayEl.append(todoList);
    }




    $(".saveBtn").on("click", function(event){
        event.preventDefault();
     
        liMaker(userInput.value);
        userInput.value = "";

        itemsArray.push(userInput.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        liMaker(userInput.value);
        userInput.value = '';

  console.log(itemsArray, items)
        
    });
    data.forEach((item) => {
        liMaker(item);
      });

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