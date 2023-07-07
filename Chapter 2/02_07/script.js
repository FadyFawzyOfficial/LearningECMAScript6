let books = new Set();

books.add('Java How to Program');
books.add('War and Peace').add('Oliver Twist');

books.add('Java How to Program');
console.log(books);
console.log(books.size);

books.delete('Oliver Twist');
console.log('Books has Oliver Twist?', books.has('Oliver Twist'));

books.forEach(book => {
    console.log(book);
});
