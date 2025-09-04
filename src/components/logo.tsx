import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/../public/logo.webp"

function LogoHappybingo() {
  return (
    <Link href="https://happybingo.ph/">
        <Image src={Logo} alt="Logo" width={90} height={90} />
    </Link>
  )
}

export default LogoHappybingo