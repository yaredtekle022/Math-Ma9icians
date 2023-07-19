import { useState, useEffect } from 'react';
import './Quote.css';
import Nav from './NavBar';
import Footer from './Footer';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'X-Api-Key': 'OwCaV/OJar/4YaP1GAknKg==VclRvXDheVvn3CCD',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const [data] = await response.json();
        setQuote(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  let content;
  if (loading) {
    content = <div className="wait-content">Loading...</div>;
  } else if (error) {
    content = (
      <div>
        Oops! An error occurred:
        {error}
      </div>
    );
  } else {
    content = (
      <div className="main-quote">
        <div className="quote-container">
          <h2 className="title-quote">My Favorite Quote:</h2>
          {quote && (
            <div>
              <p className="text-quote">{quote.quote}</p>
              <p className="text-quote">
                -
                {quote.author}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <Nav />
      {content}
      <Footer />
    </>
  );
};
export default Quote;
