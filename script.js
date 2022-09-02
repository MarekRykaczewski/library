let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.toggleRead = function () {
    if (this.read === true) {
        this.read = false
    } else {
        this.read = true
    }
}
// FOR TESTING
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 265, false)
const theTest2 = new Book("The test2", "J.R.R Tolkien", 215, true)
const theTest3 = new Book("The test3", "J.R.R Tolkien", 235, false)
const theTest4 = new Book("The test4", "J.R.R Tolkien", 235, false)
const theTest5 = new Book("The test5", "J.R.R Tolkien", 235, false)
const theTest6 = new Book("The test6", "J.R.R Tolkien", 235, false)
myLibrary.push(theHobbit)
myLibrary.push(theTest2)
myLibrary.push(theTest3)
myLibrary.push(theTest4)
myLibrary.push(theTest5)
myLibrary.push(theTest6)

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

function displayBooks() {
    const shelf = document.getElementById("table-content")

    myLibrary.forEach((book, i) => {
        book.id = i + 1;
    })

    for (let i = 0; i < myLibrary.length; i++) {
        const bookContainer = document.createElement("tr")
        bookContainer.classList.add("book-container")
        shelf.appendChild(bookContainer)

        const newBookTitle = document.createElement("td");
        const newBookTitleText = document.createTextNode(myLibrary[i].title)
        newBookTitle.appendChild(newBookTitleText)

        const newBookAuthor = document.createElement("td");
        const newBookAuthorText = document.createTextNode("By " + myLibrary[i].author)
        newBookAuthor.appendChild(newBookAuthorText)

        const newBookPages = document.createElement("td");
        const newBookPagesText = document.createTextNode(myLibrary[i].pages + " pages")
        newBookPages.appendChild(newBookPagesText)

        const newBookRead = document.createElement("td");
        const newBookReadText = document.createTextNode(myLibrary[i].read)
        const newToggleStatusButton = document.createElement("button")
        newToggleStatusButton.addEventListener('click', toggleReadStatus)
        newToggleStatusButton.classList.add("status-button")

        newToggleStatusButton.appendChild(newBookReadText)

        if (newToggleStatusButton.innerHTML === 'true') {
            newToggleStatusButton.classList.add("active-button")
        } else {
            newToggleStatusButton.classList.add("inactive-button")
        }
        newBookRead.append(newToggleStatusButton)

        const newButtonCell = document.createElement("td");

        const newDeleteButton = document.createElement("button");
        newDeleteButton.setAttribute('id', myLibrary[i].id)
        const newDeleteButtonText = document.createTextNode("Delete")
        newDeleteButton.appendChild(newDeleteButtonText)
        newDeleteButton.classList.add("delete-button")
        newButtonCell.appendChild(newDeleteButton)

        newDeleteButton.addEventListener('click', deleteRow)

        bookContainer.appendChild(newBookTitle)
        bookContainer.appendChild(newBookAuthor)
        bookContainer.appendChild(newBookPages)
        bookContainer.appendChild(newBookRead)
        bookContainer.appendChild(newButtonCell)
    }
}

const deleteRow = function() {
    // console.log(this.id)
    myLibrary = myLibrary.filter(book => book.id != this.id);
    // console.log(myLibrary")
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
}

const toggleReadStatus = function() {
    if (this.innerHTML === 'false') {
        this.innerHTML = 'true'
        this.classList.add("active-button")
        this.classList.remove("inactive-button")
    } else {
        this.innerHTML = 'false'
        this.classList.remove("active-button")
        this.classList.add("inactive-button")
    }

}

function clearShelf() {
    const shelf = document.getElementById("table-content")
    while (shelf.firstChild) {
        shelf.removeChild(shelf.lastChild)
    }
}

const addButton = document.getElementById("add-book")

addButton.onclick = function() {
    let bookInput = document.getElementById("name-input").value
    let authorInput = document.getElementById("author-input").value
    let pagesInput = document.getElementById("pages-input").value
    let statusInput = document.getElementById("status-input").value
    addBookToLibrary(bookInput, authorInput, pagesInput, statusInput)
    clearShelf()
    displayBooks()
}

displayBooks()