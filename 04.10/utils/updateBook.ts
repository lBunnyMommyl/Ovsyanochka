import { Book } from '../types/Book';
import { Repository } from './Repository';

export function updateBook(book: Book, updates: Partial<Book>, repo?: Repository<Book>): Book {
  const updatedBook: Book = { ...book, ...updates };

  if (repo) {
    const books = repo.getAll();
    const index = books.findIndex(
      b => b.title === book.title && b.author === book.author && b.year === book.year
    );

    if (index !== -1) {
      books[index] = updatedBook;
    }
  }

  return updatedBook;
}