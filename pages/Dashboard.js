import React, { useState } from "react"
import {
  Header,
  Footer,
  Hero,
} from 'components/molecules'

import { AuthProvider,useAuth } from "../contexts/AuthContext"


export default function Dashboard() {


  const { login,currentUser } = useAuth()

  return (
    <>
    <div >


    <Header />

    <div>
        <h1>Dashboard Main</h1>
        <h4>Current User</h4>
        <h1>Email:{currentUser && currentUser.email}</h1>
      </div>
    <Footer />
    </div>
    </>

  )
}
