import React, { useRef, useState } from 'react'
import { Button, Logo } from 'components/atoms'
//import firebaseapp from '../../../hooks/firebase'; 
import { useAuth } from "../../../contexts/AuthContext"
import { useRouter } from 'next/router'


export const SignUpForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formType, setFormType] = useState('signUp')
  const { login, signup,singUpWithGoogle } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const router = useRouter()


  const handleSubmit = (event) => {
    event.preventDefault();
    // onSubmit({ email, password });
  };

  async function signInWithEmailPassword ()  {
    console.log("signInWithEmailPassword is called ", emailRef.current.value, passwordRef.current.value)
    //e.preventDefault()
    try {
      setError("")
      setLoading(true)
      console.log("Ok here with" )
      const response= await login(email, password)
      console.log("Successfully login" )



      router.push("/Dashboard")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)

    // firebaseapp.auth().createUserWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     console.log('User signed up:', user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log('Error signing up:', errorCode, errorMessage);
    //   });
  }

  async function signUpWithEmailPassword ()  {
    //e.preventDefault()
    try {
      setError("")
      setLoading(true)
      const response = await signup(email, password)
      router.push("/Dashboard")
    } catch {
      console.log("Failed to signup", error)
      setError("Failed to log in")
    }
    setLoading(false)
  }

  
  async function onSingUpWithGoogle ()  {
    console.log("Signup with google is called... ")
    try {
      setError("")
      setLoading(true)
      const response = await singUpWithGoogle()
      router.push("/Dashboard")
    } catch {
      console.log("Failed to signup with google", error)
      setError("Failed to signup with google")
    }

    setLoading(false)
  }

  return (
    <div className="relative z-[400] w-full max-w-md mx-auto">
      {formType === 'signUp' && (
        <>
      <h4 className='mb-[40px] text-center lg:text-center text-black'>
      Sign Up
          </h4>
      <Button onClick={onSingUpWithGoogle}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4 border border-black" appearance='default' size='sm'>
      Sign Up with Google
              </Button>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-black">
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
          />
        </div>
        <div className="mb-6">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button onClick={signUpWithEmailPassword} disabled={loading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4 border border-black" appearance='default' size='sm'>
            Sign Up
          </Button>

        </div>
      </form>
      <p className="text-center text-black text-xs">
        Already have an account?{' '}
        <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setFormType('signIn');
              }}
              className="underline text-black"
            >
              Sign In
            </a>
      </p>
      </>
      )}
      {formType === 'signIn' && (
  <>
    <h4 className='mb-[40px] text-center lg:text-center text-black'>
      Sign In
    </h4>
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-black">
    <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
          />
        </div>
        <div className="mb-6">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
          />
        </div>
        <div className="flex items-center justify-between">
      <Button onClick={signInWithEmailPassword} disabled={loading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4 border border-black" appearance='default' size='sm'>
            Sign In
      </Button>
    </div>
    </form>
    <p className="text-black text-center">
      Dont have an account?{' '}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setFormType('signUp');
        }}
        className="underline text-black"
      >
        Sign Up
      </a>
    </p>
    <p className="text-black text-center">
      Forgot your password?{' '}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setFormType('forgotPassword');
        }}
        className="underline text-black"
      >
        Reset Password
      </a>
    </p>
  </>
)}
{formType === 'forgotPassword' && (
  <>
    <h4 className="text-lg leading-6 font-medium text-black mb-4">
      Reset Password
    </h4>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-black mb-2">Email</label>
        <input
          type="email"
          className="border border-black w-full py-2"
          required
        />
      </div>
      <Button onClick={onThirdPartyAuth} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4 border border-black" appearance='default' size='sm'>
        Send reset password instructions
      </Button>
    </form>
    <p className="text-black text-center">
      Remembered your password?{' '}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setFormType('signIn');
        }}
        className="underline text-black"
      >
        Sign In
      </a>
    </p>
      </> 
)}
    </div>
  );
};

export default SignUpForm;
