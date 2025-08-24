"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [subjects, setSubjects] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [message, setMessage] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setMessage(null);

    // Construct body
    const body = { email, password, role, name };
    if (role === "TEACHER") {
      body.teacherProfile = {
        about,
        subjects,
        location,
        experience: experience ? parseInt(experience) : null,
        facebook,
        twitter,
        linkedin,
      };
    }

    try {
      const res = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) setMessage("Registered successfully. You can now log in.");
      else {
        const data = await res.json();
        setMessage(
          data.error || "Registration failed (maybe email already exists?)"
        );
      }
    } catch (err) {
      setMessage("Network error. Try again later.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Create Account</h1>

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

        {role === "TEACHER" && (
          <div className="space-y-2">
            <textarea
              className="border rounded p-2 w-full"
              placeholder="About"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
            <input
              className="border rounded p-2 w-full"
              placeholder="Subjects (comma separated)"
              value={subjects}
              onChange={(e) => setSubjects(e.target.value)}
            />
            <input
              className="border rounded p-2 w-full"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              className="border rounded p-2 w-full"
              placeholder="Experience (years)"
              type="number"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
            <input
              className="border rounded p-2 w-full"
              placeholder="Facebook URL"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
            <input
              className="border rounded p-2 w-full"
              placeholder="Twitter URL"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
            />
            <input
              className="border rounded p-2 w-full"
              placeholder="LinkedIn URL"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </div>
        )}

        <button className="w-full rounded-xl py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          Register
        </button>

        {message && (
          <p className="text-sm text-center text-red-600">{message}</p>
        )}
      </form>
    </div>
  );
}
