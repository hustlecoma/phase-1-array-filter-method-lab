// Code your solution here

function findMatching(list, name) {
    return list.filter(function(driverName){
        return driverName.toLowerCase() == name.toLowerCase();
    });
}



function fuzzyMatch(list, name) {
    let nameLength = name.length;
    return list.filter(function(driverName){
        return driverName.slice(0, nameLength) === name;
    });
}



function matchName(list, name) {
    return list.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}