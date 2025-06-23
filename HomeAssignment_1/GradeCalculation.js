function gradeCalculator(studentScore){
    switch(true){
        case (studentScore>=90 && StudentScore<=100):
            return "A+";
        case(studentScore>=80 && studentScore<=89):
            return "A";
        case(StudentScore>=70 && studentScore<=79):
            return "B+";
        case(studentScore>=60 && studentScore<=69):
            return "B";
        case(studentScore>=50 && studentScore<=59):
            return "C";
        case(studentScore>=40 && studentScore<=49):
            return "D";
        case(studentScore>=0 && studentScore<=39):
            return "F";
        default:
            return "Invalid score. Please enter a score between 0 and 100.";
    }
}
let studentScore=85;
let grade=gradeCalculator(studentScore);
console.log("The grade for the student with score", studentScore, "is:", grade);