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
