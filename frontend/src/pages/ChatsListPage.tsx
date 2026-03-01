import { useNavigate } from 'react-router-dom';
import { Navbar, Block, List, ListItem } from 'konsta/react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function ChatsListPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar title="Чаты" />
      <Block strong inset className="space-y-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[var(--color-text-secondary)]"
        >
          Начни общение с любой девушки — чаты появятся здесь.
        </motion.p>
        <List strong inset>
          <ListItem
            link
            title="Перейти к девушкам"
            after={<MessageCircle size={20} />}
            onClick={() => navigate('/')}
          />
        </List>
      </Block>
    </>
  );
}
