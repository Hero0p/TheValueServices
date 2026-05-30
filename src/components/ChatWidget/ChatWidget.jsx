import { useState, useEffect, useRef } from 'react'
import './ChatWidget.css'

const FAQS = [
  {
    id: 'services',
    question: 'What services do you offer?',
    answer: 'We provide comprehensive financial planning, including Wills & Trusts (Estate Planning), Term Life Insurance, Retirement Planning, Fixed Indexed Annuities, Health Insurance, Mortgage Loans, and Tax-Filing & Compliance.'
  },
  {
    id: 'location',
    question: 'Where are you located?',
    answer: 'We operate from Plano, Allen & Irving, TX, serving clients across the Dallas–Fort Worth Area. Visits are strictly by appointment.'
  },
  {
    id: 'appointment',
    question: 'How can I book an appointment?',
    answer: 'You can book an appointment by contacting us directly at info@valueservices.us, calling our Office at 469-708-8009, or our Mobile at 316-730-1808.'
  }
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [chatState, setChatState] = useState('idle') // 'idle' | 'awaiting_message' | 'awaiting_name' | 'awaiting_email' | 'submitted'
  const [inputValue, setInputValue] = useState('')
  const [tempInquiry, setTempInquiry] = useState('')
  const [tempName, setTempName] = useState('')
  const [messages, setMessages] = useState([])

  const chatEndRef = useRef(null)
  const inputRef = useRef(null)

  // Initialize with welcome messages
  useEffect(() => {
    const welcomeMessages = [
      {
        id: 'welcome-1',
        sender: 'bot',
        text: 'Let me know if you have any questions!',
        timestamp: getFormattedTime(),
        options: [
          ...FAQS.map(faq => ({ label: faq.question, action: 'faq', data: faq })),
          { label: 'Leave a message / I have a question', action: 'leave_message' }
        ]
      }
    ]
    setMessages(welcomeMessages)
  }, [])

  // Scroll to bottom when messages change or chat opens
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  const getFormattedTime = () => {
    const now = new Date()
    let hours = now.getHours()
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    return `${hours}:${minutes} ${ampm}`
  }

  const addMessage = (sender, text, options = null) => {
    setMessages(prev => [
      ...prev,
      {
        id: `msg-${Date.now()}-${Math.random()}`,
        sender,
        text,
        timestamp: getFormattedTime(),
        options
      }
    ])
  }

  const handleOptionClick = (option) => {
    // Add user's choice to chat
    addMessage('user', option.label)

    setTimeout(() => {
      if (option.action === 'faq') {
        const faq = option.data
        addMessage('bot', faq.answer)
        
        // Ask if they need more help
        setTimeout(() => {
          addMessage('bot', 'Does this help? Or would you like to leave a message for our advisors?', [
            { label: 'Yes, thank you!', action: 'yes_thanks' },
            { label: 'I want to leave a message', action: 'leave_message' }
          ])
        }, 800)
      } else if (option.action === 'leave_message') {
        addMessage('bot', 'Please enter your message or question below, and I will help you submit it to our team.')
        setChatState('awaiting_message')
        if (inputRef.current) inputRef.current.focus()
      } else if (option.action === 'yes_thanks') {
        addMessage('bot', 'You\'re welcome! Let me know if there is anything else I can help with.', [
          ...FAQS.map(faq => ({ label: faq.question, action: 'faq', data: faq })),
          { label: 'Leave a message / I have a question', action: 'leave_message' }
        ])
      }
    }, 600)
  }

  const handleSend = (e) => {
    if (e) e.preventDefault()
    if (!inputValue.trim()) return

    const userText = inputValue.trim()
    addMessage('user', userText)
    setInputValue('')

    setTimeout(() => {
      if (chatState === 'idle' || chatState === 'awaiting_message') {
        setTempInquiry(userText)
        addMessage('bot', 'I can definitely help you get in touch with our advisors. Please tell me your name so we can address you correctly.')
        setChatState('awaiting_name')
      } else if (chatState === 'awaiting_name') {
        setTempName(userText)
        addMessage('bot', `Thanks, ${userText}! Please enter your email address so we can reach you.`)
        setChatState('awaiting_email')
      } else if (chatState === 'awaiting_email') {
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(userText)) {
          addMessage('bot', 'Please enter a valid email address so we can contact you.')
          return
        }

        // Final submission reply
        addMessage('bot', "Thanks! Your message has been submitted. We'll get back to you here or via email.\n\nWe'll respond as soon as we can.")
        setChatState('submitted')

        // Mock saving data (e.g. log in console or localStorage)
        console.log('Inquiry submitted:', {
          name: tempName,
          email: userText,
          message: tempInquiry
        })

        // Reset to idle after a delay so they can chat again if needed
        setTimeout(() => {
          addMessage('bot', 'How else can I assist you today?', [
            ...FAQS.map(faq => ({ label: faq.question, action: 'faq', data: faq })),
            { label: 'Leave a message / I have a question', action: 'leave_message' }
          ])
          setChatState('idle')
        }, 3000)
      }
    }, 600)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="chat-widget" role="complementary" aria-label="Customer Support Chat">
      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window animate-slide-in">
          {/* Header */}
          <header className="chat-header">
            <button 
              className="chat-header__back" 
              onClick={() => setIsOpen(false)}
              aria-label="Minimize chat window"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="chat-header__info">
              <h2 className="chat-header__title">Contact Us</h2>
              <p className="chat-header__subtitle">We'll respond as soon as we can.</p>
            </div>
            <button 
              className="chat-header__close" 
              onClick={() => setIsOpen(false)}
              aria-label="Close chat window"
            >
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </button>
          </header>

          {/* Messages Body */}
          <div className="chat-body">
            <div className="chat-messages">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`chat-row chat-row--${msg.sender}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="chat-avatar" aria-hidden="true">
                      <span className="material-symbols-outlined">account_balance</span>
                    </div>
                  )}
                  <div className="chat-message-container">
                    <div className="chat-bubble">
                      <div className="chat-bubble__text">
                        {msg.text.split('\n').map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                      
                      {msg.options && msg.options.length > 0 && (
                        <div className="chat-options">
                          {msg.options.map((opt, i) => (
                            <button
                              key={i}
                              className="chat-option-btn"
                              onClick={() => handleOptionClick(opt)}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="chat-meta">
                      {msg.sender === 'bot' ? 'Value Services' : ''} {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
          </div>

          {/* Footer Input */}
          <form className="chat-footer" onSubmit={handleSend}>
            <span className="material-symbols-outlined chat-attach-icon" aria-hidden="true">
              attach_file
            </span>
            <input
              ref={inputRef}
              type="text"
              className="chat-input"
              placeholder={
                chatState === 'awaiting_name'
                  ? 'Enter your name...'
                  : chatState === 'awaiting_email'
                  ? 'Enter your email...'
                  : 'Enter your question or message here'
              }
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              aria-label="Type message"
            />
            <button 
              type="submit" 
              className="chat-send-btn" 
              aria-label="Send message"
              disabled={!inputValue.trim()}
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        className={`chat-toggle-fab ${isOpen ? 'chat-toggle-fab--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close customer support chat" : "Open customer support chat"}
      >
        <span className="material-symbols-outlined">
          {isOpen ? 'close' : 'chat'}
        </span>
      </button>
    </div>
  )
}
