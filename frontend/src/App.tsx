import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App as KonstaApp } from 'konsta/react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { AppLayout } from './components/Layout/AppLayout';
import { DatingPage } from './pages/DatingPage';
import { AdultPage } from './pages/AdultPage';
import { FeedPage } from './pages/FeedPage';
import { ChatsListPage } from './pages/ChatsListPage';
import { ProfilePage } from './pages/ProfilePage';
import { VipPage } from './pages/VipPage';
import { GirlProfile } from './pages/GirlProfile';
import { ChatPage } from './pages/ChatPage';
import { FiltersPage } from './pages/FiltersPage';

export default function App() {
  return (
    <AppRoot>
      <KonstaApp theme="ios" dark>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<DatingPage />} />
              <Route path="/adult" element={<AdultPage />} />
              <Route path="/feed" element={<FeedPage />} />
              <Route path="/chats" element={<ChatsListPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/vip" element={<VipPage />} />
            </Route>
            <Route path="/girl/:id" element={<GirlProfile />} />
            <Route path="/chat/:id" element={<ChatPage />} />
            <Route path="/filters/:id" element={<FiltersPage />} />
          </Routes>
        </BrowserRouter>
      </KonstaApp>
    </AppRoot>
  );
}
