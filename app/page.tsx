"use client";
import { Typography } from "@mui/material";
import CourseGrid from "@/app/components/CourseGrid/page";
import useFetchCoursesData from "@/app/hooks/useFetchCourseData";
import Hero from "@/app/components/Hero";

export default function Home() {
  const courses = useFetchCoursesData();

  return (
    <>
      <Hero />
      <CourseGrid courseData={courses} />
    </>
  );
}