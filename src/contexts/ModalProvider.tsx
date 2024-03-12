import { ReactNode, createContext, useState } from 'react';

interface ModalContextType {
  open: () => void;
  close: () => void;
  isModal: boolean;
}

interface ModalProviderType {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextType>({
  open: () => {},
  close: () => {},
  isModal: false,
});

function ModalProvider({ children }: ModalProviderType) {
  const [isModal, setIsModal] = useState(false);

  const close = () => {
    setIsModal(false);
  };
  const open = () => {
    setIsModal(true);
  };
  return (
    <ModalContext.Provider value={{ open, close, isModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
