import { useParams, useNavigate } from 'react-router-dom';
import { Navbar, Block, List, ListItem, Range } from 'konsta/react';
import { ChevronLeft } from 'lucide-react';
import { mainGirls } from '../data/mainGirls';
import { adultGirls } from '../data/adultGirls';
import { vipGirls } from '../data/vipGirls';
import { useStore } from '../store/useStore';

const allGirls = [...mainGirls, ...adultGirls, ...vipGirls];

export function FiltersPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { adultSettings, setAdultSettings } = useStore();
  const girl = allGirls.find((g) => g.id === id);

  if (!girl) {
    return (
      <Block strong inset>
        <p>Девушка не найдена</p>
        <button onClick={() => navigate(-1)}>Назад</button>
      </Block>
    );
  }

  const showAdultFilters = girl.section === 'adult' || girl.section === 'vip';

  return (
    <>
      <Navbar
        left={
          <button onClick={() => navigate(-1)} className="flex items-center gap-1">
            <ChevronLeft size={24} />
            Назад
          </button>
        }
        title={`Фильтры: ${girl.name}`}
      />
      <Block strong inset>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Настрой характер общения с {girl.name}
        </p>
        {showAdultFilters && (
          <List strong inset>
            <ListItem
              title="Уровень откровенности"
              after={
                <Range
                  value={adultSettings.explicitness}
                  min={1}
                  max={3}
                  step={1}
                  onChange={(e: any) =>
                    setAdultSettings({ explicitness: Number(e.target.value) as 1 | 2 | 3 })
                  }
                />
              }
            />
            <ListItem title="Настроение" after={adultSettings.mood} />
          </List>
        )}
        {!showAdultFilters && (
          <p className="text-[var(--color-text-muted)]">Фильтры доступны в разделе 18+.</p>
        )}
      </Block>
    </>
  );
}
