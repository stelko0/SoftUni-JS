function commision(argArr) {
    let city = argArr[0]
    let sales = Number(argArr[1])
    let calculatedCommision = 0
    let isError = false;

    if (sales < 0) {
        console.log("error");
    } else {
        switch (city) {
            case "Sofia":
                if (sales <= 500) {
                    calculatedCommision = sales * 0.05;
                } else if (sales <= 1000) {
                    calculatedCommision = sales * 0.07
                } else if (sales <= 10000) {
                    calculatedCommision = sales * 0.08
                } else {
                    calculatedCommision = sales * 0.12
                }
                break;
            case "Varna":
                if (sales <= 500) {
                    calculatedCommision = sales * 0.045;
                } else if (sales <= 1000) {
                    calculatedCommision = sales * 0.075
                } else if (sales <= 10000) {
                    calculatedCommision = sales * 0.1
                } else {
                    calculatedCommision = sales * 0.13
                }
                break;
            case "Plovdiv":
                if (sales <= 500) {
                    calculatedCommision = sales * 0.055;
                } else if (sales <= 1000) {
                    calculatedCommision = sales * 0.08
                } else if (sales <= 10000) {
                    calculatedCommision = sales * 0.12
                } else {
                    calculatedCommision = sales * 0.145
                }
                break;
            default:
                isError = true;
                break;
        }

        if (isError) {
            console.log("error")
        } else {
            console.log(calculatedCommision.toFixed(2));
        }
    }
}

function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let priceForApartment = 0;
    let priceForStudio = 0;

    if (month == "May" || month == "October") {
        priceForStudio = 50;
        priceForApartment = 65;
   
        if (nights > 14) {
            priceForStudio *= 0.70;
            priceForApartment *= 0.90;
        }else if (nights > 7) {
            priceForStudio *= 0.95;
        }
    } else if (month == "June" || month == "September") {
        priceForStudio = 75.20;
        priceForApartment = 68.70;

        if (nights > 14) {
            priceForStudio *= 0.80;
            priceForApartment *= 0.90;
        }
    } else if (month == "July" || month == "August") {
        priceForStudio = 76;
        priceForApartment = 77;

        if (nights > 14) {
            priceForApartment *= 0.90;
        }
    }
    console.log(`Apartment: ${(priceForApartment * nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceForStudio * nights).toFixed(2)} lv.`);
}

function onTimeForExam(input) {
    let hoursExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hoursArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let timeExamInMin = hoursExam * 60 + minExam;
    let timeArriveInMin = hoursArrive * 60 + minArrive;
    if (timeExamInMin < timeArriveInMin) {
        console.log("Late");
        let diff = timeArriveInMin - timeExamInMin;
        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else {
            let h = Math.floor(diff / 60);
            let m = diff % 60;
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        }
    } else if (timeArriveInMin === timeExamInMin || timeExamInMin - timeArriveInMin <= 30) {
        console.log("On time");
        if (timeExamInMin - timeArriveInMin != 0) {
            let diff = timeExamInMin - timeArriveInMin;
            console.log(`${diff} minutes before the start`);
        }
    } else {
        console.log("Early");
        let diff = timeExamInMin - timeArriveInMin;
        if (diff < 60) {
            console.log(`${diff} minutes before the start`);
        } else {
            let h = Math.floor(diff / 60);
            let m = diff % 60;
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        }
    }
}

function sumOfNumers(input) {
    let firstNum = Number(input[0]);
    let index = 1;
    let sum = 0;
    
    while (sum < firstNum) {
        let number = Number(input[index]);
        sum += number;
        index++;        
    }
    console.log(sum);
}

function exam(input) {
    let numberGoodGrade = 0;
    let numberBadGrade = 0;
    let sumGrade = 0;
    let lastTask = "";
    let index = 1;
    let indexNum = 2;
    let isPoor = false;

    while (numberBadGrade < input[0]) {
        let currentTask = input[index];
        let currentGrade = Number(input[index+1]);
        if (input[index] == "Enough") {
            console.log(`Average score: ${(sumGrade / (numberBadGrade + numberGoodGrade)).toFixed(2)}`);
            console.log(`Number of problems: ${numberGoodGrade + numberBadGrade}`);
            console.log(`Last problem: ${lastTask}`);
            isPoor = true;
            break;
        }
        sumGrade += currentGrade
        lastTask = currentTask;

        index += 2;
        //indexNum += 2;

        if (currentGrade <= 4) {
            numberBadGrade++;
        } else {
            numberGoodGrade++;
        }


    }
    if (!isPoor) {
        console.log(`You need a break, ${numberBadGrade} poor grades.`);
    }
}

function vacation(input) {
    let index = 0
    let needMoney = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let counter = 0;
    let dayCounter = 0;

    while (money < needMoney) {
        let action = input[index];
        index++;
        dayCounter++;
        let tmpMoney = Number(input[index]);
        index++;

        if (action === "save") {
            money += tmpMoney;
            counter = 0;
        } else {
            money -= tmpMoney;
            if(money < 0){
                money = 0;
            }
            counter++;
        }
        if (counter === 5) {
            console.log(`You can't save the money.`);
            console.log(`${dayCounter}`);
            break;
        }
    }
    if(money >= needMoney){
        console.log(`You saved the money for ${dayCounter} days.`);
    }

}