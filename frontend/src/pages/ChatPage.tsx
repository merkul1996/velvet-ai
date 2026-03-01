import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Messages, Message, Block, Button } from 'konsta/react';
import { ChevronLeft, Send } from 'lucide-react';
import { mainGirls } from '../data/mainGirls';
import { adultGirls } from '../data/adultGirls';
import { vipGirls } from '../data/vipGirls';

const allGirls = [...mainGirls, ...adultGirls, ...vipGirls];

export function ChatPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const girl = allGirls.find((g) => g.id === id);

  useEffect(() => {
    if (girl && messages.length === 0) {
      setMessages([
        { text: `Привет! Я ${girl.name}. ${girl.bio}`, isUser: false },
      ]);
    }
  }, [girl, messages.length]);

  if (!girl) {
    return (
      <div className="p-4">
        <p>Чат не найден</p>
        <button onClick={() => navigate(-1)}>Назад</button>
      </div>
    );
  }

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { text, isUser: true }]);
    setInput('');
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { text: 'О, интересно! Расскажи ещё...', isUser: false },
      ]);
    }, 500);
  };

  return (
    <>
      <Navbar
        left={
          <button onClick={() => navigate(-1)} className="flex items-center gap-1">
            <ChevronLeft size={24} />
            Назад
          </button>
        }
        title={girl.name}
      />
      <Messages className="pb-20">
        {messages.map((msg, i) => (
          <Message
            key={i}
            type={msg.isUser ? 'sent' : 'received'}
            text={msg.text}
            name={!msg.isUser ? girl.name : undefined}
            avatar={
              !msg.isUser ? (
                <img src={girl.avatar} alt="" className="w-8 h-8 rounded-full object-cover" onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${girl.name}&background=e91e8c&color=fff`;
                }} />
              ) : undefined
            }
          />
        ))}
      </Messages>
      <Block className="fixed bottom-0 left-0 right-0 safe-area-bottom p-2 flex gap-2 bg-[var(--color-bg-primary)]">
        <input
          className="flex-1 rounded-xl bg-white/10 px-4 py-2 text-white placeholder-white/50 outline-none"
          placeholder="Сообщение..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button className="gradient-pink" onClick={handleSend}>
          <Send size={20} />
        </Button>
      </Block>
    </>
  );
}
