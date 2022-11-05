function CreateDiv(book, i){
    let title = book.title;
    let author = book.author;
    let pages = book.pages;
    let readOrNot = book.readOrNot;

    let newBook = document.createElement('div');
    newBook.className = 'card';
    let bookInfo = document.createElement('div');
    bookInfo.className = 'card-info';
    
    let para = document.createElement('p');
    para.innerHTML = `"${title}"`;
    para.className = 'title';
    bookInfo.appendChild(para);

    para = document.createElement('p');
    para.innerHTML = author;
    para.className = 'author';
    bookInfo.appendChild(para);

    para = document.createElement('p');
    para.innerHTML = `${pages} pages`;
    para.className = 'pages';
    bookInfo.appendChild(para);

    para = document.createElement('button');
    para.innerHTML = 'Read';
    para.className = 'readOrNot';
    bookInfo.appendChild(para);

    para = document.createElement('button');
    para.className = 'btnDeleteButton';
    para.innerHTML = 'Remove Book';
    bookInfo.appendChild(para);
    
    newBook.appendChild(bookInfo);
    let attTitle = document.createAttribute('data-title');
    attTitle.value = title;
    newBook.setAttributeNode(attTitle);
    return newBook;
}



export default CreateDiv;
