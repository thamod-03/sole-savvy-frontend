import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";

const AdminLoginForm = () => {
  const { setIsAdminLogged } = useContext(AppContent);

  const admin = {
    username: "thamod",
    password: "iamthamod2003",
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username == admin.username && password == admin.password) {
      setIsAdminLogged(true);
    } else {
      toast.error("Wrong Credentials");
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-outfit">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            <span className="text-[#ff6b00]">Admin</span> Sign In
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b00] focus:border-[#ff6b00] outline-none transition-all"
                placeholder="e.g: johndoe"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6b00] focus:border-[#ff6b00] outline-none transition-all"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-[#ff6b00] hover:bg-[#E56000] text-white font-medium py-2.5 rounded-lg transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm;
