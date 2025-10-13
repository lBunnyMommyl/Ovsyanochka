import { Book } from './types/Book';
import { LibraryBook } from './types/LibraryBook';
import { Repository, getReadonlyBooks } from './utils/Repository';
import { updateBook } from './utils/updateBook';

const book1: Book = { title: 'Столпы земли', author: 'Кен Фоллет', year: 1989 };
const book2: Book = { title: 'Война и мир', author: 'Лев Толстой', year: 1869 };

const libraryBook1 = new LibraryBook(book1);
const libraryBook2 = new LibraryBook(book2);

libraryBook1.borrow('Олеся');
libraryBook2.borrow('Иван');

const bookRepo = new Repository<Book>([book1, book2]);

const book3: Book = { title: 'Унесенные ветром', author: 'Маргарет Митчел', year: 1986 };
bookRepo.add(book3);

console.log('Все книги в репозитории:', bookRepo.getAll());

const updatedBook1 = updateBook(book1, { year: 1990 }, bookRepo);
console.log('Обновлённая книга:', updatedBook1);

const readonlyBooks = getReadonlyBooks(bookRepo);
console.log('Readonly книги:', readonlyBooks);