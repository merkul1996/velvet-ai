import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from 'konsta/react';
import { Heart } from 'lucide-react';
import type { Girl } from '../types';

interface GirlCardProps {
  girl: Girl;
  relationshipLevel?: number;
  index?: number;
}

export function GirlCard({ girl, relationshipLevel = 0, index = 0 }: GirlCardProps) {
  const navigate = useNavigate();
  const levelPercent = Math.min(100, relationshipLevel);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        className="overflow-hidden cursor-pointer"
        onClick={() => navigate(`/girl/${girl.id}`)}
      >
        <div className="relative aspect-[3/4]">
          <img
            src={girl.avatar}
            alt={girl.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${girl.name}&background=e91e8c&color=fff`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-lg">{girl.name}</h3>
                <p className="text-white/80 text-sm">{girl.age} лет · {girl.traits[0]}</p>
              </div>
              {girl.isOnline && (
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              )}
            </div>
            {relationshipLevel > 0 && (
              <div className="mt-2">
                <div className="h-1 rounded-full bg-white/20 overflow-hidden">
                  <motion.div
                    className="h-full gradient-pink"
                    initial={{ width: 0 }}
                    animate={{ width: `${levelPercent}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Heart size={12} className="text-pink-400" fill="currentColor" />
                  <span className="text-white/70 text-xs">{levelPercent}%</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
