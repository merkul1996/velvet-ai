import { Navbar, Block } from 'konsta/react';
import { motion } from 'framer-motion';
import { mainGirls } from '../data/mainGirls';
import { useStore } from '../store/useStore';
import { GirlCard } from '../components/GirlCard';

export function DatingPage() {
  const { relationships } = useStore();

  return (
    <>
      <Navbar title="Velvet AI" className="gradient-pink" />
      <Block strong inset className="space-y-4">
        <p className="text-[var(--color-text-secondary)] text-sm">
          15 уникальных девушек с характером. Выбери, с кем хочешь познакомиться.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {mainGirls.map((girl, i) => (
            <GirlCard
              key={girl.id}
              girl={girl}
              relationshipLevel={relationships[girl.id]?.level ?? 0}
              index={i}
            />
          ))}
        </div>
      </Block>
    </>
  );
}
