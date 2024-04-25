import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export const Footer = () => {
  return (
    <footer className="border-t">
      <div className=
      'flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
          <Image src="/assets/images/logo.svg" width={128} height={38} alt='Email Dragon' />
        </Link>
        <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold mb-2">Contact</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-bold mb-2">Social</h2>
          <div className="flex justify-center sm:justify-start space-x-4">
            <Link href="#" className="bg-primary-500 rounded p-1">
                <Image src="/assets/icons/facebook.svg" alt="Facebook" style={{ filter: 'invert(100%)' }} width={24} height={24} />
            </Link>
            <Link href="#"  className="bg-primary-500 rounded p-1">
                <Image src="/assets/icons/youtube.svg" alt="Youtube" style={{ filter: 'invert(100%)' }} width={24} height={24} />
            </Link>
            <Link href="#"  className="bg-primary-500 rounded p-1">
                <Image src="/assets/icons/instagram.svg" alt="Instagram" style={{ filter: 'invert(100%)' }} width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
          <p className="text-center mb-4">2024 Email Dragon. All Right Reserved </p>
    </footer>
  )
}