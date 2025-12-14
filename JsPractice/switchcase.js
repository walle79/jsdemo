function checkDayOfWeek(dayNumber) {
    let day;

    switch (dayNumber) {
        case 0:
            day = "Monday"
            break;
        case 1:
            day = "Tuesday"
            break;
        case 2:
            day = "Wednesday"
            break;
        case 3:
            day = "Thursday"
            break;
        case 4:
            day = "Friday"
            break;
        case 5:
            day = "Saturday"
            break;
        case 6:
            day = "Sunday"
            break;
        default:
            day = "Not a valid day number"
            break;                             
    }
    console.log(day)
}

checkDayOfWeek(7)