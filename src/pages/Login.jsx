import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import photo from "../photos/531dee12-e5d5-4ee8-baa9-340fe9746bfa.webp";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();
  console.log(currentUser);

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Welcome!</h1>
          <p className="py-6">
            Jump into the chat, meet new people, and make friends within a
            single communal space.
          </p>
          <button onClick={handleLogin} className="btn btn-primary">
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
