$.getJSON('/data', function(user) {
    if (user.userData.date.length > 0)
    {
        var curresntUserCalories = user.userData.caloriesIn[user.userData.caloriesOut.length -1 ] - user.userData.caloriesOut[user.userData.caloriesOut.length -1];
        document.getElementById('calorie-card').innerHTML = curresntUserCalories;
        var curresntUserWeigth = user.userData.weight[user.userData.weight.length -1];
        curresntUserWeigth = curresntUserWeigth + " lbs";
        document.getElementById('weight-card').innerHTML = curresntUserWeigth;
        var currentUserMinutes = user.userData.minutes[user.userData.minutes.length -1];
        currentUserMinutes = currentUserMinutes + " Minutes"
        document.getElementById('activity-card').innerHTML = currentUserMinutes;

    }



});  