let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 265, false)
const theTest2= new Book("The test2", "J.R.R Tolkien", 215, true)
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
        newBookRead.appendChild(newBookReadText)

        bookContainer.appendChild(newBookTitle)
        bookContainer.appendChild(newBookAuthor)
        bookContainer.appendChild(newBookPages)
        bookContainer.appendChild(newBookRead)
    }
}

displayBooks()