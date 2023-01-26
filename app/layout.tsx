import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <h1 className='fw-bold flex-sm-row '>To do App with Next 13</h1>
        {children}
        </body>
    </html>
  )
}
