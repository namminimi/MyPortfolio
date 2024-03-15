import { ProjectType } from '@/pages';
import ImageSlider from './ImageSlider';
import Link from 'next/link';
import getTextFormet from '@/utils/textFormat';
import { IconClose, IconGit, IconLink } from '@/public/svgs';
import CardBox from '@/components/Modal/cardBox';
import PopupHeader from '@/components/Modal/header';
import { Suspense } from 'react';
import Loading from '@/pages/Loading';

interface CardImformationType {
  projectLists: ProjectType | null;
  handleClose?: () => void;
}

function CardImformation({ projectLists, handleClose }: CardImformationType) {
  if (!projectLists) return <Loading />;

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
      <PopupHeader handleClose={handleClose} />
      <div className='p-30pxr tablet:p-0pxr'>
        <div className='flex-center mb-10pxr justify-between'>
          <h2 className='text-black font-title3-bold tablet:font-title1-bold'>
            {p_title}
          </h2>
          <IconClose
            fill='#B6B2B2'
            className='hidden cursor-pointer tablet:block'
            onClick={handleClose}
          />
        </div>
        <Suspense fallback={<Loading />}>
          <ImageSlider parseImage={parseImage} />
        </Suspense>
        <div className='flex-center flex-col items-start gap-10pxr pt-20pxr'>
          <section className='w-full border-b border-gray600 pb-10pxr'>
            <h3 className='detail-h3'>📀 프로젝트 소개</h3>
            <div
              className='font-caption1-semibold tablet:font-body2-semibold'
              dangerouslySetInnerHTML={{
                __html: getTextFormet(p_intro),
              }}
            ></div>
          </section>
          <section className='w-full pb-10pxr'>
            <h3 className='detail-h3'>🧑‍🤝‍🧑 팀원</h3>
            <ul className='detail-text'>
              <li>FrontEnd: {p_frontend}</li>
              {p_backend && <li>BackEnd: {p_backend}</li>}
              {p_design && <li>Design: {p_design}</li>}
            </ul>
          </section>
          <section className='w-full pb-10pxr'>
            <h3 className='detail-h3'>🕓 개발 기간</h3>
            <div className='detail-text'>{p_date}</div>
          </section>
          <section className='w-full pb-10pxr'>
            <h3 className='detail-h3'>⚒️ 기술 스택</h3>
            <div className='detail-text'>{p_language}</div>
          </section>
          {p_url && (
            <section className='w-full pb-10pxr'>
              <h3 className='flex-center detail-h3 justify-start gap-10pxr'>
                <IconLink />
                배포주소
              </h3>
              <Link
                href={p_url}
                target='blank'
                className='detail-text underline'
              >
                {p_url}
              </Link>
            </section>
          )}
          <section className='w-full border-b border-gray600 pb-10pxr'>
            <h3 className='flex-center detail-h3 justify-start gap-10pxr'>
              <IconGit />
              GitHub
            </h3>
            <Link href={p_git} target='blank' className='detail-text underline'>
              {p_git}
            </Link>
          </section>
          <section className='w-full pb-10pxr'>
            <h3 className='detail-h3'>나의 역할</h3>
            <div
              className='my-role detail-text'
              dangerouslySetInnerHTML={{
                __html: getTextFormet(p_function),
              }}
            ></div>
          </section>
          <section className='pb-10pxr'>
            <h3 className='detail-h3'>문제 및 해결방법</h3>
            <div
              className='detail-text'
              dangerouslySetInnerHTML={{
                __html: getTextFormet(p_problem),
              }}
            ></div>
          </section>
        </div>
      </div>
    </CardBox>
  );
}

export default CardImformation;
