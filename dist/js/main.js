/*
let books = [
  {
    title: 'book1',
    author: 'the author',
    pages: '202',
    haveRead: true,
  }
];


document.addEventListener('DOMContentLoaded', function(event) {

  let bookList = document.querySelector('.js-book-list');
  let template = document.querySelector('.js_book-card');

  let newCard = template.content.cloneNode(true);
  console.log({newCard});


  bookList.appendChild(newCard);
})
*/


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
