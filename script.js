let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkein", 265, false)
myLibrary.push(theHobbit)

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

function displayBooks() {
    const shelf = document.getElementById("shelf")
    for (let i = 0; i < myLibrary.length; i++) {
        const newBookTitle = document.createTextNode(myLibrary[i].title)
        const newBookAuthor = document.createTextNode(myLibrary[i].author)
        const newBookPages = document.createTextNode(myLibrary[i].pages)
        const newBookRead = document.createTextNode(myLibrary[i].read)
        shelf.appendChild(newBookTitle)
        shelf.appendChild(newBookAuthor)
        shelf.appendChild(newBookPages)
        shelf.appendChild(newBookRead)
    }
}