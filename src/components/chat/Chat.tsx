import React from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatSidebar } from './ChatSidebar';
import { ChatInput } from './ChatInput';
import type { ChatProps } from './types';

export const Chat: React.FC<ChatProps> = ({
  messages,
  onSendMessage,
  isLoading = false,
  className = '',
  sidebarClassName = '',
  chatClassName = '',
  inputClassName = '',
}) => {
  return (
    <div className={`flex h-screen ${className}`}>
      <ChatSidebar messages={messages} className={sidebarClassName} />
      
      <div className={`flex-1 flex flex-col ${chatClassName}`}>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
        
        <div className="p-4 border-t">
          <ChatInput
            onSendMessage={onSendMessage}
            isLoading={isLoading}
            className={inputClassName}
          />
        </div>
      </div>
    </div>
  );
};