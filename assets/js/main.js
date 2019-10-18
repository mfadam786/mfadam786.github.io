// Gets the submit button from the comment form by it's id
let submitBtn = document.getElementById('submit-btn')

const submitComment = () => {
        
    // Creates a variable with the current system time
    const dateTime = new Date()

    // Gets the values from the fields
    let fName = document.getElementById('name-comment').value
    let email = document.getElementById('email-comment').value
    let comment = document.getElementById('text-comment').value
    let modified = dateTime.getDate() + '/' + (dateTime.getMonth()+1) + '/' + dateTime.getFullYear() + ' at ' + dateTime.getHours() + ':' + dateTime.getMinutes()

    // Creates an array of new elements to easily reference and write to
    display = [document.createElement('h3'), document.createElement('h4'),document.createElement('h6')]
    
    // Creates a new tablerow element to append the comment to
    trow = document.createElement('tr')

    let div = document.createElement('div')
    div.id = 'row'

    // Makes sure the fields in the comment form are not empty
    if ((fName != '') && (email != '') && (comment != ''))
    {
        // Appends the information that the user has filled in to the elements in the array 
        display[0].innerHTML = `User: ${fName} - ${email}`
        display[0].id = 'name'

        display[1].innerHTML = `submitted: ${comment}`
        
        display[2].innerHTML = `on: ${modified}`
        display[2].id = 'modified'

        // Loops through each array item and appends it individually
        display.forEach(d => {
        
            trow.append(d)
            div.append(trow)
            document.getElementById('outputComment').append(div)
        })

        // Displays the blocks of comments when a comment has been submitted
        document.getElementById('outputComment').style.display = 'block'
        document.getElementById('commentHeading').style.display = 'block'

        // Channges the text color of even row items in the table
        let evenItems = document.querySelectorAll('#row:nth-child(even)')

        evenItems.forEach(x => {
        x.style.color = 'rgb(12,0,117)'
        })
    }
    // Displays an alert if all fields are not filled in
    else
    {
        alert('Please fill in all the respective fields below and try again.')
    }
}

if (submitBtn != null)
submitBtn.addEventListener('click', submitComment)

// Gets the contact button from the contact form by it's id
let contactBtn = document.getElementById('contact-btn')

const contactComment = () => {
    // Gets the values from the fields
    let fName = document.getElementById('first-name-contact').value
    let email = document.getElementById('email-contact').value
    let phone = document.getElementById('phone-contact').value

    // Makes sure the fields in the contact form are not empty
    if ((fName != '') && (email!= '') && (phone!= ''))
    {
        const output = `Thank you for your feedback ${fName}. We will be in touch shortly.`

        alert(output)
    }
    // Displays an alert if all fields are not filled in
    else
    {
        alert('Please fill in all the respective fields below and try again.')
    }
}

if (contactBtn != null)
contactBtn.addEventListener('click', contactComment)