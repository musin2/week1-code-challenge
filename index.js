//Challenge 1: Student Grade Generator
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
// Challenge 2: Speed Detector
function detectSpeed(){
    let carSpeed = 80;
    let speedLimit = 70;
    let demeritP = 0;

    if(carSpeed<=speedLimit){   //check if the car speed is below the speed limit
        alert("OK");
    } else {
        let n = carSpeed - speedLimit;
        demeritP = Math.floor(n/5);             //Calculate demerit points
        alert(`Points: ${demeritP}`);
    }
    if(demeritP>12){
        alert("License suspended"); 
    }
}

// Chellenge 3: Net Salary Calculator
function getNetSalary(){
    let netSalary;
    let grossSalary = 15000;
    let paye;
    let nhif;
    let nssf;
    //calculate PAYE
    if(grossSalary <= 24000){
        paye = grossSalary * 0.1;
    } else if(grossSalary <= 32333){
        paye = grossSalary * 0.25;
    } else if(grossSalary <= 500000){
        paye = grossSalary * 0.3;
    } else if(grossSalary <= 800000){
        paye = grossSalary * 0.325;
    } else if(grossSalary > 800000){
        paye = grossSalary * 0.35;
    }

    if(grossSalary <= 5999){
        nhif = 150;
    } else if(grossSalary <= 7999){
        nhif = 300;
    } else if(grossSalary <= 11999){
        nhif = 400;
    } else if(grossSalary <= 14999){
        nhif = 500;
    } else if(grossSalary <= 19999){
        nhif = 600;
    } else if(grossSalary <= 24999){
        nhif = 750;
    } else if(grossSalary <= 29999){
        nhif = 850;
    } else if(grossSalary <= 34999){
        nhif = 900;
    } else if(grossSalary <= 39999){
        nhif = 950;
    } else if(grossSalary <= 44999){
        nhif = 1000;
    } else if(grossSalary <= 49999){
        nhif = 1100;
    } else if(grossSalary <= 59999){
        nhif = 1200;
    } else if(grossSalary <= 69999){
        nhif = 1300;
    } else if(grossSalary <= 79999){
        nhif = 1400;
    } else if(grossSalary <= 89999){
        nhif = 1500;
    } else if(grossSalary <= 99999){
        nhif = 1600;
    } else if(grossSalary >= 100000){
        nhif = 1700;
    }

    if(grossSalary <= 7000){                //tier 1 contribution (6% rate)
        nssf = grossSalary * 0.06;
    } else if(grossSalary > 7000 && grossSalary <= 36000){
        //tier 2 contribution
        let t1 = 7000 * 0.06;                   //tier 1 contribution (limited to 7,000 shillings)
        let t2deductable = grossSalary - 7000;         //Use basic salary to calculate deductable amount for teir 2 contribution
        t2 = t2deductable * 0.06;
        nssf = t1 + t2;
    } else if(grossSalary > 36000){            //Limit of nssf deductions = 36000 shillings
        let t1 = 7000 * 0.06;
        let t2deductable = 36000 - 7000;        //Alternative: 6% of 36000 shillings
        let t2 = t2deductable * 0.06;
        nssf = t1 + t2;    
    }

    netSalary = grossSalary -paye - nhif - nssf;
    alert(`Net Salary: ${netSalary}, PAYE = ${paye}, NHIF deduction = ${nhif}, NSSF deduction = ${nssf}, Basic Salary (Gross Salary) = ${grossSalary}`);
}