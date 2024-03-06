import Image from 'next/image';

function Card() {
  return (
    <li className='h-350pxr w-350pxr cursor-pointer rounded-2xl border'>
      <div className='relative h-200pxr w-full '>
        <Image
          className='rounded-t-2xl'
          src={'/upload/baseball1.png'}
          fill
          alt='야구이미지'
        />
      </div>
      <div className='flex flex-col justify-start gap-5pxr px-20pxr py-8pxr'>
        <h4 className='font-title2-Inter-bold'>Project Name.</h4>
        <h5 className='font-body1-bold'>야구게임</h5>
        <small className='font-caption1-semibold'>
          2022.10.10 ~ 2022.11.11
        </small>
        <div className='flex-center bg-blue940 h-30pxr w-40pxr rounded-2xl border text-white font-caption2-semibold'>
          팀
        </div>
      </div>
    </li>
  );
}

export default Card;
