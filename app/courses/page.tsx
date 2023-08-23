"use client";
import useFetchCoursesData from "../hooks/useFetchCourseData";
import CourseGrid from "@/app/components/CourseGrid/page";
import CourseHeader from "@/app/components/CourseHeader/page";

const CoursePage = () => {
  const courses = useFetchCoursesData();

  return (
    <div>
      <CourseHeader
        href={"/"}
        title={"Courses"}
        description={
          "Let's start learning useful skills to be successful!"
        }
      />
      <CourseGrid courseData={courses} />
    </div>
  );
};

export default CoursePage;