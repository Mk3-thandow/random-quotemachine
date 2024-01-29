import React, {useState, useEffect} from 'react'
import './App.css';
import BackgroundImage from './backgroundImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import debounce from 'lodash/debounce';



function App() {
  const [quote, setQuote] = useState ('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.log('Error fetching quote:', error);
    }
  };
  const debouncedFetchQuote = debounce(fetchQuote, 500);
  useEffect(() => {
    debouncedFetchQuote();
  }, []);
  const handleNewQuoteClick = () => {
    debouncedFetchQuote();
  };

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;
    try{
      window.open(tweetUrl, '_blank');
    } catch (error) {
    console.error('Error opening Twitter window:', error);
      alert('Error sharing on Twitter. Please try again later.');
    }
  };
  

  return (
    <BackgroundImage>
    <div className="App">
    <div className="title">
    <h1>GeekyQuote Hub</h1>
    </div>
    <div className="quote-container">

      <div id="quote-box" >

        <div id="text">{quote}</div>

        <div id="author">- {author}</div>

        <div className ="social-icons"> 
        <a href="#" onClick={tweetQuote} aria-label="Share Quote on Twitter"> 
        <FontAwesomeIcon icon={faTwitter} />
        </a>
        </div>

        </div>
        <div className="button-container">
        <button id="new-quote" onClick={handleNewQuoteClick}>
          New Quote
        </button>
      </div>

    </div>
    <div className="footer">
          &copy; Mk3_thandow {new Date().getFullYear()}
        </div>
    </div>
    
    </BackgroundImage>
  );
}

export default App;
