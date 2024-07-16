import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, app } from "../firebase/Firebase.jsx";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate('');
    const [error, setError] = useState(null); 

    const getErrorMessage = (errorCode) => {
      switch (errorCode) {
          case 'auth/email-already-in-use':
              return 'The email address is already in use by another account.';
          case 'auth/invalid-email':
              return 'The email address is not valid.';
          case 'auth/operation-not-allowed':
              return 'Email/password accounts are not enabled.';
          case 'auth/weak-password':
              return 'The password is too weak.';
          default:
              return 'An unexpected error occurred. Please try again.';
      }
  };

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate('/home-page');
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = getErrorMessage(errorCode);
            console.log(errorCode);
            console.log(errorMessage);
            setError(errorMessage);
        })
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>
        <form className="space-y-4" onSubmit={signUp}>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Lucy"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-sm font-medium text-gray-600"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Grey"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="lucy78@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Must have at least one capital letter and a number"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <div className="text-red-600 text-sm">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
