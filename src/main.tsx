import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from './context/index.tsx'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider>
  <BrowserRouter>
      <App />
  </BrowserRouter>
    </Provider>

  
)
