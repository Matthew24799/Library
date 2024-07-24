const myLibrary = [];

function book(title) {
    this.title = title;

};

function addBookToLibrary() {
    const addBook = prompt("give title");
    
    const newBook = new book(addBook) 
    myLibrary.push(newBook)
    console.log(newBook);
};


function collection() {
    for (i in myLibrary) {
        console.log(myLibrary[i])
    }
}

const book1 = new book("toad");
const book2 = new book("dog");
myLibrary.push(book1, book2);

addBookToLibrary();

collection();

console.log(myLibrary);