"use client"

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  // const [message,setMessage] = useState();
  const [question,setQuestion] = useState([]);
  const [alert,setAlert] = useState("");
  const text = {text:"In summary, an API endpoint is a specific location within an API that accepts requests and sends back responses. It's a way for different systems and applications to communicate with each other, by sending and receiving information and instructions via the endpoint."}

  const getResponse = async()=>{
    setAlert("Generating Questions Please wait...")
    const response = await 
    axios.post('/api/openai',text);
    console.log("this is full response",response);
    console.log("this is data in response",response.data);
    console.log("this is questions inside data",response);
    setQuestion(response.data.questions);
    if(question){
      setAlert("Generated Hurray");
    }
    console.log("this is question",question);
  }

  const handleQuestions =()=>{
    
    getResponse();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
      <button onClick={handleQuestions} 
      style={{backgroundColor:"black",color:"white"}}
      >
        Genrate Questions
      </button>
      <h1>{alert}</h1>
      {question?.map((item, index) => (
        <div key={index}>
          <p>{item?.question}</p>
          <ul>
            {item?.options?.map((option, optionIndex) => (
              <li key={optionIndex}>{option}</li>
            ))}
          </ul>
          <br/>
         <h1>Question end</h1>
         <br/>
        </div>
      ))}
    </div>
      
    </main>
  );
}
