'use client';

import { useChat } from 'ai/react';
import { FormEvent } from 'react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <div className="dark:bg-gray-900 p-6 dark:text-white w-full h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-xl font-bold">Vercel AI Chatbot</h1>
      </header>
      <div className="flex-1 overflow-auto m-5 p-6">
        {messages.length > 0 ? (
          messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap mb-2 p-2 rounded-lg dark:bg-gray-800">
              <span className="font-semibold">{m.role === 'user' ? 'User: ' : 'AI: '}</span>
              {m.content}
            </div>
          ))
        ) : null}
      </div>
      <form onSubmit={handleFormSubmit} className="p-4 bg-gray-800 w-full">
        <input
          className="w-full p-2 border border-gray-600 dark:border-gray-500 dark:bg-gray-800 dark:text-white rounded-lg"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
