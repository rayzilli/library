
//initialize array that holds books - objects that end up here created by Book constructor
let myLibrary = [];

function Book(title, author, pages, read) {
    //the constructor
    this.title = title 
    this.author = author
    this.pages = pages 
    this.read = read  
}


//add new book to library - function is called to post books to webpage
function addBookToLibrary(newBook) {
    const ul = document.createElement('ul');
    document.getElementById('book-container').appendChild(ul);
    const title = document.createElement('li');
    ul.appendChild(title).innerText = newBook.title;
    const author = document.createElement('li');
    ul.appendChild(author).innerText = newBook.author;
    const pages = document.createElement('li');
    ul.appendChild(pages).innerText = newBook.pages;
    //add read book button that toggles 
    const readButton = document.createElement('button');
    readButton.className = 'read-button';
    readButton.setAttribute('data-read', newBook.read); // set initial read status
    readButton.innerText = newBook.read;
    ul.appendChild(readButton);
    //event handler to toggle read/not-read button
    readButton.addEventListener('click', e => {
        const readStatus = readButton.getAttribute('data-read');
        readButton.setAttribute('data-read', readStatus === 'read' ? 'not-read' : 'read');
        readButton.innerText = readStatus === 'read' ? 'not-read' : 'read';
        
    });

    //remove button 
    //get button element and store as remove - give it book title name and label remove
    const remove = document.createElement('button');
    remove.id = newBook.title;
    remove.innerText = 'remove';
    //add event listener to remove button pass book title to removeBook function
    remove.addEventListener('click', function() {
      removeBook(newBook.title);
      ul.remove();

    });
    ul.appendChild(remove);
}





// event listener for submit form - submit to array and update info to screen
const form = document.getElementById('submit-form');
form.addEventListener('submit', posting);
function posting(e){
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const pages = form.pages.value;
    const read = form.read.checked ? 'read' : 'not-read';
    // const read = form.read.checked;
    console.log(title, author, pages, read);
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
    form.reset();
    document.getElementById('book-container').innerText = ''; //clear book container
    for (book in myLibrary){
        addBookToLibrary(myLibrary[book]);
    }
    const buttonReturns = document.getElementById('add-book');
    buttonReturns.style.display = 'flex';
    const formDisappear = document.getElementById('submit-form');
    formDisappear.style.display = 'none'; 
}

// remove book from list
//iterate over children of ul and if id of button marches title then removeChild(book)
function removeBook(title) {
    myLibrary = myLibrary.filter(item =>item.title != title);
    const bookList = document.getElementById('book-container');
    for (let i = 0; i < bookList.children.length; i++) {
        const book = bookList.children[i];
        if (book.children[0].innerText === title) {
            bookList.removeChild(book);
            break;
        }
    }
}

//add books to myLibrary array
let newBook = new Book('Moby Dick', 'melville', 100, 'read');
myLibrary.push(newBook);
 newBook = new Book('war and peace', 'tolstoy', 1000, 'read');
 myLibrary.push(newBook);
newBook = new Book('Demonic Ground', 'McKittrick', 100, 'read');
myLibrary.push(newBook);



// display array that is populated with book from just above 
for (book in myLibrary){
    addBookToLibrary(myLibrary[book]);
}

const buttonAdd = document.getElementById('add-book');
buttonAdd.addEventListener('click', (e) =>{
    form.style.display = 'flex'
    buttonAdd.style.display = 'none';
});

const closeForm = document.getElementById('close-button');
closeForm.addEventListener('click',()=>{
    form.style.display = 'none';
    const buttonReturns = document.getElementById('add-book');
    buttonReturns.style.display = 'flex';
}
)

