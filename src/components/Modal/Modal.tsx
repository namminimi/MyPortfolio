import ModalProvider from '@/contexts/ModalProvider';
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  cloneElement,
} from 'react';
import { createPortal } from 'react-dom';

interface ModalType {
  children: ReactNode;
}

interface WindowType {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}

function Window({ children }: WindowType) {
  return createPortal(
    <div className='absolute-center !fixed h-full w-full overflow-hidden'>
      <div className='inset-0 z-floating fixed flex h-full w-full items-center justify-center bg-black opacity-50'></div>
      <div className='modal fixed'>{cloneElement(children)}</div>
    </div>,
    document.body,
  );
}

function Modal({ children }: ModalType) {
  return <ModalProvider>{children}</ModalProvider>;
}

Modal.Window = Window;

export default Modal;
