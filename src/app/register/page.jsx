"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [name, setName] = useState("");
  const [message, setMessage] = useState(null); // fixed initialization

  async function onSubmit(e) {
    e.preventDefault();
    setMessage(null);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role, name }),
    });

    if (res.ok) setMessage("Registered successfully. You can now log in.");
    else setMessage("Registration failed (maybe email already exists?)");
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 space-y-3"
      >
        <h1 className="text-2xl font-bold">Create account</h1>
        <input
          className="border rounded p-2 w-full"
          placeholder="Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          placeholder="Password (min 6)"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select
          className="border rounded p-2 w-full"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="STUDENT">Student</option>
          <option value="TEACHER">Teacher</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button className="w-full rounded-xl py-2 bg-blue-600 text-white font-medium">
          Register
        </button>
        {message && <p className="text-sm text-center">{message}</p>}
      </form>
    </div>
  );
}
