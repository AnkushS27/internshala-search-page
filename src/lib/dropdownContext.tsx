import React, { createContext, useContext, useState } from 'react';

type DropdownContextType = {
  isDropdownOpen: boolean;
  setDropdownOpen: (isOpen: boolean) => void;
};

const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

export const DropdownProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const setDropdownOpen = (isOpen: boolean) => {
    setIsDropdownOpen(isOpen);
  };

  return (
    <DropdownContext.Provider value={{ isDropdownOpen, setDropdownOpen }}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw new Error('useDropdown must be used within a DropdownProvider');
  }
  return context;
};