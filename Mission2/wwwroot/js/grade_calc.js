

finalgrade = 0.0;

$('#gradecalc').click(function () {
    assignment_grade = (parseInt($('#assignment').val()) * .55);
    group_grade = (parseInt($('#project').val()) * .05);
    quiz_grade = (parseInt($('#quiz').val()) * .1);
    exam_grade = (parseInt($('#exam').val()) * .2);
    intex_grade = (parseInt($('#intex').val()) * .1);

    finalgrade = assignment_grade + group_grade + quiz_grade + exam_grade + intex_grade;

    if (finalgrade >= 94) {
       alert(finalgrade + " " + "A");
    }
    else if (finalgrade >= 90) {
        alert(finalgrade + " " + "A-"); 
    }
    else if (finalgrade >= 87) {
        alert(finalgrade + " " + "B+");
    }
    else if (finalgrade >= 84) {
        alert(finalgrade + " " + "B");
    }
    else if (finalgrade >= 80) {
        alert(finalgrade + " " + "B-");
    }
    else if (finalgrade >= 77) {
        alert(finalgrade + " " + "C+");
    }
    else if (finalgrade >= 74) {
        alert(finalgrade + " " + "C");
    }
    else if (finalgrade >= 70) {
        alert(finalgrade + " " + "C-");
    }
    else if (finalgrade >= 67) {
        alert(finalgrade + " " + "D+");
    }
    else if (finalgrade >= 64) {
        alert(finalgrade + " " + "D");
    }
    else if (finalgrade >= 60) {
        alert(finalgrade + " " + "D-");
    }
    else {
        alert(finalgrade + " " + "E");
    }
})



//if (finalgrade >= 94) {
//    output += finalgrade + " " + "A";
//    $('#output').html() = output;
//}
//else if (finalgrade >= 90) {
//    output += finalgrade + " " + "A-";
//    $('#output').html() = output;
//}
//else if (finalgrade >= 87) {
//    output += finalgrade + " " + "B+";
//    $('#output').html() = output;
//}
//else if (finalgrade >= 84) {
//    output += finalgrade + " " + "B";
//    $('#output').html() = output;
//}
//else if (finalgrade >= 80) {
//    output += finalgrade + " " + "B-";
//    $('#output').html() = output;
//}
//else if (finalgrade >= 77) {
//    output += finalgrade + " " + "C+";
//    $('#output').html() = output;
//}
//else if (finalgrade >= 74) {
//    output += finalgrade + " " + "C";
//    $('#output').html() = output;
//}
//else if (finalgrade >= 70) {
//    output += finalgrade + " " + "C-";
//    $('#output').html() = output;
//}
//else if (finalgrade >= 67) {
//    output += finalgrade + " " + "D+";
//    $('#output').html() = output;
//}
//else if (finalgrade >= 64) {
//    output += finalgrade + " " + "D";
//    $('#output').html() = output;
//}
//else if (finalgrade >= 60) {
//    output += finalgrade + " " + "D-";
//    $('#output').html() = output;
//}
//else {
//    output += finalgrade + " " + "E";
//    $('#output').html() = output;
//}
//})