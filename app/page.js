'use client';
import React from 'react';
import Link from 'next/link'; // Correct import statement

const Page = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Link href="/About">About</Link>
      <Link href="/Product">Product</Link>
      <Link href="/Courses">Courses</Link>
    </div>
  );
};

export default Page;
