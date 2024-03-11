import { ProjectType } from '@/pages';
import Image from 'next/image';

interface CardType {
  projectList: ProjectType;
}

function Card({ projectList }: CardType) {
  return (
    <li className='h-350pxr w-350pxr cursor-pointer rounded-2xl border'>
      <div className='relative h-200pxr w-full '>
        <Image
          className='rounded-t-2xl'
          src={projectList.p_main_image}
          fill
          alt='프로젝트 대표 이미지'
        />
      </div>
      <div className='flex flex-col justify-start gap-5pxr px-20pxr py-8pxr'>
        <h4 className='font-title2-Inter-bold'>Project Name.</h4>
        <h5 className='font-body1-bold'>{projectList.p_title}</h5>
        <small className='font-caption1-semibold'>{projectList.p_date}</small>
        <div className='flex-center h-30pxr w-40pxr rounded-2xl border bg-blue940 text-white font-caption2-semibold'>
          {projectList.p_party}
        </div>
      </div>
    </li>
  );
}

export default Card;
