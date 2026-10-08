import { useState } from "react";
import api from "../api";

const empty = { indexNumber: "", fullName: "", parentPhone: "" };

export default function StudentForm({ onCreated }) {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/students", form);
      setForm(empty);
      setError("");
      onCreated();
    } catch {
      setError("Could not save. Check the index number and phone (+94...).");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-3 rounded-lg border p-4">
      <input name="indexNumber" value={form.indexNumber} onChange={handleChange}
        placeholder="Index number" className="w-full rounded border p-2" required />
      <input name="fullName" value={form.fullName} onChange={handleChange}
        placeholder="Full name" className="w-full rounded border p-2" required />
      <input name="parentPhone" value={form.parentPhone} onChange={handleChange}
        placeholder="Parent phone (+94771234567)" className="w-full rounded border p-2" />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Add student
      </button>
    </form>
  );
}