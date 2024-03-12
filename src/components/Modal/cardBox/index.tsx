import { ReactNode } from 'react';

interface CardBoxType {
  children: ReactNode;
}

function CardBox({ children }: CardBoxType) {
  return (
    <div className='scroll-hidden h-900pxr w-850pxr overflow-y-scroll rounded-3xl bg-white p-40pxr'>
      {children}
    </div>
  );
}

export default CardBox;
