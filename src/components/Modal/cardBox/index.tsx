import { ReactNode } from 'react';

interface CardBoxType {
  children: ReactNode;
}

function CardBox({ children }: CardBoxType) {
  return (
    <div className='scroll-hidden h-screen w-screen overflow-y-scroll bg-white p-0pxr tablet:h-900pxr tablet:max-w-740pxr tablet:rounded-3xl tablet:p-40pxr'>
      {children}
    </div>
  );
}

export default CardBox;
