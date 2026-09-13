"use client";



export default function EroorBoundary({error}:{
    error: Error}) {
  return (
    <>
    <h1> {error.message} </h1>
    </>
  );
}