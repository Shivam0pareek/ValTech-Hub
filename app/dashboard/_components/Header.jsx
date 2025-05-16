import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { BookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="flex  items-center justify-between p-6 shadow-sm">
      <Link className='w-full' href={'/'}>
        {/* <Image src={'/valtech.png'} alt='valtech' width={150} height={200}></Image> */}
        <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="w-full text-2xl font-bold text-primary">Free Course</span>
        </div>
        </Link>
      <div className="flex items-center justify-evenly   md:justify-end md:gap-20 w-full">
  <div>
    <Link href="/dashboard" prefetch passHref>
      <Button className="w-auto h-auto">Dashboard</Button>
    </Link>
  </div>
  <UserButton
    appearance={{
      elements: {
        userButtonAvatarBox: 'w-12 h-12',
      },
    }}
  />
  
</div>

    </div>
  )
}

export default Header
