'use client'
import { db } from '@/configs/db';
import { Chapters, CourseList } from '@/configs/schema';
import { and, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { use } from "react";
import ChapterListCard from './_components/ChapterListCard';
import ChapterContent from './_components/ChapterContent';
import Header from '@/app/dashboard/_components/Header';
import { Menu } from 'lucide-react';

function CourseStart({ params }) {

    const courseParams = use(params);
    const [course, setCourse] = useState();
    const [selectedChapter, setSelectedChapter] = useState();
    const [chapterContent, setChapterContent] = useState();
    const [sidebarOpen, setSidebarOpen] = useState(false);

   useEffect(() => {
    GetCourse();
}, []);

const GetCourse = async () => {
    try {
        const result = await db
            .select()
            .from(CourseList)
            .where(eq(CourseList.courseID, courseParams?.courseId));

        if (result.length > 0) {
            const courseData = result[0];
            setCourse(courseData); // triggers the next useEffect
        } else {
            console.warn('No course found for the given ID.');
        }
    } catch (error) {
        console.error('Error fetching course:', error);
    }
};

useEffect(() => {
    if (course?.courseOutput?.Chapters?.length > 0) {
        const firstChapter = course.courseOutput.Chapters[0];
        setSelectedChapter(firstChapter);
        GetSelectedChapterContent(0);
    }
}, [course]);




    const GetSelectedChapterContent = async (chapterId) => {
    try {
        const result = await db
            .select()
            .from(Chapters)
            .where(
                and(
                    eq(Chapters.chapterID, chapterId),
                    eq(Chapters.courseID, course?.courseID)
                )
            );

        if (result.length > 0) {
            setChapterContent(result[0]);
            console.log('selected chapter:', result[0]);
        } else {
            console.log('No chapter found for given ID');
        }
    } catch (error) {
        console.error('Error fetching chapter:', error);
    }
};


    return (
        <div className="h-screen flex flex-col">
            {/* Sticky Header */}
            <header className="sticky top-0 left-0 w-full z-50 bg-white shadow-md  flex md:block px-4 py-3">
                <Header />
                {/* Toggle sidebar on small screens */}
                <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <Menu className="w-6 h-6 text-gray-700" />
                </button>
            </header>

            {/* Main Layout */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar (mobile and desktop) */}
                <div
    className={`fixed md:static top-[100 left-0 z-40 h-[calc(100vh-64px)] md:h-auto md:flex md:w-64 flex-col border-r shadow-sm bg-white overflow-y-auto transition-transform transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
    } md:translate-x-0 md:transition-none`}
>
                    <h2 className="font-medium text-lg bg-primary p-4 text-white">{course?.courseOutput?.CourseName}</h2>

                    <div className="flex-1 overflow-y-auto scrollbar-hide">
                        {course?.courseOutput?.Chapters.map((chapter, index) => (
                            <div 
                                key={index} 
                                className={`cursor-pointer hover:bg-purple-50 ${selectedChapter?.ChapterName == chapter?.ChapterName && 'bg-purple-100'}`}  
                                onClick={() => {
                                    console.log(JSON.stringify(chapter))
                                    setSelectedChapter(chapter);
                                    GetSelectedChapterContent(index);
                                    setSidebarOpen(false); // auto close on mobile
                                }}
                            >
                                <ChapterListCard chapter={chapter} index={index} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Overlay for mobile sidebar */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Content Section */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
                    <ChapterContent chapter={selectedChapter} content={chapterContent} />
                </div>
            </div>
        </div>
    );
}

export default CourseStart;
