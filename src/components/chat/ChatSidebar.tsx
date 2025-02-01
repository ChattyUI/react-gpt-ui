import React from 'react';
import { Message } from './types';
import { MessageSquare } from 'lucide-react';

interface ChatSidebarProps {
  messages: Message[];
  className?: string;
}

export const ChatSidebar: React.FC<ChatSidebarProps> = ({ messages, className = '' }) => {
  const chatGroups = messages.reduce((groups: { [key: string]: Message[] }, message) => {
    const date = new Date(message.timestamp).toLocaleDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(message);
    return groups;
  }, {});

  return (
    <aside className={`border-r min-w-[250px] p-4 ${className}`}>
      <h2 className="text-xl font-bold mb-4">Chat History</h2>
      <div className="space-y-6">
        {Object.entries(chatGroups).map(([date, messages]) => (
          <div key={date}>
            <h3 className="text-sm font-medium text-gray-500 mb-2">{date}</h3>
            <div className="space-y-2">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-sm truncate">
                    {message.content.slice(0, 30)}...
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};