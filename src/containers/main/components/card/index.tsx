import { ProjectType } from '@/pages';
import getTextFormet from '@/utils/textFormat';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface CardType {
  projectList: ProjectType;
  updateId: Dispatch<SetStateAction<number | null>>;
}

function Card({ projectList, updateId }: CardType) {
  const { p_main_image, p_title, p_intro, p_party, p_date, p_no } = projectList;

  const changeImageStyle = (title: string) => {
    if (title.includes('야구') || title.includes('자동차')) {
      return 'h-199pxr w-full';
    } else if (title.includes('아이스크림') || title.includes('의류')) {
      return 'h-200pxr w-200pxr';
    } else {
      return 'h-100pxr w-200pxr';
    }
  };

  return (
    <li
      className='w-350pxr cursor-pointer rounded-2xl border'
      onClick={() => updateId(p_no)}
    >
      <div className='flex-center h-200pxr w-full rounded-t-2xl border-b bg-gray100'>
        <div className={`relative ${changeImageStyle(p_title)}`}>
          <Image
            className='rounded-t-2xl'
            src={p_main_image}
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            alt='프로젝트 대표 이미지'
          />
        </div>
      </div>
      <div className='flex flex-col justify-start gap-5pxr px-20pxr py-8pxr'>
        <h4 className='font-body1-Inter-bold'>{p_title}</h4>
        <p className='line-over h-50pxr overflow-hidden font-body2-medium'>
          {getTextFormet(p_intro)}
        </p>
        <div
          className={`flex-center h-30pxr w-40pxr rounded-2xl border ${p_party === '개인' ? 'bg-blue940' : 'bg-red800'}  text-white font-caption2-semibold`}
        >
          {p_party}
        </div>
        <small className='text-right text-gray600 font-caption2-semibold'>
          {p_date}
        </small>
      </div>
    </li>
  );
}

export default Card;
