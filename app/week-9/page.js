"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  console.log(user);

  const login = async () => {
    await gitHubSignIn();
  };

  const logout = async () => {
    await firebaseSignOut();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-md w-full bg-white text-black p-8 rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Shopping List</h1>

        {user ? (
          <div>
            <p className="text-center">Welcome {user.displayName}</p>
            <p className="text-center mb-4 text-green-500">{user.email}</p>
            <Link
              href="/week-9/shopping-list"
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded text-center mb-4"
            >
              Go to Shopping List
            </Link>

            <button
              onClick={logout}
              className="w-full bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-4 rounded"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <button
              onClick={login}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            >
              Login with GitHub
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
