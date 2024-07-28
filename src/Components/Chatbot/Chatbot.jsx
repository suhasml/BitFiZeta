import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const Chatbot = () => {
    const handleNewUserMessage = async (newMessage) => {
        try {
            // Send user input to the API
            const response = await fetch('https://faqchatbotdemo-1-j7382467.deta.app/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: newMessage }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch response from the API');
            }

            const data = await response.json();

            // Display API response as chatbot's message
            addResponseMessage(data.response);
        } catch (error) {
            console.error('Error fetching API response:', error);
        }
    };

    return (
        <Widget
            handleNewUserMessage={handleNewUserMessage}
            title="FAQ Chatbot"
            subtitle="Ask me anything!"
        />
    );
};

export default Chatbot;