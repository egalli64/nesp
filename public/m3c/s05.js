function indexToMonthName(index) {
    if (!Number.isInteger(index) || index < 1 || index > 12) {
        throw 'Invalid month number: ' + index;
    }

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[index - 1];
}

try {
    console.log('Month 1:', indexToMonthName(1));
    console.log('Month 12:', indexToMonthName(12));
    console.log('Month 0:', indexToMonthName(0));

    console.log('An exception ends the normal execution flow - this line should not be executed');
} catch (exc) {
    console.log(exc);
} finally {
    console.log('done');
}
