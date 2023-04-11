'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import LoadingPage from './loading';
import Courses from './componets/Courses';
import CourseSearch from './componets/CourseSearch';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1 className='text-center text-sm p-2 m-2 font-semibold text-white '>Welcome To Trt media</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  );
};
export default HomePage;
