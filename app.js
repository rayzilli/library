
let myLibrary = [];

function Book(title, author, pages, read) {
    //the constructor
    this.title = title 
    this.author = author
    this.pages = pages 
    this.read = read  
}

function addBookToLibrary(newBook) {
    const ul = document.createElement('ul');
    document.getElementById('container').appendChild(ul);
    const title = document.createElement('li');
    ul.appendChild(title).innerText = newBook.title;
    const author = document.createElement('li');
    ul.appendChild(author).innerText = newBook.author;
    myLibrary.push(newBook)
}



let newBook = new Book('Moby Dick', 'melville', 100, 'read');
addBookToLibrary(newBook)
 newBook = new Book('war and peace', 'tolstoy', 1000, 'read');
addBookToLibrary(newBook)
newBook = new Book('Demonic Ground', 'McKittrick', 100, 'read');
addBookToLibrary(newBook)



