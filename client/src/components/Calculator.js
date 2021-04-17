export function evaluatePrice(tourPrice, startDateParam, endDateParam, numberOfPeople = 1) {
    let countNights = evaluateNights(startDateParam, endDateParam);
    // console.log(tourPrice);
    // console.log(countNights);
    // console.log(numberOfPeople)
    let total = tourPrice * countNights * numberOfPeople;
    // console.log(total)
    return total;
}

export function evaluateNights(startDateParam, endDateParam) {
    let startDate = Date.parse(startDateParam);
    let endDate =  Date.parse(endDateParam);
    // console.log(startDate)
    // console.log(endDate)
    let countNights = 0;
    for (let i = startDate; i <= endDate; i = i + 24 * 60 * 60 * 1000) {
        ++countNights;
    }
    // console.log()
    // console.log(countNights)
    // console.log()
    if (countNights === 0) return 1;
    else if (countNights === 1) return 1;
    else return countNights - 1;
}