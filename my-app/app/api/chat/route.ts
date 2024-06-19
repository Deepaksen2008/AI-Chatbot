import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { supabase } from '@/app/supabaseClient';
import { v4 as uuidv4 } from 'uuid';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);
// console.log(openai);
export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  console.log(messages);
  const enrichedMessages = messages.map((m: { content: any; role: any; }) => ({
    id: uuidv4(), // Generate UUID for id
    content: m.content,
    role: m.role,
    createdAt: new Date().toISOString(),
  }));
  
  const data = await supabase
  .from('posts')
  .insert(enrichedMessages);
  
  console.log(data);

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: messages.map((message: any) => ({
      content: message.content,
      role: message.role,
    })),
  });

  console.log(response);
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
