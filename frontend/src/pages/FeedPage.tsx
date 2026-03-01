import { Navbar, Block } from 'konsta/react';
import { motion } from 'framer-motion';

export function FeedPage() {
  return (
    <>
      <Navbar title="Лента" />
      <Block strong inset>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[var(--color-text-secondary)]"
        >
          Посты и сторис девушек появятся здесь. Девушки публикуют мысли, фото и обсуждают тебя.
        </motion.p>
      </Block>
    </>
  );
}
