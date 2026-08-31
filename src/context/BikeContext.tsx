'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface BikeContextType {
  wishlist: string[];
  toggleWishlist: (bikeId: string) => void;
  isInWishlist: (bikeId: string) => boolean;
  compareList: string[];
  toggleCompare: (bikeId: string) => void;
  isInCompare: (bikeId: string) => boolean;
  clearCompare: () => void;
}

const BikeContext = createContext<BikeContextType | undefined>(undefined);

export function BikeProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<string[]>([]);

  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem('ridehub_wishlist');
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
      const savedCompare = localStorage.getItem('ridehub_compare');
      if (savedCompare) {
        setCompareList(JSON.parse(savedCompare));
      }
    } catch (e) {
      console.error('Failed to parse storage:', e);
    }
  }, []);

  const toggleWishlist = (bikeId: string) => {
    setWishlist((prev) => {
      const updated = prev.includes(bikeId)
        ? prev.filter((id) => id !== bikeId)
        : [...prev, bikeId];
      localStorage.setItem('ridehub_wishlist', JSON.stringify(updated));
      return updated;
    });
  };

  const isInWishlist = (bikeId: string) => wishlist.includes(bikeId);

  const toggleCompare = (bikeId: string) => {
    setCompareList((prev) => {
      let updated: string[];
      if (prev.includes(bikeId)) {
        updated = prev.filter((id) => id !== bikeId);
      } else {
        if (prev.length >= 3) {
          alert('You can compare up to 3 motorcycles at a time.');
          return prev;
        }
        updated = [...prev, bikeId];
      }
      localStorage.setItem('ridehub_compare', JSON.stringify(updated));
      return updated;
    });
  };

  const isInCompare = (bikeId: string) => compareList.includes(bikeId);

  const clearCompare = () => {
    setCompareList([]);
    localStorage.removeItem('ridehub_compare');
  };

  return (
    <BikeContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        compareList,
        toggleCompare,
        isInCompare,
        clearCompare,
      }}
    >
      {children}
    </BikeContext.Provider>
  );
}

export function useBikeContext() {
  const context = useContext(BikeContext);
  if (!context) {
    throw new Error('useBikeContext must be used within a BikeProvider');
  }
  return context;
}
