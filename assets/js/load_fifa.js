// Gets the table by it's id
let outputDisplay = document.getElementById('itemsTable')

// Gets the respective clicked element by it's id to know what data to display
let FIFA = document.getElementById('FIFA')

// Creates a request to open the json file
const xhr = new XMLHttpRequest()

// Gets the json file
xhr.open('GET', './assets/json/fifa.json', true)

// Runs when the page is loaded
xhr.onload = () => {
    // If the file can be found, i.e it has a status of 200 it continues to execute the code within the if loop
    if (xhr.status === 200)
    {
        const items = JSON.parse(xhr.responseText)
        
        let trow = [document.createElement('tr'), document.createElement('tr'), document.createElement('tr'), document.createElement('tr'), document.createElement('tr')]
               
        // for loop which runs for the length of items within my json file
        for (let i = 0; i < items.length; i++)
        {
            // Creates an array of table data tags so they can be easily referenced when adding data to a table
            let display = [document.createElement('td') , document.createElement('td') , document.createElement('td') , document.createElement('td') , document.createElement('td')]
            
            // Creates an array of 'i' tags so they can be easily referenced when creating the stars
            let stars = [document.createElement('i'),document.createElement('i'),document.createElement('i'),document.createElement('i'),document.createElement('i')]

            // Creates an img tag to attach the json files' image to the element
            let img = document.createElement('img')

            // Appends the image from the json file to the img tag which was created and specifies its dimensions and id (the styling)
            img.src = items[i].image
            img.style.width = 300
            img.style.height = 300
            img.id = 'itemImage';

            // Appends the above image to the first table data tag in the array
            display[0].append(img)
            display[0].id = 'eachItem';

            // Adds the item's date information from the json file to the next table data element in the array
            display[1].innerHTML = `${items[i].date}`
            display[1].id = 'eachItem';
            
            // loops through the array within the key value pair in the json file and appends the information to the next table data element in the array
            for (var x = 0; x < items[i].console.length; x++)
            {
                p = document.createElement('p')
                p.innerHTML = `${items[i].console[x]}`
                display[2].append(p)
                display[2].id = 'eachItem'
            }

            // Adds the item in json file's price information to the next table data element in the array
            display[3].innerHTML = `${items[i].price}`
            display[3].id = 'eachItem';

            // Gives each star in the array an id to access it easily and a class name to specify that it should be hollow
            stars[0].className = 'far fa-star'
            stars[0].id = `star${5}`
            
            stars[1].className = 'far fa-star'
            stars[1].id = `star${4}`
            
            stars[2].className = 'far fa-star'
            stars[2].id = `star${3}`
            
            stars[3].className = 'far fa-star'
            stars[3].id = `star${2}`
            
            stars[4].className = 'far fa-star'
            stars[4].id = `star${1}`
            
            display[4].appendChild(stars[4])
            display[4].id = 'eachItem'

            // Appends each star as a child to the previous one
            stars[1].appendChild(stars[0])
            stars[2].appendChild(stars[1])
            stars[3].appendChild(stars[2])
            stars[4].appendChild(stars[3])
            
            // Appends all the table data elements to the table row
            display.forEach(d => {
    
                trow[i].append(d)
            })

            // Appends the row of data from the json file to the table row 
            outputDisplay.append(trow[i])

            // Adds a listener to each of the stars in the rating system
            stars[0].addEventListener('click', starClick)
            stars[1].addEventListener('click', starClick)
            stars[2].addEventListener('click', starClick)
            stars[3].addEventListener('click', starClick)
            stars[4].addEventListener('click', starClick)
        }            
    }
    // If the file cannot be found, it has a status of 404 and displays an alert showing that the file can't be found
    else if (xhr.status === 404)
    {
        alert('File not found 404')
    }
}

// Sends the information to the page
xhr.send()


const starClick = a => {

    // Checks whether 5 stars have been clicked
    if (a.target.id == `star5`)
    {
        a.target.className = 'fas fa-star'

        a.target.parentElement.parentElement.parentElement.parentElement.className = 'fas fa-star'
        a.target.parentElement.parentElement.parentElement.className = 'fas fa-star'
        a.target.parentElement.parentElement.className = 'fas fa-star'
        a.target.parentElement.className = 'fas fa-star'
    }

    // Checks whether 4 stars have been clicked
    if (a.target.id == `star4`)
    {
        a.target.parentElement.parentElement.parentElement.className = 'fas fa-star'
        a.target.parentElement.parentElement.className = 'fas fa-star'
        a.target.parentElement.className = 'fas fa-star'
        a.target.className = 'fas fa-star'
        a.target.children[0].className = 'far fa-star'
    }

    // Checks whether 3 stars have been clicked
    if (a.target.id == `star3`)
    {
        a.target.parentElement.parentElement.className = 'fas fa-star'
        a.target.parentElement.className = 'fas fa-star'
        a.target.className = 'fas fa-star'
        a.target.children[0].className = 'far fa-star'
        a.target.children[0].children[0].className = 'far fa-star'
    }

    // Checks whether 2 stars have been clicked
    if (a.target.id == `star2`)
    { 
        a.target.parentElement.className = 'fas fa-star'
        a.target.className = 'fas fa-star'
        a.target.children[0].className = 'far fa-star'
        a.target.children[0].children[0].className = 'far fa-star'
        a.target.children[0].children[0].children[0].className = 'far fa-star'
    }

    // Checks whether 1 star has been clicked
    if (a.target.id == `star1`)
    {
        a.target.className = 'fas fa-star'
        a.target.children[0].className = 'far fa-star'
        a.target.children[0].children[0].className = 'far fa-star'
        a.target.children[0].children[0].children[0].className = 'far fa-star'
        a.target.children[0].children[0].children[0].children[0].className = 'far fa-star'
    }
}