import { Link, useNavigate } from "react-router-dom";
import InputField from "../../Components/InputField";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/ContexApi";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const { createUserEmailPass, updateUser, googleSignIn } =
    useContext(AuthContext);

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.Username.value;
    const email = form.Email.value;
    const password = form.Password.value;

    console.log(username, email, password);

    createUserEmailPass(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        updateUser(username);
        toast.success("User Created");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn().then(() => {
      navigate("/");
      toast.success("User Created");
    });
  };
  return (
    <div className="mt-28">
      <div className="w-full mx-auto lg:w-[500px] drop-shadow-lg bg-white">
        <form onSubmit={handleRegisterForm} className="px-12 pt-12 pb-6">
          <h1 className="backdrop-blur-sm text-4xl pb-8">Register</h1>
          <div className="space-y-5">
            {/* for email input */}
            <InputField
              inputName={"Username"}
              type={"text"}
              placeholder={"example"}
            />
            {/* for email input */}
            <InputField
              inputName={"Email"}
              type={"email"}
              placeholder={"example@gmail.com"}
            />
            {/*for password input */}
            <InputField
              inputName={"Password"}
              type={"text"}
              placeholder={"***********"}
            />
          </div>
          {/* Div for submit button */}
          <div>
            <button
              type="submit"
              className="py-2 px-5 mb-4 mt-6 shadow-lg before:block before:-left-1 before:-top-1 before:bg-black before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block text-xl"
            >
              Register
            </button>
          </div>
        </form>
        {/* Div for Other login options */}
        <div className="pb-6 space-y-5">
          <p className="text-center font-semibold">OR</p>
          <div className="flex justify-center space-x-4 ">
            {/* Google login button */}
            <button
              onClick={handleGoogleLogin}
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
          <p className="text-center">
            Already have an Account?{" "}
            <Link to="/login" className="font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
