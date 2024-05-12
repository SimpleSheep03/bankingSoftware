'use client'

import AuthForm from '@/components/ui/AuthForm'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { getLoggedInUser, signUp } from '@/lib/actions/user.actions'


const AuthFormSignUp = () => {

  const router = useRouter()

  const [user , setUser] = useState(null)
  const [isLoading , setIsLoading] = useState(false)
  const [formData , setFormData] = useState({
      firstName: '',
      lastName: '',
      city: '',
      address1: '',
      postalCode: '',
      state: '',
      dateOfBirth: '', // Store date as a string (consider using a date library for validation)
      ssn: '',
      email: '',
      password: '',
  })

  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true)
    try{
      const newUser = await signUp(formData)
      console.log(newUser)
      setUser(newUser)
    }
    catch(error){
      console.log(error)
    }
    finally{
      setIsLoading(false)
  }
    
  };

  // console.log(formData)

  return (
    <section className='flex-center size-full max-sm:px-6'>
      <section className='auth-form'>
      <header className='flex flex-col gap-5 md:gap-8'>
          <Link href="/" className="cursor-pointer flex items-center gap-1">
            <Image 
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Horizon logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
          </Link>

          <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
              {user 
                ? 'Link Account'
                : 'Sign Up'
              }
              <p className="text-16 font-normal text-gray-600">
                {user 
                  ? 'Link your account to get started'
                  : 'Please enter your details'
                }
              </p>  
            </h1>
          </div>
        </header>
        {user ? (
        <div className="flex flex-col gap-4">
          {/* <PlaidLink user={user} variant="primary" /> */}
        </div>) : (
          <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group mt-5 form-item">
            <label className = 'form-label' htmlFor="firstName">First Name:</label>
            <input placeholder = 'Enter your first name'
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange(e)}
              className = 'input-class p-2'
              required
            />
          </div>
          <div className="form-group mt-5 form-item">
            <label className = 'form-label' htmlFor="lastName">Last Name:</label>
            <input placeholder = 'Enter your last name'
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange(e)}
              className = 'input-class p-2'
              required
            />
          </div>
          <div className="form-group mt-5 form-item">
            <label className = 'form-label' htmlFor="city">City:</label>
            <input placeholder = 'Enter your city'
              type="text"
              name="city"
              id="city"
              value={formData.city}
              onChange={(e) => handleChange(e)}
              className = 'input-class p-2'
              required
            />
          </div>
          <div className="form-group mt-5 form-item">
            <label className = 'form-label' htmlFor="address1">Address:</label>
            <input placeholder = 'Enter your address'
              type="text"
              name="address1"
              id="address1"
              value={formData.address1}
              onChange={(e) => handleChange(e)}
              className = 'input-class p-2'
              required
            />
          </div>
          <div className="form-group mt-5 form-item">
            <label className = 'form-label' htmlFor="postalCode">Postal Code:</label>
            <input placeholder = 'Enter your  postal code'
              type="text"
              name="postalCode"
              id="postalCode"
              value={formData.postalCode}
              onChange={(e) => handleChange(e)}
              className = 'input-class p-2'
              required
            />
          </div>
          <div className="form-group mt-5 form-item">
            <label className = 'form-label' htmlFor="state">State:</label>
            <input placeholder = 'Enter your state'
              type="text"
              name="state"
              id="state"
              value={formData.state}
              onChange={(e) => handleChange(e)}
              className = 'input-class p-2'
              required
            />
          </div>
          <div className="form-group mt-5 form-item">
            <label className = 'form-label' htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="text" // Consider using a date library for better UX
              name="dateOfBirth"
              id="dateOfBirth"
              value={formData.dateOfBirth
              }
              onChange={(e) => handleChange(e)}
              className = 'input-class p-2'
              placeholder='YYYY-MM-DD'
              required
            />
          </div>
          <div className="form-group mt-5 form-item">
            <label className = 'form-label' htmlFor="ssn">SSN</label>
            <input placeholder = 'Enter your SSN'
              type="text" // Consider using a date library for better UX
              name="ssn"
              id="ssn"
              value={formData.ssn}
              onChange={(e) => handleChange(e)}
              className = 'input-class p-2'
              required
            />
          </div>
          <div className="form-group mt-5 form-item">
            <label className = 'form-label' htmlFor="email">Email:</label>
            <input placeholder = 'Enter your valid email'
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              className = 'input-class p-2'
              required
            />
          </div>
          <div className="form-group mt-5 form-item">
            <label className = 'form-label' htmlFor="password">Password:</label>
            <input placeholder = 'Atleast 8 characters'
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
              className = 'input-class p-2'
              required
            />
          </div>
          {/* Omit SSN input for security reasons */}
          <button type="submit" className='form-btn p-1 mt-5 w-full' disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Sign up'}
          </button>
        </form>
        
        )}
        <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {"Already have an account?"}
            </p>
            <Link href={'/sign-in'} className="form-link">
              {'Sign in'}
            </Link>
          </footer>
      </section>
    </section>
  )
}

export default AuthFormSignUp