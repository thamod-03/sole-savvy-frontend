import { useContext, useState } from "react";
import { AppContent } from "../context/AppContext";
import { user } from "../assets/assets";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setIsLogged, setShowForm, setLoggedUser } =
    useContext(AppContent);

  const users = user;

  const handleLogin = () => {
    const logUser = users.find((u) => u.email === email);
    if (logUser) {
      if (logUser.email === email && logUser.password === password) {
        setIsLogged(true);
        setShowForm(false);
        setLoggedUser(logUser);
      } else {
        toast.error("Email or password is wrong");
      }
    } else {
      toast.error("User doesn't exist");
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (state === "login") {
            handleLogin();
          }
        }}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 rounded-lg shadow-xl border border-gray-200 bg-white"
      >
        <div onClick={()=> setShowForm(false)} className="cursor-pointer absolute inset-0 md:left-[58%] sm:left-[65%] top-[5%] left-[70%] text-2xl">
          &times;
        </div>
        <p className="text-2xl font-medium m-auto">
          <span className="text-[#FF6B00]">User</span>{" "}
          {state === "login" ? "Login" : "Sign Up"}
        </p>
        {state === "register" && (
          <div className="w-full">
            <p>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#ff6b00]"
              type="text"
              required
            />
          </div>
        )}
        <div className="w-full ">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="type here"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#ff6b00]"
            type="email"
            required
          />
        </div>
        <div className="w-full ">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="type here"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#ff6b00]"
            type="password"
            required
          />
        </div>
        {state === "register" ? (
          <p>
            Already have account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-[#ff6b00] cursor-pointer"
            >
              click here
            </span>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <span
              onClick={() => setState("register")}
              className="text-[#ff6b00] cursor-pointer"
            >
              click here
            </span>
          </p>
        )}

        {state === "register" ? (
          <button
            type="submit"
            className="bg-[#ff6b00] hover:bg-[#E56000] transition-all text-white w-full py-2 rounded-md cursor-pointer"
          >
            Create Account
          </button>
        ) : (
          <button
            type="submit"
            className="bg-[#ff6b00] hover:bg-[#E56000] transition-all text-white w-full py-2 rounded-md cursor-pointer"
          >
            Login
          </button>
        )}
      </form>
    </>
  );
};

export default LoginForm;
