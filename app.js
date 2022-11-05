import Book from './books.js';
import CreateDiv from './createDiv.js';
import inputForm from './inputForm.js';

let books = [];
const addButton = document.getElementById('addButton');
const bookSection = document.getElementById('bookSection');
const addBookSection = document.getElementById('addBookSection');
const screen = document.getElementById('screen');
const bookForm = document.getElementById('form');
const totalPages = document.getElementById('totalPages');
const bookCount = document.getElementById('bookCount');
const completedBooks = document.getElementById('completedBooks');

let TheHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 295, true);
let HarryPotter = new Book('Harry Potter', 'J. K. Rowling', 550, true);
let TheRock = new Book('The Rock', 'Dwayne Johnson', 449, false);

function addBooksToPage(books){
    for (let i = 0; i < books.length; i++){
        addSingleBookToPage(books[i], i, books[i].title);
    }
    deleteButtonListener();
    updateStats();
}

function addSingleBookToPage(book, i = books.length - 1, title){
    let newDiv = CreateDiv(book, i, title);
    newDiv.id = i;
    newDiv.style.display = 'flex';
    bookSection.insertBefore(newDiv, addBookSection);
    deleteButtonListener();
}

function deleteButtonListener(){
    let btnDeletes = document.getElementsByClassName('btnDeleteButton');
    for (let i = 0; i<btnDeletes.length; i++){
        btnDeletes[i].addEventListener('click', deleteBook);
    }
}

function deleteBook(e){
    e.path[2].remove();

    for(let i = 0; i < books.length; i++){ 
        if(books[i].title === e.path[2].dataset.title){ 
            books.splice(i, 1); 
        }
    }
    updateStats();
}


books.push(TheHobbit);
books.push(HarryPotter);
books.push(TheRock);
books.push(TheHobbit);
books.push(HarryPotter);
books.push(TheRock);
books.push(TheHobbit);
books.push(HarryPotter);
books.push(TheRock);
books.push(TheHobbit);
books.push(HarryPotter);
books.push(TheRock);

addBooksToPage(books);

let newForm = new inputForm;
let form = document.getElementById('form');
form.appendChild(newForm);

let toggleForm = (event) => {
    event.preventDefault();
    if (screen.style.display == 'block'){
        screen.style.display = 'none';
        bookForm.style.display = 'none'
    } else {
        screen.style.display = 'block';
        bookForm.style.display = 'flex';
        form.addEventListener('submit', toggleForm, false);
    }
    return false;
}

function updateStats(){
    totalPages.innerText = addPages();
    completedBooks.innerText = addReadBooks();
    bookCount.innerText = books.length;
}


function addPages(){
    let sum = 0;
    for(let i = 0; i < books.length; i++){
        console.log(i);
        sum += books[i].pages;
    }
    return sum;
}

function addReadBooks(){
    let sum = 0;
    for(let i = 0; i < books.length; i++){
        sum += books[i].readOrNot ? 1 : 0;
    }
    return sum;
}

btnSubmit.addEventListener('click', collectFormData);
function collectFormData(){
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let readOrNot = document.getElementById('chkRead');
    let newBook = new Book(title.value, author.value, pages.value, readOrNot.checked);
    books.push(newBook);
    addSingleBookToPage(newBook);
    title.value = '';
    author.value = '';
    pages.value = '';
    readOrNot.checked = false;
    updateStats();
}

addButton.addEventListener('click',toggleForm);

