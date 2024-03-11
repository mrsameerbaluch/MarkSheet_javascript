var MarksInMath = prompt ("Obtained marks in math")

var MarkInEngkish = prompt ("Obtained marks in English")

var MarkInScience = prompt ("Obtained marks in Science")

var MarkInUrdu = prompt ("Obtained marks in Urdu")

var MarkInPhysics = prompt ("Obtained marks in Physics")

var MarkInHistory = prompt ("Obtained marks in History")

var MarkInPst = prompt ("Obtained marks in Pst")

var TotalObtainedMarks = +(MarksInMath) + +(MarkInEngkish) + +(MarkInScience) + +(MarkInUrdu) + +(MarkInPhysics) + +(MarkInHistory) 

var TotalMarks = 700

alert ("Your Obtained Marks Are =" + TotalObtainedMarks +  " " + "Out Of 700")

var percentage = TotalObtainedMarks / TotalMarks * 100

var fail = ("You are FAil")

alert ("Your Percentage is" + " " + percentage +"%")

if (percentage>=90) {
    alert ("Your Grade Is A+")
}

if (percentage<80 && percentage>=70) {
    alert ("Your Grade Is A")
}

if (percentage<70 && percentage>=60){
    alert ("Your Grade Is B")
}

if (percentage<60 && percentage>=50) {
    alert ("Your Grade Is C")
}

if (percentage<50 && percentage>=40){
    alert ("Your Grade Is D")
}

else {
    alert (Fail)
}