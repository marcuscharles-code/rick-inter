import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import config from './chatbotConfig';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const ChatBotComponent = () => {
    return (
        <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
        />
    );
};

export default ChatBotComponent;
