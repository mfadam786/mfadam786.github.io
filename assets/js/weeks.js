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

    let page = document.URL.substr(document.URL.length-11,6)

    switch(page) {

        case "week01":
            index=0
            break;

        case "week02":
            index=2
            break;

        case "week03":
            index=4
            break;
        
        case "week04":
            index=6
            break;

        case "week05":
            index=8
            break;

        case "week06":
            index=10
            break;

        case "week07":
            index=12
            break;

        case "week08":
            index=14
            break;

        case "week09":
            index=16
            break;
    }

    return index
}