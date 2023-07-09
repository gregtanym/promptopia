"use client"
// coz we are using browser capabilities, this has to be a client side component
// Provider is to be used throughout the entire app so this component would be imported in the main layout page
// wrap everything in the body tag with Provider

import { SessionProvider } from "next-auth/react"

const Provider = ({children, session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider