//function summary
/*
function functionName (Parameter){
    function body
    return
}
var returnValue = functionName(parameter value);

*/

function getAverage (assignment1, assignment2, assignment3){
    var sum = assignment1 + assignment2 + assignment3;
    var average = sum/3;
    return average;
}
var assign1 = 60;
var assign2 = 57;
var assign3 = 60;
var averageReturn = getAverage(assign1,assign2, assign3);
console.log(averageReturn);
