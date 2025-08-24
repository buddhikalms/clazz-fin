"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();
    setMessage(null);

    try {
      const res = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Invalid credentials");
        return;
      }

      // Save session in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));

      // Optionally redirect
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setMessage("Network error. Try again later.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <input
          className="border rounded p-2 w-full"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="border rounded p-2 w-full"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full rounded-xl py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          Login
        </button>

        {message && (
          <p className="text-sm text-center text-red-600">{message}</p>
        )}
      </form>
    </div>
  );
}
