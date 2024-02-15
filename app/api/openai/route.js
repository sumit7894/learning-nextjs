import { ChatOpenAI } from "@langchain/openai";
import { NextResponse } from "next/server";

const openai = process.env.OPENAI_API_KEY;

export async function POST(req){
    const {text} = await req.json();
    // console.log("this is text",text);
    const chatModel = new ChatOpenAI({
        openAIApiKey: openai,
      });

      let final_result = await chatModel.invoke(`
      From the following data generate the 5 mcq questions with 4 options
      and one correct answer. Return the result in json format
      
      ${text}
      `)
      const gptResponse = final_result.content;
      console.log("this is gpt response",gptResponse);
    return new NextResponse(gptResponse)

    // return NextResponse.json("hello");   
}