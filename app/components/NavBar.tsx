"use client"
import React from 'react'
import { useAuth } from "@clerk/nextjs";

function NavBar() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  return (
   <nav>
      <ul>
        <li><a href="/">Home</a></li>
        {isLoaded && !userId && !sessionId && (
          <>
            <li><a href="/sign-in">Sign In</a></li>
            <li><a href="/sign-up">Sign Up</a></li>
            </>
            )}
        {isLoaded && (userId || sessionId) && (
          <>
            <li><a href="/user-profile">Account</a></li>
          </>
        )}
        
      </ul>
   </nav>
  )
}

export default NavBar