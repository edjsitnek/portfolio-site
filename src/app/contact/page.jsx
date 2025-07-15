'use client'

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold ml-6 mb-6 text-[var(--blue5)]">Contact</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-2 rounded border border-gray-300"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-2 rounded border border-gray-300"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-2 rounded border border-gray-300"
          rows={6}
          value={form.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-[var(--blue5)] text-white px-4 py-2 rounded hover:bg-[var(--blue4)] font-semibold"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send"}
        </button>
        {status === "sent" && <div className="text-green-600">Message sent! Thanks for reaching out.</div>}
        {status === "error" && <div className="text-red-500">There was an error. Please try again later.</div>}
      </form>
    </div>
  );
}
