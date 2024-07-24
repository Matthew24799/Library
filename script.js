

const myLibrary = [];

function book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;

};

function addBookToLibrary() {
  

};


function collection() {
    

    for (i in myLibrary) {
        const card = document.createElement("div");
        card.classList.add("card");
        const title = document.createElement("div");

        const bookTitle = document.createTextNode(myLibrary[i].title);

        console.log(myLibrary[i])
        console.log(myLibrary[i].title);
        
     

        title.appendChild(bookTitle); 
        document.body.appendChild(card)
        document.body.lastChild.appendChild(title)
        
    }
}

const book1 = new book("toad","ahron", "100", "yes");
myLibrary.push(book1);

collection();
