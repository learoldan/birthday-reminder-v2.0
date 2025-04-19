import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

const DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN as string
const CLIENTID = import.meta.env.VITE_AUTH0_CLIENT_ID as string
const AUDIENCE = import.meta.env.VITE_AUTH0_API_AUDIENCE as string

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Auth0Provider
            domain={DOMAIN}
            clientId={CLIENTID}
            authorizationParams={{
                redirect_uri: window.location.origin,
                audience: AUDIENCE,
            }}
        >
            <App />
        </Auth0Provider>
    </StrictMode>
)
