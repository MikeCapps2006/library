function inputForm(){
    let el = document.createElement('form');
    el.action = '#';
    el.method = 'POST';

    let h2 = document.createElement('h2');
    h2.innerHTML = 'Add Book to Library';
    el.appendChild(h2);

    let input = document.createElement('input');
    input.id = 'title';
    input.placeholder = 'Title';
    input.type = 'text';
    el.appendChild(input);

    input = document.createElement('input');
    input.id = 'author';
    input.placeholder = 'Author';
    input.type = 'text';
    el.appendChild(input);

    input = document.createElement('input');
    input.id = 'pages';
    input.placeholder = 'Pages';
    input.type = 'text';
    el.appendChild(input);

    let div = document.createElement('div');
    div.className = 'checkbox';

    input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'chkRead';
    input.id = 'chkRead';
    div.appendChild(input);

    input = document.createElement('label');
    input.for = 'chkRead';
    input.innerText = 'Have you read this?';
    div.appendChild(input);

    el.appendChild(div);
    
    let btnSubmit = document.createElement('button');
    btnSubmit.type = 'submit';
    btnSubmit.innerHTML = 'Add Book';
    btnSubmit.id = 'btnSubmit';

    el.appendChild(btnSubmit);

    return el;


}

export default inputForm;