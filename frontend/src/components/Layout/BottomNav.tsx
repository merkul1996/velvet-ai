import { useLocation, useNavigate } from 'react-router-dom';
import { Tabbar, TabbarLink, ToolbarPane } from 'konsta/react';
import { Heart, Flame, LayoutGrid, MessageCircle, User } from 'lucide-react';

const tabs = [
  { path: '/', icon: Heart, label: 'Свидания' },
  { path: '/adult', icon: Flame, label: '18+' },
  { path: '/feed', icon: LayoutGrid, label: 'Лента' },
  { path: '/chats', icon: MessageCircle, label: 'Чаты' },
  { path: '/profile', icon: User, label: 'Профиль' },
];

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const haptic = (window as any).Telegram?.WebApp?.HapticFeedback;

  return (
    <Tabbar icons labels className="left-0 bottom-0 fixed safe-area-bottom z-50">
      <ToolbarPane>
        {tabs.map(({ path, icon: Icon, label }) => {
          const isActive = path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
          return (
            <TabbarLink
              key={path}
              active={isActive}
              onClick={() => {
                haptic?.impactOccurred('light');
                navigate(path);
              }}
              icon={<Icon size={22} strokeWidth={isActive ? 2.5 : 1.5} className="w-6 h-6" />}
              label={label}
            />
          );
        })}
      </ToolbarPane>
    </Tabbar>
  );
}
