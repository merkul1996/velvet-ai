import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar, Block, Button } from 'konsta/react';
import { MessageCircle, Heart, SlidersHorizontal, ChevronLeft } from 'lucide-react';
import { mainGirls } from '../data/mainGirls';
import { adultGirls } from '../data/adultGirls';
import { vipGirls } from '../data/vipGirls';

const allGirls = [...mainGirls, ...adultGirls, ...vipGirls];

export function GirlProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const girl = allGirls.find((g) => g.id === id);

  if (!girl) {
    return (
      <Block strong inset>
        <p>Девушка не найдена</p>
        <Button onClick={() => navigate(-1)}>Назад</Button>
      </Block>
    );
  }

  return (
    <>
      <Navbar
        left={
          <button onClick={() => navigate(-1)} className="flex items-center gap-1">
            <ChevronLeft size={24} />
            Назад
          </button>
        }
        title={girl.name}
      />
      <Block strong inset className="p-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] relative">
            <img
              src={girl.avatar}
              alt={girl.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${girl.name}&background=e91e8c&color=fff&size=400`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h1 className="text-2xl font-bold text-white">{girl.name}, {girl.age}</h1>
              <p className="text-white/90">{girl.role || girl.traits.join(' · ')}</p>
            </div>
          </div>
          <div className="p-4 space-y-4">
            <p className="text-[var(--color-text-secondary)]">{girl.bio}</p>
            <div className="flex flex-wrap gap-2">
              {girl.traits.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-white/10 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                className="flex-1 gradient-pink"
                onClick={() => navigate(`/chat/${girl.id}`)}
              >
                <MessageCircle size={20} className="mr-2" />
                Написать
              </Button>
              <Button
                className="flex-1"
                onClick={() => navigate(`/filters/${girl.id}`)}
              >
                <SlidersHorizontal size={20} className="mr-2" />
                Фильтры
              </Button>
            </div>
          </div>
        </motion.div>
      </Block>
    </>
  );
}
