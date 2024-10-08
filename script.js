const container = document.getElementById("container");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".add");
const closeButton = document.querySelector("dialog button");
const submit = document.querySelector("#submit");

 

class book {
 constructor(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages;
    this.read = read;
};
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new book(title, author, pages, read);
   myLibrary.push(newBook);
   displayCards(newBook);
   console.log(newBook)
};

const myLibrary = [];

const carrie = new book("Carrie", "Stephen King", "199", false);
myLibrary.push(carrie);
displayCards(carrie);

const skyward = new book("Skyward", "Brandon Sanderson", "528", true);
myLibrary.push(skyward);
displayCards(skyward);
 

function makeCard(book) {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const removeButton = document.createElement("a");
        const read = document.createElement("div");
        read.classList.add("read");
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("btnContainer");
        let toggle = "";

        title.innerText = `Title: ${book.title}`;
        author.innerText = `Author: ${book.author}`;
        pages.innerText = `Pages: ${book.pages}`;
        removeButton.innerText = "Remove";
       
        if (book.read == true) {
            read.innerText = "Finished";
            read.style.backgroundColor = "green";
            toggle = "true";
        } else {
            read.innerText = "Not finished";
            read.style.backgroundColor = "red";
            toggle = "false";
        }

        
      removeButton.addEventListener("click", () => {
        card.remove();
      })

      read.addEventListener("click", () => {
        if ( toggle == "true") {
            read.innerText = "Not finished";
            read.style.backgroundColor = "red";
            toggle = "false"
        } else if (toggle == "false") {
            read.innerText = "Finished";
            read.style.backgroundColor = "green";
            toggle = "true";
            
        }; 
        
      })
        
        container.appendChild(card);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(buttonContainer);
        buttonContainer.appendChild(read);
        buttonContainer.appendChild(removeButton);

        
}

function displayCards(book){
        makeCard(book)
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
    const read = document.querySelector("#checkBox").checked;

    
    addBookToLibrary(title,author,pages,read);

    dialog.close();
} )




