/*modal variables.*/
const modal = document.getElementsByClassName("modal")[0];
const btn = document.getElementById("test");
const span = document.getElementsByClassName("close")[0];




//btnRead


// when clicked, modal opens
btn.onclick = function () {
    modal.style.display = "block";
}

/*config the close button to close the modal*/
span.onclick = function () {
    modal.style.display = "none";
}

/*when the user clicks anywhere outside of the modal, close it*/
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





let myLibrary = [];

//título, autor, número de páginas e se foi lido ou não.


// função construtora de Book
function Book(title, autor, pages, read) {
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.read = read;
}

function render() {
    let libraryEl = document.getElementById('library');
    libraryEl.innerHTML = "";



    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML =
            `
            <div class="book-card">
            <div class="card-header">
            <span class="remove-book close" onclick=removeBook(${i})>&times;</span> 
            
                <h1 class="normal-title">${book.title}</h1>
                <p>${book.autor}</p>
            </div>
            <div class="card-body"> 
            <p>${book.pages}</p>
            <p class ="btn-read" id="btn-read">${book.read ? "Read": "Not Yeat"}</p>
            
            </div>
        </div>`
        libraryEl.appendChild(bookEl); // coloca os itens no html
    }
}
function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

// função para adicionar os livros do usuario.

function addBookToLibrary() {
    //1. pega todos os inputs que vamos usar.
    let title = document.getElementById("title").value;
    let autor = document.getElementById("autor").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked
    let newBook = new Book(title, autor, pages, read); //instancia o objeto book.

    // adicionamos ao array os itens criados.
    myLibrary.push(newBook);
    // chama a função render 
    render();




}

//seleciona o forms e adicionamos um evento, quando submit acontece chama uma função anonima
document.querySelector(".form-book").addEventListener("submit", function (event) {
    event.preventDefault()
    addBookToLibrary();
    modal.style.display = "none";


})






































/* esconde e mostra o form
function hideItem() {
    let hide = document.getElementById('form-book'); {
        if(hide.style.display == 'none') {
            hide.style.display = 'block';
        }else {
            hide.style.display = 'none';
        }
    }

}*/