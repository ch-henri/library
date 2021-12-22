
let library = [
  {
    title: 'book1',
    author: 'the author',
    Pages: 200,
    haveRead: true,
    Edition: 'Flammarion',
    Published: '03 aout 2020',
  }
];

class Book {
  constructor(title, author, publisher, pages, released) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this. pages= pages;
    this. released= released;
  }
}

const btnShowForm = document.querySelector('#btnShowForm');
const formNewBook = document.querySelector('#formNewBook');
const formAddBook = document.querySelector('#formAddBook');

let bookList = document.querySelector('.js-book-list');
let template = document.querySelector('.js_book-card');
let newBook = {};



//document.addEventListener('DOMContentLoaded', function(event) { })

// Append book to DOM
function appendBook(book) {
    template.content.querySelector('#title').textContent = book.title;
    template.content.querySelector('#author').textContent = book.author;
    template.content.querySelector('#publisher').textContent = book.publisher;
    template.content.querySelector('#pages').textContent = book.pages;
    template.content.querySelector('#released').textContent = book.released;

    let newCard = template.content.cloneNode(true);
    bookList.appendChild(newCard);
}

// Create object with form inputs
function addToLibrary(e) {
  e.preventDefault();
  let title = document.querySelector('#inputTitle').value;
  let author = document.querySelector('#inputAuthor').value;
  let publisher = document.querySelector('#inputPublisher').value;
  let pages = document.querySelector('#inputPages').value;
  let released = document.querySelector('#inputReleased').value;

  let newBook = new Book(title, author, publisher, pages, released);
  appendBook(newBook)
  library.push(newBook)


}

// Create préeyisting book
library.forEach(book => { appendBook(book) })


btnShowForm.addEventListener('click', () => {
  formAddBook.classList.remove('hidden');
})

formNewBook.addEventListener('submit', addToLibrary )








/*
function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return title + author + pages + read
  }
}

let myBook = new Book('Mytitle', 'Me', 100, true);
// console.log(myBook.info());


let sherlock = {
  address: { city: 'London' },
}

sherlock.test = sherlock.address;
sherlock.address.city = 'Paris'

console.log(sherlock.test);
*/
