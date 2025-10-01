// OpenAI API wrapper for Real Estate Education Chatbot

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';

// Real estate education context for the AI
const SYSTEM_PROMPT = `You are an expert real estate education assistant. Your role is to help students learn about:

1. Real Estate Law and Regulations
2. Property Valuation and Appraisal
3. Market Analysis and Investment Strategies
4. Property Management and Maintenance
5. Real Estate Finance and Mortgages
6. Commercial vs Residential Real Estate
7. Real Estate Marketing and Sales
8. Ethics and Professional Standards

Guidelines:
- Provide clear, educational explanations
- Use practical examples when possible
- Reference current market trends when relevant
- Encourage ethical practices in real estate
- Keep responses professional and informative
- Suggest additional learning resources when appropriate

Always maintain a supportive and encouraging tone for students learning real estate concepts.`;

class AIService {
  constructor() {
    this.conversationHistory = [];
  }

  async sendMessage(userMessage) {
    if (!API_KEY) {
      throw new Error('OpenAI API key not configured. Please add VITE_OPENAI_API_KEY to your .env.local file.');
    }

    try {
      // Add user message to conversation history
      this.conversationHistory.push({
        role: 'user',
        content: userMessage
      });

      // Keep conversation history manageable (last 10 messages)
      if (this.conversationHistory.length > 10) {
        this.conversationHistory = this.conversationHistory.slice(-10);
      }

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...this.conversationHistory
          ],
          max_tokens: 500,
          temperature: 0.7,
          presence_penalty: 0.1,
          frequency_penalty: 0.1,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`OpenAI API error: ${errorData.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      const aiMessage = data.choices[0]?.message?.content;

      if (!aiMessage) {
        throw new Error('No response received from OpenAI');
      }

      // Add AI response to conversation history
      this.conversationHistory.push({
        role: 'assistant',
        content: aiMessage
      });

      return aiMessage;

    } catch (error) {
      console.error('AI Service Error:', error);

      // Return fallback response for demo purposes
      if (error.message.includes('API key not configured')) {
        return "I'm a real estate education assistant! I can help you learn about property valuation, market analysis, real estate law, and much more. However, I need to be properly configured with an OpenAI API key to provide detailed responses.";
      }

      return "I apologize, but I'm experiencing technical difficulties. Please try again later or contact support if the issue persists.";
    }
  }

  clearConversation() {
    this.conversationHistory = [];
  }

  // Get conversation history for persistence
  getConversationHistory() {
    return this.conversationHistory;
  }

  // Load conversation history from storage
  setConversationHistory(history) {
    this.conversationHistory = history || [];
  }
}

// Export singleton instance
export default new AIService();