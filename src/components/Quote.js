import { useState, useEffect } from 'react';

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

  if (loading) return <div>Loading... please wait</div>;

  if (error) {
    return (
      <div>
        An error occurred:
        {error}
      </div>
    );
  }

  return (
    <div className="quote-container">
      <h2>My Quote:</h2>
      {quote && (
        <div>
          <p>{quote.quote}</p>
          <p>
            -
            {quote.author}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quote;
