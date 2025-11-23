// Groq API integration for chatbot
import { systemPrompt } from './knowledgeBase';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

/**
 * Send a message to Groq API and get AI response
 * @param {string} userMessage - The user's message
 * @param {Array} conversationHistory - Previous messages for context
 * @returns {Promise<string>} - AI response
 */
export const getChatbotResponse = async (userMessage, conversationHistory = []) => {
    try {
        // Check if API key is configured
        if (!GROQ_API_KEY) {
            throw new Error('Groq API key not configured. Please add VITE_GROQ_API_KEY to your .env file.');
        }

        // Prepare messages array with system prompt and conversation history
        const messages = [
            {
                role: 'system',
                content: systemPrompt
            },
            ...conversationHistory,
            {
                role: 'user',
                content: userMessage
            }
        ];

        // Make API call to Groq
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant', // Fast and efficient model
                messages: messages,
                temperature: 0.7, // Balanced creativity
                max_tokens: 200, // Keep responses concise
                top_p: 0.9,
                stream: false
            })
        });

        // Check if request was successful
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Failed to get response from AI');
        }

        // Parse response
        const data = await response.json();
        const aiResponse = data.choices[0]?.message?.content;

        if (!aiResponse) {
            throw new Error('No response from AI');
        }

        return aiResponse.trim();

    } catch (error) {
        console.error('Chatbot API Error:', error);

        // Return user-friendly error message
        if (error.message.includes('API key')) {
            return "Sorry, the chatbot is not configured yet. Please contact the site owner.";
        } else if (error.message.includes('rate limit')) {
            return "I'm getting too many requests right now. Please try again in a moment! 😅";
        } else {
            return "Oops! I'm having trouble connecting right now. Please try again or use the Contact form. 🙏";
        }
    }
};

/**
 * Validate and sanitize user input
 * @param {string} message - User message
 * @returns {boolean} - Whether message is valid
 */
export const validateMessage = (message) => {
    if (!message || typeof message !== 'string') {
        return false;
    }

    const trimmed = message.trim();

    // Check length
    if (trimmed.length === 0 || trimmed.length > 500) {
        return false;
    }

    return true;
};

/**
 * Rate limiting - check if user can send message
 * @returns {boolean} - Whether user can send message
 */
export const canSendMessage = () => {
    const lastMessageTime = localStorage.getItem('chatbot_last_message');

    if (!lastMessageTime) {
        return true;
    }

    const timeSinceLastMessage = Date.now() - parseInt(lastMessageTime);
    const MIN_INTERVAL = 2000; // 2 seconds between messages

    return timeSinceLastMessage >= MIN_INTERVAL;
};

/**
 * Update last message timestamp
 */
export const updateLastMessageTime = () => {
    localStorage.setItem('chatbot_last_message', Date.now().toString());
};
