import AuthForm from '@/components/ui/AuthForm'
import AuthFormSignUp from '@/components/ui/AuthFormSignUp'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const SignIn = async() => {

  const loggedInUser = await getLoggedInUser()
  console.log(loggedInUser)

  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthFormSignUp/>
    </section>
  )
}

export default SignIn