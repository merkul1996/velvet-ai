import { create } from 'zustand';
import type { Relationship, AdultSettings } from '../types';

interface UserState {
  userId: string | null;
  isAgeVerified: boolean;
  isVipUnlocked: boolean;
  relationships: Record<string, Relationship>;
  adultSettings: AdultSettings;
  setUserId: (id: string | null) => void;
  setAgeVerified: (v: boolean) => void;
  setVipUnlocked: (v: boolean) => void;
  setRelationship: (girlId: string, rel: Partial<Relationship>) => void;
  setAdultSettings: (s: Partial<AdultSettings>) => void;
}

const defaultAdultSettings: AdultSettings = {
  mood: 'playful',
  explicitness: 2,
  scenario: 'first_meet',
  initiative: 'mutual',
  pace: 'passionate',
};

export const useStore = create<UserState>((set) => ({
  userId: null,
  isAgeVerified: false,
  isVipUnlocked: false,
  relationships: {},
  adultSettings: defaultAdultSettings,

  setUserId: (userId) => set({ userId }),
  setAgeVerified: (isAgeVerified) => set({ isAgeVerified }),
  setVipUnlocked: (isVipUnlocked) => set({ isVipUnlocked }),
  setRelationship: (girlId, rel) =>
    set((s) => ({
      relationships: {
        ...s.relationships,
        [girlId]: { ...s.relationships[girlId], girlId, ...rel } as Relationship,
      },
    })),
  setAdultSettings: (s) =>
    set((state) => ({ adultSettings: { ...state.adultSettings, ...s } })),
}));
