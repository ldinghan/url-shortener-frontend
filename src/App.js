import './App.css';
import UrlForm from './components/UrlForm';
import ErrorMessage from './components/ErrorMessage';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = 'URL Shortener';
  }, []);

  return (
    <div className="App">
      <ErrorMessage></ErrorMessage>
      <UrlForm></UrlForm>
    </div>
  );
}

export default App;
