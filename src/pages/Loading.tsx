import Image from 'next/image';

function Loading() {
  return (
    <div className='flex-center absolute-center z-full h-100pxr w-100pxr'>
      <Image src='/gifs/loading.gif' fill unoptimized priority alt='loading' />
    </div>
  );
}

export default Loading;
