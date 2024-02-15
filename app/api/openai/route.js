import { NextResponse } from "next/server";

export async function POST(req){
    const res = await req.json();
    return NextResponse.json({"msg":"Post Success this is a message from a openai route"})
}