const myLibrary = [];

function book(title) {
    this.title = title;

};

function addBookToLibrary() {
    const addBook = prompt("give title");
    
    const newBook = new book(addBook) 

    console.log(newBook);
};

addBookToLibrary();