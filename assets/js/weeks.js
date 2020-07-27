$(document).ready(function() {
    
    var index = setIndex(index)

    console.log("Index: " + index)

    fetch('/assets/json/portfolio.json')
    .then(res => res.json())
    .then(data => 
        {
            data.forEach(d => 
                {
                const { id, title, path } = d
                console.log(`ID : ${id}`)
                console.log(`Title : ${title}`)
                console.log(`Path : ${path}`)
            })

        $("#titleOne").html(data[index].title)
        $("#titleTwo").html(data[index+1].title)
        
        loadTxt(data[index].path)
        loadTxt(data[index+1].path)
    })
    .catch(err => console.log(err))
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

function setIndex(index) {

    let page = document.URL.substr(document.URL.length-10,5)

    switch(page) {

        case "week1":
            index=0
            break;

        case "week2":
            index=2
            break;

        case "week3":
            index=4
            break;
        
        case "week4":
            index=6
            break;

        case "week5":
            index=8
            break;

        case "week6":
            index=10
            break;

        case "week7":
            index=12
            break;

        case "week8":
            index=14
            break;

        case "week9":
            index=16
            break;
    }

    return index
}