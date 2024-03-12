import { ProjectType } from '@/pages';
import Image from 'next/image';
import { useRef, useState } from 'react';
import ImageSlider from './ImageSlider';
import Link from 'next/link';
import getTextFormet from '@/utils/textFormat';
import { IconClose, IconGit, IconLink } from '@/public/svgs';
import CardBox from '@/components/Modal/cardBox';

interface CardImformationType {
  projectLists: ProjectType;
}

function CardImformation({ projectLists }: CardImformationType) {
  const {
    p_images,
    p_backend,
    p_frontend,
    p_design,
    p_date,
    p_language,
    p_git,
    p_url,
    p_function,
    p_problem,
    p_title,
    p_intro,
  } = projectLists;
  const parseImage = JSON.parse(p_images.replace(/”/g, '"'));

  return (
    <CardBox>
      <div className='flex-center mb-10pxr justify-between'>
        <h2 className='text-black font-title1-semibold'>{p_title}</h2>
        <IconClose fill='#B6B2B2' />
      </div>
      <ImageSlider parseImage={parseImage} />
      <div className='flex-center flex-col items-start gap-10pxr pt-20pxr'>
        <section className='w-full border-b border-gray600 pb-10pxr'>
          <h3 className='mb-10pxr text-black font-title2-bold'>
            📀 프로젝트 소개
          </h3>
          <div
            className='font-body2-semibold'
            dangerouslySetInnerHTML={{
              __html: getTextFormet(p_intro),
            }}
          ></div>
        </section>
        <section className='w-full pb-10pxr'>
          <h3 className='mb-10pxr text-black font-title2-bold'>🧑‍🤝‍🧑 팀원</h3>
          <ul className='font-body2-semibold'>
            <li>FrontEnd: {p_frontend}</li>
            {p_backend && <li>BackEnd: {p_backend}</li>}
            {p_design && <li>Design: {p_design}</li>}
          </ul>
        </section>
        <section className='w-full pb-10pxr'>
          <h3 className='mb-10pxr text-black font-title2-bold'>🕓 개발 기간</h3>
          <div className='font-body2-semibold'>{p_date}</div>
        </section>
        <section className='w-full pb-10pxr'>
          <h3 className='mb-10pxr text-black font-title2-bold'>⚒️ 기술 스택</h3>
          <div className='font-body2-semibold'>{p_language}</div>
        </section>
        {p_url && (
          <section className='w-full pb-10pxr'>
            <h3 className='flex-center mb-10pxr justify-start gap-10pxr text-black font-title2-bold'>
              <IconLink />
              배포주소
            </h3>
            <Link
              href={p_url}
              target='blank'
              className='underline font-body2-semibold'
            >
              {p_url}
            </Link>
          </section>
        )}
        <section className='w-full border-b border-gray600 pb-10pxr'>
          <h3 className='flex-center mb-10pxr justify-start gap-10pxr text-black font-title2-bold'>
            <IconGit />
            GitHub
          </h3>
          <Link
            href={p_git}
            target='blank'
            className='underline font-body2-semibold'
          >
            {p_git}
          </Link>
        </section>
        <section className='w-full pb-10pxr'>
          <h3 className='mb-10pxr text-black font-title2-bold'>나의 역할</h3>
          <ul
            className='my-role font-body2-semibold'
            dangerouslySetInnerHTML={{
              __html: getTextFormet(p_function),
            }}
          ></ul>
        </section>
        <section className='pb-10pxr'>
          <h3 className='mb-10pxr text-black font-title2-bold'>
            문제 및 해결방법
          </h3>
          <div
            className='font-body2-semibold'
            dangerouslySetInnerHTML={{
              __html: getTextFormet(p_problem),
            }}
          ></div>
        </section>
      </div>
    </CardBox>
  );
}

export default CardImformation;
