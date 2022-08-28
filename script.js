let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 265, false)
myLibrary.push(theHobbit)

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
}

function displayBooks() {
    const shelf = document.getElementById("shelf")
    const bookContainer = document.createElement("div")
    bookContainer.classList.add("book-container")
    for (let i = 0; i < myLibrary.length; i++) {
        shelf.appendChild(bookContainer)

        const newBookTitle = document.createElement("p");
        const newBookTitleText = document.createTextNode(myLibrary[i].title)
        newBookTitle.appendChild(newBookTitleText)

        const newBookAuthor = document.createElement("p");
        const newBookAuthorText = document.createTextNode(myLibrary[i].author)
        newBookAuthor.appendChild(newBookAuthorText)

        const newBookPages = document.createElement("p");
        const newBookPagesText = document.createTextNode(myLibrary[i].pages)
        newBookPages.appendChild(newBookPagesText)

        const newBookRead = document.createElement("p");
        const newBookReadText = document.createTextNode(myLibrary[i].read)
        newBookRead.appendChild(newBookReadText)

        bookContainer.appendChild(newBookTitle)
        bookContainer.appendChild(newBookAuthor)
        bookContainer.appendChild(newBookPages)
        bookContainer.appendChild(newBookRead)
    }
}

displayBooks()