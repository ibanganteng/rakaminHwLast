"use client";

import { useState } from "react";
import { createBook, uploadImage } from "@/fetching/books";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year, setYear] = useState("");
  const [pages, setPages] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  async function handleSubmit() {
    const data = await createBook({
      title,
      author,
      publisher,
      year,
      pages,
      image,
    });
    console.log(data);
    router.push("/");
    router.refresh("/");
  }

  async function handleImage(e) {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const response = await uploadImage(formData);
    if (response.image_url) {
      setImage(response.image_url);
    }
  }

  return (
    <>
      <div>
        <h1 style={{ display: "block", margin: "5px" }}>Add Book</h1>
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
        <input
          style={{ display: "block", margin: "5px", paddingRight: "20px" }}
          type="file"
          placeholder="Enter Image"
          onChange={(e) => handleImage(e)}
        />
        <button style={{ margin: "5px" }} onClick={handleSubmit}>
          CREATE
        </button>{" "}
        <Link href={"/"}>
          <button>CANCEL</button>
        </Link>
      </div>
    </>
  );
}
