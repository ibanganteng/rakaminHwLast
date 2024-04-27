"use client";

import { deleteBook } from "@/fetching/books";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BookList({ books }) {
  const router = useRouter();
  async function handleDelete(id) {
    await deleteBook(id);
    router.refresh();
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Year</th>
            <th>Pages</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.year}</td>
                <td>{book.pages}</td>
                <td>
                  <a href={book.image}>{book.image}</a>
                </td>
                <td>
                  <button type="button" onClick={(e) => handleDelete(book.id)}>
                    DELETE
                  </button>{" "}
                  <Link href={`/books/${book.id}`}>
                    <button type="button">EDIT</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link href={"/books"}>
        <button>Add Book</button>
      </Link>
    </>
  );
}
