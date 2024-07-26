const container = document.getElementById("container");
const dialog = document.querySelector("dialog");
const showButton =document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const submit = document.querySelector("#submit")
const myLibrary = [];

function book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages;

};

function addBookToLibrary(title, author, pages) {
  let newBook = new book(title, author, pages);
   myLibrary.push(newBook);
   displayCards(newBook);
   console.log(newBook)
};


function makeCard(book) {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const removeButton = document.createElement("button");

        title.innerText = `Title: ${book.title}`;
        author.innerText = `Author: ${book.author}`;
        pages.innerText = `Pages: ${book.pages}`;

      removeButton.addEventListener("click", () => {
        card.remove();
      })
        
     

        
        container.appendChild(card);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(removeButton);
}

function displayCards(book) {
    container.replaceChildren();
    for (i in myLibrary) {
        makeCard(book)
    }
}

showButton.addEventListener("click", () => {
    dialog.showModal();
})

closeButton.addEventListener("click", () => {
    dialog.close();
})

submit.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    addBookToLibrary(title,author,pages);

} )


