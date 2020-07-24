$(document).ready(function() {
    var index = 0

    if ((localStorage.getItem("index")) != null)
        index = localStorage.getItem("index")
    else {
        localStorage.setItem("index",0)
    }

    fetch('/assets/json/portfolio.json')
    .then(res => res.json())
    .then(data => 
        {
            data.forEach(d => 
                {
                const { id, title, content } = d
                console.log(`ID : ${id}`)
                console.log(`Title : ${title}`)
                console.log(`Content : ${content}`)
            })

        $("#titleOne").html(data[0].title)
        $("#titleTwo").html(data[1].title)
        
        loadTxt(data[0].content)
        loadTxt(data[1].content)
        
    })
    .catch(err => console.log(err))

    checkDate(index)
})

function loadTxt(path)
{
    fetch(path)
    .then(res => res.text())
    .then(data => {

        if (path.substr(16,2)%2 == 0) {
            $("#contentOne").html(data)
        }
        else {
            $("#contentTwo").html(data)
        }        
    })
    .catch(err => console.log(err))
}

function checkDate(index) {

    var today = new Date();
    today.setDate(today.getDate()+3)

    if (today.toString().substr(0,3) === "Mon") {
        index++
    }

    console.log(index)
}