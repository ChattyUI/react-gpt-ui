import React from 'react';
import { MessageCircle, Bot } from 'lucide-react';
import { Message } from './types';

interface ChatMessageProps {
  message: Message;
  className?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, className = '' }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''} ${className}`}>
      <div className="flex-shrink-0">
        {isUser ? (
          <MessageCircle className="h-8 w-8" />
        ) : (
          <Bot className="h-8 w-8" />
        )}
      </div>
      <div className={`flex-1 max-w-[80%] rounded-lg p-4 ${
        isUser ? 'bg-blue-500 text-white' : 'bg-gray-100'
      }`}>
        <p className="whitespace-pre-wrap">{message.content}</p>
        <span className="text-xs opacity-70 block mt-2">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};