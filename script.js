const bookHolder = document.querySelector('#bookshelf');

//create elements
const bookDiv = document.createElement("div");
bookDiv.className = "bookCard";
// bookHolder.appendChild(bookDiv);

const title = document.createElement("div");
const author = document.createElement("div");
const pageCount = document.createElement("div");
const read = document.createElement("button");
const remove = document.createElement("button");

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
}

function addToLibrary(book) {
    myLibrary.push(book);
}

const Misery = new book('Misery', 'Stephen King', '520', 'finished reading');
const Fisherman = new book('The fisherman', 'John Langan', '500', 'finished reading');
const Indians = new book('The only good Indians', 'Stephen Graham Jones', '400', 'finished reading');
const Tommyknockers = new book('Tommyknockers', 'Stephen King', '700', 'finished reading');

function displayLibrary(array) {
    // loop through myLibrary array and displays on page
    for (let i = 0; i < array.length; i++) {
        //for every book, create a div element with bookcard class and append onto bookHolder div
        bookDiv;
        bookDiv.className = "bookcard";
        bookHolder.appendChild(bookDiv);
        console.log(Object.values(array[i]))//not appending??
        //then create a div for every value and append it to new bookcard div

        // use this.value for each value as .textcontent
    }
}

// create html element for each piece of info and bundle into function