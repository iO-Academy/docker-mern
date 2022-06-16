import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [testData, setTestData] = useState(null)
  const [testDbData, setTestDbData] = useState(null)

  useEffect(() => {
    const checkApiIsConnected = async () => {
      let data = await fetch(`${process.env.REACT_APP_API_BASE_URL}/testroute`)
      let dbdata = await fetch(`${process.env.REACT_APP_API_BASE_URL}/testdbroute`)
      let res = await data.json()
      let dbres = await dbdata.json()
      setTestData(res)
      setTestDbData(dbres)
    }

    checkApiIsConnected()

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {testData &&
          <p>The Express API is successfully connected!</p>
        }

        {testDbData &&
          <p>MongoDb is successfully connected to the Express API!</p>
        }
      </header>
    </div>
  );
}

export default App;
