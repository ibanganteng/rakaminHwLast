"use client";

import { useState } from "react";
import { updateBook } from "@/fetching/books";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function UpdateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year, setYear] = useState("");
  const [pages, setPages] = useState("");
  const router = useRouter();
  const params = useParams();

  async function handleSubmit() {
    const { id } = params;
    await updateBook(+id, {
      title,
      author,
      publisher,
      year,
      pages,
    });
    router.push("/");
    router.refresh("/");
  }

  return (
    <>
      <div>
        <h1 style={{ display: "block", margin: "5px" }}>Edit Book</h1>
      </div>
      <div>
        <input
          style={{ display: "block", margin: "5px", paddingRight: "20px" }}
          type="text"
          placeholder="Enter Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          style={{ display: "block", margin: "5px", paddingRight: "20px" }}
          type="text"
          placeholder="Enter Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          style={{ display: "block", margin: "5px", paddingRight: "20px" }}
          type="text"
          placeholder="Enter Publisher"
          onChange={(e) => setPublisher(e.target.value)}
        />
        <input
          style={{ display: "block", margin: "5px", paddingRight: "20px" }}
          type="number"
          placeholder="Enter Year"
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          style={{ display: "block", margin: "5px", paddingRight: "20px" }}
          type="number"
          placeholder="Enter Pages"
          onChange={(e) => setPages(e.target.value)}
        />
        <button style={{ margin: "5px" }} onClick={handleSubmit}>
          UPDATE
        </button>{" "}
        <Link href={"/"}>
          <button>CANCEL</button>
        </Link>
      </div>
    </>
  );
}
