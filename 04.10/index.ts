import { Book } from './types/Book';
import { LibraryBook } from './types/LibraryBook';

const book1: Book = { title: 'Столпы земли', author: 'Кен Фоллет', year: 1989 };
const book2: Book = { title: 'Война и мир', author: 'Лев Толстой', year: 1869 };

const libraryBook1 = new LibraryBook(book1);
const libraryBook2 = new LibraryBook(book2);

libraryBook1.borrow('Олеся');
libraryBook2.borrow('Иван');