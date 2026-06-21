import { useState, useEffect } from 'react';
import './Sessions.css';

const SESSIONS_API_URL = 'https://script.google.com/macros/s/AKfycbxgERWeh2wdNfPJw8or5O1urWCEO5T7ronUrV53P5vOvMpRdhXdiv4V6aXv1JbxzFZQow/exec';

function Sessions() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popupImageUrl, setPopupImageUrl] = useState(null);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await fetch(SESSIONS_API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch sessions');
        }
        const data = await response.json();
        
        // Sort sessions by upcoming date
        // Assuming data is an array of objects
        // Some Google Apps Scripts return { data: [...] } or just [...]
        const sessionsData = Array.isArray(data) ? data : (data.data || []);
        
        const sortedSessions = sessionsData.sort((a, b) => {
          const dateA = new Date(a.Date);
          const dateB = new Date(b.Date);
          return dateA - dateB;
        });

        // Filter out past sessions if needed, but for now we'll just sort them.
        setSessions(sortedSessions);
      } catch (err) {
        console.error("Error fetching sessions:", err);
        setError('Failed to load upcoming sessions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  // Format date utility
  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    } catch {
      return dateString;
    }
  };

  // Format time utility
  const formatTime = (timeString) => {
    if (!timeString) return '';
    try {
      const dateObj = new Date(timeString);
      // Check if it's a valid date object and likely an ISO string from Sheets
      if (!isNaN(dateObj.getTime()) && String(timeString).includes('T')) {
         return dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
      }
      return String(timeString);
    } catch {
      return String(timeString);
    }
  };

  const SessionCard = ({ session, index, onOpenPopup }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className={`session-card animate-fade-in-up delay-${(index % 5) + 1}`}>
        <div className="session-card-header">
          <h3 className="headline-md">{session.Title}</h3>
        </div>
        
        <div className="session-card-body">
          <div className="session-description-container">
            <p className={`session-description body-md ${isExpanded ? 'expanded' : ''}`}>
              {session.Description}
            </p>
            {session.Description && session.Description.length > 150 && (
              <button 
                className="btn-text-expand" 
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Show Less' : 'Read More'}
              </button>
            )}
          </div>
          
          <ul className="session-details">
            {session.Date && (
              <li>
                <span className="material-symbols-outlined">calendar_today</span>
                <span className="body-md">{formatDate(session.Date)}</span>
              </li>
            )}
            {session.Time && (
              <li>
                <span className="material-symbols-outlined">schedule</span>
                <span className="body-md">{formatTime(session.Time)}</span>
              </li>
            )}
            {session.Location && (
              <li>
                <span className="material-symbols-outlined">location_on</span>
                <span className="body-md">{session.Location}</span>
              </li>
            )}
          </ul>
        </div>

        <div className="session-card-footer">
          <div className="session-actions">
            {session.RegistrationLink ? (
              <a 
                href={session.RegistrationLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Register Now
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            ) : (
              <button className="btn-secondary" disabled>
                Registration Closed
              </button>
            )}
            {session.LearnMoreLink && (
              <button 
                onClick={() => {
                  const isImage = session.LearnMoreLink.match(/\.(jpeg|jpg|gif|png|webp)(\?.*)?$/i);
                  if (isImage) {
                    onOpenPopup(session.LearnMoreLink);
                  } else {
                    window.open(session.LearnMoreLink, '_blank', 'noopener,noreferrer');
                  }
                }}
                className="btn-outline"
              >
                Learn More
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="sessions-page">
      {/* Hero Section */}
      <section className="sessions-hero">
        <div className="container">
          <div className="sessions-hero-content animate-fade-in-up">
            <h1 className="display-lg">Upcoming Sessions & Workshops</h1>
            <p className="body-lg">
              Join us for our latest events designed to elevate your skills and empower your business.
            </p>
          </div>
        </div>
      </section>

      {/* Sessions Content */}
      <section className="sessions-content">
        <div className="container">
          {loading && (
            <div className="sessions-loading animate-fade-in">
              <div className="spinner"></div>
              <p className="body-md">Loading upcoming sessions...</p>
            </div>
          )}

          {error && (
            <div className="sessions-error animate-fade-in">
              <span className="material-symbols-outlined filled">error</span>
              <p className="body-md">{error}</p>
              <button className="btn-retry" onClick={() => window.location.reload()}>
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && sessions.length === 0 && (
            <div className="sessions-empty animate-fade-in">
              <span className="material-symbols-outlined">event_busy</span>
              <p className="headline-md">No upcoming sessions found.</p>
              <p className="body-md">Please check back later for new events.</p>
            </div>
          )}

          {!loading && !error && sessions.length > 0 && (
            <div className="sessions-grid">
              {sessions.map((session, index) => (
                <SessionCard key={index} session={session} index={index} onOpenPopup={setPopupImageUrl} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {popupImageUrl && (
        <div className="sessions-modal-overlay animate-fade-in" onClick={() => setPopupImageUrl(null)}>
          <div className="sessions-modal-content animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button className="sessions-modal-close" onClick={() => setPopupImageUrl(null)}>
              <span className="material-symbols-outlined">close</span>
            </button>
            <img src={popupImageUrl} alt="Learn More" className="sessions-modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Sessions;
