"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface ContactModalContextType {
  isContactOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(
  undefined
);

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);

  return (
    <ContactModalContext.Provider
      value={{ isContactOpen, openContactModal, closeContactModal }}
    >
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (context === undefined) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
};