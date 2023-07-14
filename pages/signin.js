// import { auth } from "@/firebase/firebase";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useAuth } from "@/firebase/auth";
import { useRouter } from "next/router";
import Loader from "../components/Loader";

const provider = new GoogleAuthProvider();

const RegisterForm = () => {
  const router = useRouter();
  const [email, setemail] = useState(null);
  const [passw, setPassw] = useState(null);
  const [username, setusername] = useState(null);
  const { authUser, isLoading, setAuthUser } = useAuth();

  useEffect(() => {
    if (!isLoading && authUser) {
      router.push("/");
    }
  }, [authUser, isLoading]);

  const signinhandler = async () => {
    console.log("yuvhgvfcdx");
    if (!email || !password || !username) return;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
      setAuthUser({
        uid: user.uid,
        email: user.email,
        username,
      });
    } catch (error) {
      console.error("An error occured", error);
    }
  };

  const googlesignin = async () => {
    const user = await signInWithPopup(auth, provider);
    console.log("fcdx");
  };

  return isLoading || (!isLoading && !!authUser) ? (
    <Loader />
  ) : (
    <main className="flex lg:h-[100vh]">
      <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
        <div className="p-8 w-[600px]">
          <h1 className="text-5xl font-semibold">Signx Up</h1>
          {/* <p className="mt-6 ml-1">
            Already have an account ?
            <span className="underline hover:text-blue-400 cursor-pointer">
              Login
            </span>
          </p> */}

          <div
            className="bg-black/[0.05]
           text-white w-full py-3 mt-10
            rounded-full transition-transform
             hover:bg-black/[0.8] active:scale-90 
             flex justify-center items-center gap-4 
             cursor-pointer group"
            onClick={googlesignin}
          >
            <FcGoogle size={22} />
            <span className="font-medium text-black group-hover:text-white">
              Login with Google
            </span>
          </div>
          <form action="" onSubmit={(e) => e.preventDefault}>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Name</label>
              <input
                type="text"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                required
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Email</label>
              <input
                type="email"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                required
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="mt-10 pl-1 flex flex-col">
              <label>Password</label>
              <input
                type="password"
                className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                required
                onChange={(e) => setPassw(e.target.value)}
              />
            </div>
            <button
              className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90"
              onClick={signinhandler}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <div
        className="w-[40%] bg-slate-400 bg-cover bg-right-top hidden lg:block"
        style={{
          backgroundImage: "url('/login-banner.jpg')",
        }}
      ></div>
    </main>
  );
};

export default RegisterForm;
