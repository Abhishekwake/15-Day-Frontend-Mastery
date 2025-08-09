import Image from "next/image";
import Hello from '../components/Hello';
export default function Home() {
console.log("👀 I am a server component");
  return (
    <>
    <h1 className="text-3xl text-center">Hello World Im NextJS</h1>
    <Hello/>
    </> 
  );
}
