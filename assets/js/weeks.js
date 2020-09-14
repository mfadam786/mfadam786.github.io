$(document).ready(function() {
    
    let page = document.URL.substr(document.URL.length-11,6)

    var index = setIndex(page, index)

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
        loadTxt(data[index].path, 0)

        $("#titleTwo").html(data[index+1].title)
        loadTxt(data[index+1].path, 1)

        if (page.substr(page.length-1, 1) < 3 || page.substr(page.length-1, 1) % 2 == 0) {
            $("#titleThree").html(data[index+2].title)
            loadTxt(data[index+2].path, 2)
        }
    })
    .catch(err => console.log(err))
})

function loadTxt(path, index)
{
    fetch(path)
    .then(res => res.text())
    .then(data => {
        
        if (index == 0) {
            $("#contentOne").html(data)
        }
        else if (index == 1){
            $("#contentTwo").html(data)
        }
        else {
            $("#contentThree").html(data)
        }
    })
    .catch(err => console.log(err))
}

function setIndex(page, index) {

    switch(page) {

        case "week01":
            index=0
            break;

        case "week02":
            index=3
            break;

        case "week03":
            index=6
            break;
        
        case "week04":
            index=8
            break;

        case "week05":
            index=11
            break;

        case "week06":
            index=13
            break;

        case "week07":
            index=16
            break;

        case "week08":
            index=18
            break;

        case "week09":
            index=21
            break;
            
        case "week10":
            index=23
            break;
            
        case "week11":
            index=26
            break;
            
        case "week12":
            index=28
            break;
            
        case "week13":
            index=31
            break;
            
        case "week14":
            index=33
            break;
            
        case "week15":
            index=36
            break;
            
        case "week16":
            index=38
            break;
    }

    return index
}