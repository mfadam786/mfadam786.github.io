$(document).ready(function() {
    
    var path = "/assets/txt/about.txt"
    var firstDay = new Date("07/20/2020");
    var today = new Date();
    var lastDay = new Date("11/20/2020");
        
    var totalDaysLeft = lastDay.getTime() - firstDay.getTime()
    var daysLeft = lastDay.getTime() - today.getTime()
    
    var diff1 = totalDaysLeft / (1000 * 3600 * 24);
    var diff2 = daysLeft / (1000 * 3600 * 24);
    
    var diff = diff1 - diff2

    if (diff <= 100) {
        $('#progress-bar').css({
            width: `${diff.toFixed(0)}%`
        })

        $('#progress-bar').html(`Course Completion: ${diff.toFixed(0)}%`)
    }
    else {
        $('#progress-bar').css({
            width: `100%`
        })

        $('#progress-bar').html('Course Completion: 100%')
    }

    fetch(path)
    .then(res => res.text())
    .then(data => $("#aboutContent").html(data))
    .catch(err => console.log(err))

    var conclusion = "/assets/txt/conclusion.txt"

    fetch(conclusion)
    .then(res => res.text())
    .then(data => $("#conclusionContent").html(data))
    .catch(err => console.log(err))

    $("").click()
})