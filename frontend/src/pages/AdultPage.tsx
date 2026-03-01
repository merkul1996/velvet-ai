import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Block, Button, Dialog } from 'konsta/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock } from 'lucide-react';
import { adultGirls } from '../data/adultGirls';
import { useStore } from '../store/useStore';
import { GirlCard } from '../components/GirlCard';

export function AdultPage() {
  const navigate = useNavigate();
  const { isAgeVerified, setAgeVerified } = useStore();
  const [showAgeGate, setShowAgeGate] = useState(false);

  const handleCardClick = () => {
    if (!isAgeVerified) {
      setShowAgeGate(true);
    }
  };

  if (!isAgeVerified) {
    return (
      <>
        <Navbar title="18+" />
        <Block strong inset>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Lock size={48} className="mx-auto mb-4 text-[var(--color-text-muted)]" />
            <p className="text-lg font-semibold mb-2">Контент 18+</p>
            <p className="text-[var(--color-text-secondary)] mb-6">
              Подтвердите возраст для доступа к разделу
            </p>
            <Button
              className="gradient-pink"
              onClick={() => setShowAgeGate(true)}
            >
              Подтвердить возраст
            </Button>
          </motion.div>
        </Block>
        <Dialog
          opened={showAgeGate}
          onBackdropClick={() => setShowAgeGate(false)}
          title="Подтверждение 18+"
        >
          <div className="p-4 space-y-4">
            <p className="text-sm text-[var(--color-text-secondary)]">
              Мне исполнилось 18 лет, я согласен с правилами использования взрослого контента.
            </p>
            <div className="flex gap-2">
              <Button onClick={() => setShowAgeGate(false)}>Отмена</Button>
              <Button
                className="gradient-pink"
                onClick={() => {
                  setAgeVerified(true);
                  setShowAgeGate(false);
                }}
              >
                Подтвердить
              </Button>
            </div>
          </div>
        </Dialog>
      </>
    );
  }

  return (
    <>
      <Navbar title="18+" />
      <Block strong inset className="space-y-4">
        <p className="text-[var(--color-text-secondary)] text-sm">
          15 ролевых типажей. Настрой поведение в фильтрах.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {adultGirls.map((girl, i) => (
            <GirlCard key={girl.id} girl={girl} index={i} />
          ))}
        </div>
      </Block>
    </>
  );
}
