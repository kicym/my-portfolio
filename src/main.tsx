import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {GlobalStyle} from "./styles/Global.styled";
import './i18n';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyle/>
        <App/>
    </StrictMode>,
)
