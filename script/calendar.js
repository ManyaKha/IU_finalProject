//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function() {
    $(".popup-overlay, .popup-content").addClass("active");

});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".close").on("click", function() {
    $(".popup-overlay,.popup-content").removeClass("active");
});

//creating a new date, to determine the actual day, month and year
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
//array with all the months
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);
//creating a calendar with the title of the actual month and the year
function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}
let cell = document.createElement("td");

function showCalendar(month, year) { //this function will create a table with different dates depending on the month and year we are

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td"); //each individual cell with the value of the respective day
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
                //changing the color of the cells for the different events
                if (cell.textContent == 15 && month == 10 && year == 2020) {
                    change_colorEvent(cell)
                }
                if (cell.textContent == 30 && month == 10 && year == 2020) {
                    change_colorEvent(cell)
                }
                if (cell.textContent == 4 && month == 10 && year == 2020) {
                    change_colorEvent(cell)
                }
                if (cell.textContent == 6 && month == 11 && year == 2020) {
                    change_colorEvent(cell)
                }
                //changing the color of the actual day (blue color)
                if (cell.textContent == today.getDate() && month == 10 && year == 2020) {
                    change_colorday(cell)
                }
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}
//functions to change the color of the important events and the color of the actual day of the month
function change_colorday(cell){
    cell.style.backgroundColor="#00CDFF"
}
function change_colorEvent(cell){
    cell.style.backgroundColor="#F96A6A"
}