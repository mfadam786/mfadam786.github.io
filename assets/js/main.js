$(document).ready(function() {
    
    var firstDay = new Date("07/20/2020");
    var today = new Date();
    var lastDay = new Date("11/22/2020");
        
    var totalDaysLeft = lastDay.getTime() - firstDay.getTime()
    var daysLeft = lastDay.getTime() - today.getTime()
    
    var diff1 = totalDaysLeft / (1000 * 3600 * 24);
    var diff2 = daysLeft / (1000 * 3600 * 24);
    
    var diff = diff1 - diff2

    if (diff <= 100) {
        $('#progress-bar').css({
            width: `${diff.toFixed(0)}%`
        })

        $('#progress-bar').html(`${diff.toFixed(0)}%`)
    }
})

const loadJSON = () => {
    fetch('person.json')
    .then(res => res.json())
    .then(data => 
        {
        data.forEach(d => 
            {
            const { id, firstName, lastName } = d
            console.log(`ID : ${id}`)
            console.log(`First Name : ${firstName}`)
            console.log(`Last Name : ${lastName}`)
        })
    })
    .catch(err => console.log(err))
}