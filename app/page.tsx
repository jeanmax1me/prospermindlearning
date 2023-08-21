"use client";

import { Typography } from "@mui/material";
import styles from "./page.module.css";
import { useState } from "react";




export default function Home() {
  const [courses, setCoursedata] = useState();
  async function fetchQuery() {
    const baseUrl = `http://localhost:1337/api`;
    const response = await fetch(`${baseUrl}/courses`);
    const data = await response.json();
    setCoursedata(data);
    console.log(data);
    return data;
  }

  return (
    <>
    <main>
      <div>
        <Typography variant='h6' component='h1'>Welcome To Affiliate Adventures</Typography>
      </div>
    </main>
    </>
  );
}
