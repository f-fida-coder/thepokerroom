import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

interface Message {
  user: string;
  text: string;
  timestamp: string;
}

export default function ChatPanel() {
  const [messages] = useState<Message[]>([
    { user: 'Player1', text: 'Good luck everyone!', timestamp: '10:30' },
    { user: 'Player2', text: 'Nice hand!', timestamp: '10:31' },
    { user: 'Player3', text: 'Thanks!', timestamp: '10:32' }
  ]);
  const [input, setInput] = useState('');

  return (
    <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl flex flex-col h-[400px]">
      <div className="flex items-center gap-2 p-4 border-b border-white/10">
        <MessageCircle className="w-5 h-5 text-amber-400" />
        <h3 className="text-lg font-semibold text-white">Table Chat</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-3">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-sm font-semibold text-amber-400">{msg.user}</span>
              <span className="text-xs text-gray-500">{msg.timestamp}</span>
            </div>
            <p className="text-sm text-gray-300">{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-white/10">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
          <button className="bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 text-white p-2 rounded-lg transition-all transform hover:scale-105">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
