const bookHolder = document.querySelector('#bookshelf');
const addBook = document.querySelector('#popup');
const submitbtn = document.querySelector('#submitBtn');
//create elements
// const bookDiv = document.createElement("div");
// bookDiv.className = "bookCard";
// const title = document.createElement("div");
// title.className = 'title';
// const author = document.createElement("div");
// author.className = 'author';
// const pageCount = document.createElement("div");
// pageCount.className = 'pageCount';
// const read = document.createElement("button");
// read.className = 'read';
// const remove = document.createElement("button");
// remove.className = 'remove';

let myLibrary = [];
//book constructor
function book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
    // console.log(book)
    //connect to addToLibrary function
}

function addToLibrary(book) {
    myLibrary.push(book);
}

const Misery = new book('Misery', 'Stephen King', '520', 'finished reading');
const Fisherman = new book('The fisherman', 'John Langan', '500', 'finished reading');
const Indians = new book('The only good Indians', 'Stephen Graham Jones', '400', 'finished reading');
const Tommyknockers = new book('Tommyknockers', 'Stephen King', '700', 'finished reading');

// add button and form to fill out book constructor
// push to myLibrary

function displayLibrary(array) {
    // loop through myLibrary array and displays on page
    for (let i = 0; i < array.length; i++) {
        //create and append elements
        const bookDiv = document.createElement("div");
        bookDiv.className = "bookCard";
        bookHolder.appendChild(bookDiv);
        const title = document.createElement("div");
        title.className = 'title';
        bookDiv.appendChild(title);
        title.textContent = `Title: ${array[i].title}`;
        const author = document.createElement("div");
        author.className = 'author';
        bookDiv.appendChild(author);
        author.textContent = `Author: ${array[i].author}`;
        const pageCount = document.createElement("div");
        pageCount.className = 'pageCount';
        bookDiv.appendChild(pageCount);
        pageCount.textContent = `Page Count: ${array[i].pages}`;
        const read = document.createElement("button");
        read.className = 'read';
        bookDiv.appendChild(read);
        read.textContent = 'Read?';
        const remove = document.createElement("button");
        remove.className = 'remove';
        bookDiv.appendChild(remove);
        remove.textContent = 'Remove';
    }
}
//make form a pop up box
function openForm() {
    const form = document.querySelector('#form')
    form.style.display = 'block';
}
//send info to book constructor
function closeForm() {
    const form = document.querySelector('#form')
    let title = document.querySelector('#formTitle').value;
    let author = document.querySelector('#formAuthor').value;
    let pages = document.querySelector('#formPage').value;
    let read = document.querySelector('#formRead').value;
    let newBook = new book(title, author, pages, read);
    debugger
    console.log(newBook);
    form.style.display = 'block';
    //form grabs data but disapears????
}

addBook.addEventListener('click', openForm);
submitbtn.addEventListener('click', closeForm);