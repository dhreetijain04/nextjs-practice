"use client"
import { useRouter } from "next/navigation";


export default function Orderproducts() {
    const router = useRouter();
    const handleClick = () => {
        console.log("placing your order");
        router.push("/");
    };
  return (
    <>
    <h1> Order the Products </h1>
    <button onClick={handleClick}>Place Order </button>
    </>
  );
}