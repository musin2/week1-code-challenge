function studentGrade(){
    let grade = prompt("Enter Student Marks (0-100)");

    if(grade>79){
        alert("Grade: A");
    } else if(grade>=60 && grade<=79){
        alert("Grade: B");
    } else if(grade>49 && grade<=59){
        alert("Grade: C");
    } else if(grade>=40 && grade<=49){
        alert("Grade: D");
    } else if(grade<40){
        alert("Grade: E");
    } else { alert("Wrong input");}
}

function detectSpeed(){
    let carSpeed = 80;
    let speedLimit = 70;
    let demeritP = 0;
    if(carSpeed<=speedLimit){
        alert("OK");
    } else {
        let n = carSpeed - speedLimit;
        demeritP = Math.floor(n/5);
        alert(`Points: ${demeritP}`);
    }
    if(demeritP>12){
        alert("License suspended");
    }
}

