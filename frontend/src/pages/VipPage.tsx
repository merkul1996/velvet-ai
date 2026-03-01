import { Navbar, Block } from 'konsta/react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';
import { vipGirls } from '../data/vipGirls';
import { GirlCard } from '../components/GirlCard';

export function VipPage() {
  return (
    <>
      <Navbar title="VIP Секрет" />
      <Block strong inset className="space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="gradient-vip rounded-2xl p-4 flex items-center gap-3"
        >
          <Crown size={32} className="text-yellow-300" />
          <div>
            <p className="font-bold">5 элитных девушек</p>
            <p className="text-sm opacity-90">Максимальная раскрепощённость</p>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-3">
          {vipGirls.map((girl, i) => (
            <GirlCard key={girl.id} girl={girl} index={i} />
          ))}
        </div>
      </Block>
    </>
  );
}
