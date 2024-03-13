import ModalProvider, { ModalContext } from '@/contexts/ModalProvider';
import {
  Dispatch,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  SetStateAction,
  cloneElement,
  useContext,
  useEffect,
} from 'react';
import { createPortal } from 'react-dom';

interface ModalType {
  children: ReactNode;
}

interface WindowType {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  id: number | null;
  update: Dispatch<SetStateAction<number | null>>;
}

function Window({ children, id, update }: WindowType) {
  const { open, close, isModal } = useContext(ModalContext);

  useEffect(() => {
    if (id) {
      open();
    }
    return () => {
      update(null);
    };
  }, [id, open, update]);

  /* 모달 띄울시 스크롤바 지우지않고 고정 */
  useEffect(() => {
    if (isModal) {
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      };
    }
  }, [isModal]);

  if (!isModal) return;

  const handleClose = () => {
    update(null);
    close();
  };

  return createPortal(
    <div className='absolute-center !fixed h-full w-full overflow-hidden'>
      <div
        className='inset-0 fixed flex h-full w-full items-center justify-center bg-black opacity-50'
        onClick={handleClose}
      ></div>
      <div className='modal fixed'>
        {cloneElement(children, { handleClose })}
      </div>
    </div>,
    document.body,
  );
}

function Modal({ children }: ModalType) {
  return <ModalProvider>{children}</ModalProvider>;
}

Modal.Window = Window;

export default Modal;
