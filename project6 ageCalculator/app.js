function age(){
    // It retrieves the day, month, and year values from the HTML input fields and assigns them to variables d1, m1, and y1, respectively.
    let d1 = document.getElementById('date').value;
    let m1 = document.getElementById('month').value;
    let y1 = document.getElementById('year').value;

    let date = new Date(); //It creates a new Date object named date to get the current date.

    /*It retrieves the day, month, and year from the date object 
    and assigns them to variables d2, m2, and y2, respectively. */
    let d2 = date.getDate(); 
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();

    let month = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31]; //It defines an array named month that represents the number of days in each month.
    
    /*It compares the input day (d1) with the current day (d2). If the input day is greater than the current day, 
    it means the birthday has not occurred yet in the current month. In this case, 
    it adjusts the d2 value by adding the number of days in the previous month (month[m2 - 1]) 
    and decreases the m2 value by 1.*/
    if(d1> d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }

   /* It compares the input month (m1) with the current month (m2). If the input month is greater than the current month, 
    it means the birthday has not occurred yet in the current year. In this case, it adjusts the m2 value by adding 12 months and 
    decreases the y2 value by 1.*/

    if(m1> m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    /*It calculates the age by subtracting the input day (d1) from the adjusted current day (d2), 
    the input month (m1) from the adjusted current month (m2), and the input year (y1) from the current year (y2), 
    and assigns the results to variables d, m, and y, respectively.*/

    let d =  d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;
    
    //It updates the HTML content of an element with the id "age" to display the calculated age using the innerHTML property.
    document.getElementById('age').innerHTML = 'Your Age is ' +y+ ' Years ' +m+ ' Month ' +d+ ' Days' ;     
}

