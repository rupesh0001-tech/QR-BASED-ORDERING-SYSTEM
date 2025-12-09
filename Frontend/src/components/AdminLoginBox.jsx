import React from "react";

const AdminLoginBox = () => {
  return (
    <main className="flex items-center justify-center w-auto px-10 border border-gray-500 py-10 rounded-2xl   ">
      <form className="flex w-auto flex-col max-w-96">
        

        <h2 className="text-4xl font-medium text-gray-900">Admin Login </h2>
        <p>Welcome</p>

        <p className="mt-4 text-base text-gray-500/90">
          Please enter email and password to access.
        </p>

        <div className="mt-10">
          <label className="font-medium">Email</label>
          <input
            placeholder="Please enter your email"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
            required
            type="email"
            name="email"
          />
        </div>

        <div className="mt-6">
          <label className="font-medium">Password</label>
          <input
            placeholder="Please enter your password"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
            required
            type="password"
            name="password"
          />
        </div>

        <button
          type="submit"
          className="mt-8 py-3 w-full cursor-pointer rounded-md bg-indigo-600 text-white transition hover:bg-indigo-700"
        >
          Login
        </button>
      </form>
    </main>
  );
};

export default AdminLoginBox;
