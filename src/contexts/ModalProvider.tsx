import { ReactNode, createContext } from 'react';

interface ModalContextType {
  text: string;
}

interface ModalProviderType {
  children: ReactNode;
}

export const ModalContext = createContext<ModalContextType>({ text: 'green' });

function ModalProvider({ children }: ModalProviderType) {
  return (
    <ModalContext.Provider value={{ text: '' }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
