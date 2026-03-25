"use client";

import { useEffect, useState } from "react";

const NAMES = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Evan",
  "Fiona",
  "George",
  "Hannah",
  "Ivan",
  "Jenna",
];

export default function Home() {
  const [checkedSet, setCheckedSet] = useState<Set<string>>(new Set());

  useEffect(() => {
    const stored = localStorage.getItem("checkedNames");
    if (stored) {
      try {
        const arr = JSON.parse(stored);
        setCheckedSet(new Set(arr));
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("checkedNames", JSON.stringify([...checkedSet]));
  }, [checkedSet]);

  const toggle = (name: string) => {
    setCheckedSet((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const env = process.env.NEXT_PUBLIC_VERCEL_ENV || "Unknown";

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-xl mx-auto">
        <header className="mb-6">
          <div className="inline-block bg-black text-white text-xs font-mono px-2 py-1 rounded">
            Running on Vercel — {env}
          </div>
          <h1 className="text-2xl font-bold mt-4">Checklist</h1>
        </header>

        <ul className="space-y-2">
          {NAMES.map((name) => (
            <li key={name} className="flex items-center gap-3">
              <input
                type="checkbox"
                id={name}
                checked={checkedSet.has(name)}
                onChange={() => toggle(name)}
                className="w-5 h-5 accent-blue-600"
              />
              <label htmlFor={name} className="text-lg select-none">
                {name}
              </label>
            </li>
          ))}
        </ul>

        <footer className="mt-8 text-sm text-gray-500">
          {checkedSet.size} of {NAMES.length} completed
        </footer>
      </div>
    </div>
  );
}