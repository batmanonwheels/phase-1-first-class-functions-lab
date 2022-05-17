const returnFirstTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
    const mult = function(fare) {
        return fare * x
    }
    return mult;
}

function fareDoubler(y) {
    const double = createFareMultiplier(2)(y)
    return double;
}

function fareTripler(y) {
    const triple = createFareMultiplier(3)(y)
    return triple;
}

function selectDifferentDrivers(arrayOfDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'], drivers = returnFirstTwoDrivers()) {
    return drivers(arrayOfDrivers);
}
