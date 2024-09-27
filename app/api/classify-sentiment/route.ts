import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { "role": "system", "content": "Classify the sentiment of the following tweet as 'positive,' 'neutral,' or 'negative.' Accuracy is critical, so think twice before responding. Reply with one word only in lowercase." },
        { "role": "user", "content": text }
      ],
    });

    const sentiment = completion.choices[0].message.content;
    return NextResponse.json({ sentiment });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to classify sentiment' }, { status: 500 });
  }
}