class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    displayInfo() {
        return `Title: ${this.title}\nAuthor: ${this.author}\nYear: ${this.year}`;
    }
}

// Example usage:
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
console.log(book1.displayInfo());