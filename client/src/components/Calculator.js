export function evaluatePrice(tourPrice, startDateParam, endDateParam, accommPrice, numberOfPeople = 1) {
    let countNights = evaluateNights(startDateParam, endDateParam);
    let total = tourPrice * countNights * numberOfPeople + accommPrice * countNights;
    return total;
}

export function evaluateNights(startDateParam, endDateParam) {

    let startDate = Date.parse(startDateParam);
    let endDate =  Date.parse(endDateParam);
    let countNights = 0;

    for (let i = startDate; i <= endDate; i = i + 24 * 60 * 60 * 1000) {
        ++countNights;
    }
    
    if (countNights === 0) return 1;
    else if (countNights === 1) return 1;
    else return countNights - 1;
}