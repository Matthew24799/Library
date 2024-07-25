const container = document.getElementById("container");
const dialog = document.querySelector("dialog");
const showButton =document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const myLibrary = [];

function book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;

};

function addBookToLibrary() {
  

};


function makeCard() {
    

    for (i in myLibrary) {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");


        title.innerText = `Title: ${myLibrary[i].title}`;
        author.innerText = `Author: ${myLibrary[i].author}`;
        pages.innerText = `Pages: ${myLibrary[i].pages}`;

        console.log(myLibrary[i])
        console.log(myLibrary[i].title);
        
     

        
        container.appendChild(card);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
    }
}

showButton.addEventListener("click", () => {
    dialog.showModal();
})

closeButton.addEventListener("click", () => {
    dialog.close();
})

const book1 = new book("Game Of Thrones","ahron", "100", "yes");
const book2 = new book("Skyward","Ralpth", "200", "no");
myLibrary.push(book1, book2);

makeCard();
