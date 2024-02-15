"use client"

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [message,setMessage] = useState("");

  const text = {prompt:"hey this is prompt for chatgpt"}

  useEffect(()=>{
    const getResponse = async()=>{
      const response = await 
      axios.post('/api/openai',text);
      console.log("this is response",response.data.msg);
      setMessage(response.data.msg);
    }
    getResponse();
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello nextjs
      {message}
    </main>
  );
}
