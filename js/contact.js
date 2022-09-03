const regForm = document.getElementById("form")
const submitBtn = document.getElementById("submitButton")

const handleError = (msg) => {
    console.log(msg)
}

const handleNameInput = (value) => {
    if (value.length < 3)
        handleError('Name must be greater than three characters')
}

const handleEmailInput = (value) => {
    if (value.length < 3)
        handleError('Email must be greater than three characters')
}

const handleSubjectInput = (value) => {
    if (value.length < 3)
        handleError('Subject must be greater than three characters')
}

const handleMessageInput = (value) => {
    if (value.length < 3)
        handleError('Message must be greater than three characters')
}

const handleInput = (e) => {
    switch (e.target.name) {
        case 'name':
            handleNameInput(e.target.value)
            break

        case 'email':
            handleEmailInput(e.target.value)
            break

        case 'subject':
            handleSubjectInput(e.target.value)
            break

        case 'message':
            handleMessageInput(e.target.value)
            break
    }
}

const handleSubmit = (e) => {
    e.preventDefault()

    console.log(nameInput.value)
    console.log(emailInput.value)
    console.log(subjectInput.value)
    console.log(messageInput.value)
}

submitBtn.addEventListener('click', handleSubmit)
regForm.addEventListener('input', handleInput)
