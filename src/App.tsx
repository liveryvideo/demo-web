import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PlayerConfigurationProvider } from '@/contexts/PlayerConfigurationContext'
import { PlayerProvider } from '@/contexts/PlayerContext'

import DefaultLayout from '@/components/Layouts/DefaultLayout'
import DemoPage from '@/components/Pages/DemoPage'

const App = () => {
  return (
    <BrowserRouter>
      <PlayerConfigurationProvider>
        <PlayerProvider>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<DemoPage />} />
            </Route>
          </Routes>
        </PlayerProvider>
      </PlayerConfigurationProvider>
    </BrowserRouter>
  )
}

export default App
