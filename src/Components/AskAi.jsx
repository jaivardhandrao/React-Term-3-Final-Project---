import React, { useState } from 'react';

const AskAi = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-thinking-exp-01-21:generateContent';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: input },
                {
                  text: `
              You are a shopping assistant AI. Only respond to queries strictly related to shopping, products, or purchasing advice. If the query is unrelated to shopping in any way, reply with exactly: "No Answer" — do not elaborate or add anything else.
              
              When answering valid shopping-related queries:
              - Provide clear, concise, well-formatted text.
              - Do NOT use bold, italics, underlines, emojis, or markdown.
              - Always suggest relevant products or categories based on the query.
              - Keep your tone professional and informative.
              
              Examples:
              - Valid: "Best smartphones under 30000?" → Answer with product suggestions.
              - Invalid: "Who is the prime minister?" → Reply with "No Answer"
                  `
                }
              ]
            }
          ]
        }),
      });

      const data = await res.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
      setResponse(text);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f4f4fe] flex items-center justify-center px-4 py-10">
      <div className="bg-white text-[#1f1f1f] p-8 rounded-xl shadow-2xl w-full max-w-3xl border border-[#d7d7f9]">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#3b2fc7]">Ask AI</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything related to shopping..."
            className="w-full p-4 rounded-lg border border-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#7a67f1] mb-4 placeholder-[#6b6b6b] bg-[#f7f7ff]"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#5b45e5] hover:bg-[#4433c7] text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            {loading ? 'Thinking...' : 'Ask Now'}
          </button>
        </form>
        <div className={`bg-[#f4f4fe] p-4 rounded-lg min-h-[120px] border border-[#ddd] transition-opacity duration-200 ${loading ? 'opacity-60' : 'opacity-100'}`}>
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#5b45e5]"></div>
            </div>
          ) : (
            <p id="response" className="whitespace-pre-wrap text-[#333]">{response}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AskAi;