"use client"

import React from "react"
import Image from "next/image"
import { signIn, signOut, useSession } from "next-auth/react"
import { AiOutlineMenu } from "react-icons/ai"

const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false)
    const { status, data } = useSession()

    const handleLoginClick = () => signIn()
    const handleLogoutClick = () => {
      setMenuIsOpen(false)
      signOut()
    }

  return <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
    <Image width={183} height={32} src="/logo.png" alt="full stack week" />

    {status === "unauthenticated" && (
      <button className="text-primary text-sm font-semibold" onClick={handleLoginClick}>
      Login
    </button>
    )}

    {status === "authenticated" && data.user && (
      <div className="flex items-center gap-3 boder-lightGray border border-solid rounded-lg p-2 px-3 relative">
        <AiOutlineMenu size={16} onClick={() => setMenuIsOpen(true)} className="cursor-pointer"/>

        <Image height={35} width={35} src={data.user.image!} alt={data.user.name!} className="rounded-full shadow-md"/>
        {menuIsOpen && (
          <div className="z-50 absolute top-12 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
            <button className="text-primary text-xs font-semibold" onClick={handleLogoutClick}>
              Logout
            </button>
          </div>
        )
        }
      </div>
    )
    }
  </div>
} 

export default Header