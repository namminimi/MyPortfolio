import { ProjectType } from '@/pages';
import Image from 'next/image';
import { useRef, useState } from 'react';
import ImageSlider from './ImageSlider';
import Link from 'next/link';
import getTextFormet from '@/utils/textFormat';
import { IconClose } from '@/public/svgs';
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
  } = projectLists;
  const parseImage = JSON.parse(p_images.replace(/”/g, '"'));

  return (
    <CardBox>
      <div>
        <h2>야구게임</h2>
        <IconClose />
      </div>
      <ImageSlider parseImage={parseImage} />
      <h3>프로젝트 소개</h3>
      <p>야구게임 신나게 해보자</p>
      <h3>팀원</h3>
      <ul>
        <li>FrontEnd: {p_frontend}</li>
        {p_backend && <li>BackEnd: {p_backend}</li>}
        {p_design && <li>Design: {p_design}</li>}
      </ul>
      <h3>개발 기간</h3>
      <div>{p_date}</div>
      <h3>기술 스택</h3>
      <div>{p_language}</div>
      {p_url && (
        <div>
          <h3>배포주소</h3>
          <Link href={p_url} target='blank' className='underline'>
            {p_url}
          </Link>
        </div>
      )}
      <h3>GitHub</h3>
      <Link href={p_git} target='blank' className='underline'>
        {p_git}
      </Link>
      <div>
        <h3>나의 역할</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: getTextFormet(p_function),
          }}
        ></div>
        <h3>문제 및 해결방법</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: getTextFormet(p_problem),
          }}
        ></div>
      </div>
    </CardBox>
  );
}

export default CardImformation;
