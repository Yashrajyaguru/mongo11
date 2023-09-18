function DisplayCurrentDate()
{
    let current = new Date();
    let day = current.getDate(); //return day of month
    let month = current.getMonth() + 1; //return month
    let year = current.getFullYear(); //return year
    let today = day + "/" + month + "/" + year;
    console.log('Current date is ' + today);
}
DisplayCurrentDate(); //calling function