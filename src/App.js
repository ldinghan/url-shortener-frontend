import './App.css';
import UrlForm from './components/UrlForm';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = 'URL Shortener';
  }, []);

  return (
    <div className="App">
      <UrlForm></UrlForm>
    </div>
  );
}

export default App;
