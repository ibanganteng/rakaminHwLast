"use client";
import { login } from "@/fetching/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  async function handleSubmit() {
    await login({ email, password });
    router.push("/");
  }
  return (
    <div>
      <div>
        <h1 style={{ margin: "5px" }}>Login</h1>
      </div>
      <div>
        <input
          style={{ display: "block", margin: "5px", paddingRight: "10px" }}
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ display: "block", margin: "5px", paddingRight: "10px" }}
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{ display: "block", margin: "5px" }}
          type="button"
          onClick={handleSubmit}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}
