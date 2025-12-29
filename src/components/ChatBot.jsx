import React, { useState, useRef, useEffect } from 'react';
import { getChatbotResponse, validateMessage, canSendMessage, updateLastMessageTime } from '../utils/chatbot/api';
import { welcomeMessage, suggestedQuestions } from '../utils/chatbot/knowledgeBase';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', content: welcomeMessage, timestamp: new Date() }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom when new messages arrive
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Handle sending message
    const handleSendMessage = async (messageText = inputMessage) => {
        const trimmedMessage = messageText.trim();

        // Validate message
        if (!validateMessage(trimmedMessage)) {
            return;
        }

        // Check rate limiting
        if (!canSendMessage()) {
            setMessages(prev => [...prev, {
                role: 'bot',
                content: "Please wait a moment before sending another message. 😊",
                timestamp: new Date()
            }]);
            return;
        }

        // Add user message
        const userMessage = {
            role: 'user',
            content: trimmedMessage,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsTyping(true);
        updateLastMessageTime();

        try {
            // Prepare conversation history (last 6 messages for context)
            const conversationHistory = messages
                .slice(-6)
                .map(msg => ({
                    role: msg.role === 'bot' ? 'assistant' : 'user',
                    content: msg.content
                }));

            // Get AI response
            const response = await getChatbotResponse(trimmedMessage, conversationHistory);

            // Add bot response
            setMessages(prev => [...prev, {
                role: 'bot',
                content: response,
                timestamp: new Date()
            }]);
        } catch (error) {
            console.error('Error getting chatbot response:', error);
            setMessages(prev => [...prev, {
                role: 'bot',
                content: "Sorry, I'm having trouble right now. Please try again or use the Contact form! 🙏",
                timestamp: new Date()
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    // Handle suggested question click
    const handleSuggestedQuestion = (question) => {
        setInputMessage(question);
        handleSendMessage(question);
    };

    // Handle key press (Enter to send)
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    // Toggle chat window
    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-20 right-4 w-[350px] h-[480px] bg-base-100 rounded-lg shadow-2xl flex flex-col z-[100] border border-base-300 sm:w-[350px] max-sm:inset-0 max-sm:w-full max-sm:h-full max-sm:rounded-none max-sm:border-0 chatbot-animate-in">
                    {/* Header */}
                    <div className="bg-primary text-primary-content p-4 rounded-t-lg flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                            <h3 className="font-bold text-lg">AI Assistant</h3>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="btn btn-ghost btn-sm btn-circle"
                            aria-label="Close chat"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages Container */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-base-200">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-lg p-3 ${message.role === 'user'
                                        ? 'bg-primary text-primary-content'
                                        : 'bg-base-100 text-base-content border border-base-300'
                                        }`}
                                >
                                    <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
                                    <p className="text-xs opacity-60 mt-1">
                                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-base-100 border border-base-300 rounded-lg p-3">
                                    <div className="flex space-x-2">
                                        <div className="w-2 h-2 bg-base-content opacity-60 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-base-content opacity-60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-2 h-2 bg-base-content opacity-60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Suggested Questions (show only if first message) */}
                        {messages.length === 1 && (
                            <div className="space-y-2">
                                <p className="text-xs text-base-content opacity-60 text-center">Try asking:</p>
                                {suggestedQuestions.map((question, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSuggestedQuestion(question)}
                                        className="btn btn-outline btn-sm w-full text-left justify-start"
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-base-100 border-t border-base-300 rounded-b-lg">
                        <div className="flex gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                                className="input input-bordered flex-1"
                                disabled={isTyping}
                                maxLength={500}
                            />
                            <button
                                onClick={() => handleSendMessage()}
                                disabled={!inputMessage.trim() || isTyping}
                                className="btn btn-primary"
                                aria-label="Send message"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-xs text-base-content opacity-50 mt-2">
                            Powered by Groq AI • Press Enter to send
                        </p>
                    </div>
                </div>
            )}

            {/* Floating Chat Button */}
            <button
                onClick={toggleChat}
                className={`fixed bottom-4 right-4 btn btn-circle btn-primary w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 z-[90] ${isOpen ? 'scale-0' : 'scale-100'
                    }`}
                aria-label="Open chat"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                {/* Notification Badge */}
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full animate-pulse"></span>
            </button>
        </>
    );
};

export default ChatBot;
