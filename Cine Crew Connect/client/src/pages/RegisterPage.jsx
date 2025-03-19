import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: Connect with backend
    console.log("Registering with", name, email, password);
    navigate("/feed"); // Redirect to feed page after registration
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.div 
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-96"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create an Account 🎬
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white focus:ring focus:ring-gray-500"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-gray-700 text-white focus:ring focus:ring-gray-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 rounded bg-gray-700 text-white focus:ring focus:ring-gray-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 rounded transition"
          >
            Register
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-400 hover:underline">
            Login Here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
