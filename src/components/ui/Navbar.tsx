// src/components/ui/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { User } from "@/types/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser) as User);
    } else {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = (): void => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <nav className="flex items-center justify-between bg-gray-800 px-6 py-3 text-white">
      <h1 className="text-lg font-bold">AgileBoard</h1>

      {user && (
        <div className="flex items-center gap-4">
          <span>Welcome, {user.username}</span>  {/* ✅ email instead of username */}

          {user.role === "admin" ? (
            <>
              <button className="rounded bg-green-600 px-3 py-1">
                Create Project
              </button>
              <button className="rounded bg-yellow-600 px-3 py-1">
                Manage Users
              </button>
            </>
          ) : (
            <>
              <button className="rounded bg-blue-600 px-3 py-1">
                My Tasks
              </button>
            </>
          )}

          <button
            onClick={handleLogout}
            className="rounded bg-red-600 px-3 py-1"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
