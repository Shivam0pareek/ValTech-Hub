'use client'
import React, { useState } from 'react'
import Sidebar from './_components/Sidebar'
import Header from './_components/Header'
import { UserCourseListContext } from '../_context/UserCourseList'
import { Button } from '@/components/ui/button'
import { FiMenu, FiX } from 'react-icons/fi'
import Image from 'next/image'
import { BookOpen } from 'lucide-react'

function DashboardLayout({ children }) {
  const [userCourseList, setUserCourseList] = useState([])
  const [open, setOpen] = useState(false)

  return (
    <UserCourseListContext.Provider value={{ userCourseList, setUserCourseList }}>
      <div className="flex">

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4 flex justify-end">
            <Button variant="ghost" onClick={() => setOpen(false)}>
              <FiX className="w-6 h-6" />
            </Button>
          </div>
          <Sidebar onClose={() => setOpen(false)} />
        </div>

        {/* Mobile Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Desktop Sidebar */}
        <div className="hidden md:block fixed top-0 left-0 h-full w-64 bg-white shadow-md">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 md:ml-64 w-full min-h-screen flex flex-col">

          {/* Mobile Header */}
          <div className="md:hidden p-4 flex items-center justify-between gap-4 bg-white shadow">
            <Button variant="ghost" onClick={() => setOpen(true)}>
              <FiMenu className="h-6 w-6" />
            </Button>
            <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="w-full text-2xl font-bold text-primary">Free Course</span>
        </div>
          </div>

          {/* Desktop Header */}
          <div className='hidden md:block'><Header /></div>
          

          {/* Page Content */}
          <div className="p-6 flex-1">{children}</div>
        </div>
      </div>
    </UserCourseListContext.Provider>
  )
}

export default DashboardLayout
