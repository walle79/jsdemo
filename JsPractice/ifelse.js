function checkAge(age) {
    if (age >= 18) {
        console.log("You're old enough to make vote.")
    } else {
        console.log("You're not eligible for this voting.")
    }
}

checkAge(18);

// nested if-else
function checkGrade(score) {
    let grade;
    if (score >= 90) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B"
    } else if (score >= 50) {
        grade = "C"
    } else {
        grade = "D"
    }
    console.log("Grade: " + grade)
}    

checkGrade(0)