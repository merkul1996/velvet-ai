import { Navbar, Block, List, ListItem } from 'konsta/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, Settings, Crown } from 'lucide-react';

export function ProfilePage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar title="Профиль" />
      <Block strong inset>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center py-6"
        >
          <div className="w-20 h-20 rounded-full gradient-pink flex items-center justify-center text-white text-2xl font-bold mb-2">
            <User size={40} />
          </div>
          <p className="font-semibold">Пользователь</p>
          <p className="text-[var(--color-text-secondary)] text-sm">Velvet AI</p>
        </motion.div>
        <List strong inset>
          <ListItem link title="Настройки" after={<Settings size={20} />} />
          <ListItem link title="VIP статус" after={<Crown size={20} />} onClick={() => navigate('/vip')} />
        </List>
      </Block>
    </>
  );
}
