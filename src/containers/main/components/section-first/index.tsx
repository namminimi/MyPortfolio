import Image from 'next/image';
import PROFILE from '@/constants/profile';

function AboutMe() {
  return (
    <figure className='box'>
      <div className='flex-center tablet:flex-center flex-col justify-start gap-25pxr tablet:flex-row '>
        <div className='flex-center relative h-230pxr w-180pxr flex-shrink-0 pc:h-266pxr pc:w-200pxr'>
          <Image
            src={'/avifs/profileImage.avif'}
            fill
            priority
            className='rounded-3xl'
            alt='프로필이미지'
          />
        </div>
        <ul className='mobile430:grid-cols-2 mobile430:grid mobile430:gap-x-3pxr flex-center flex-wrap justify-start gap-30pxr gap-y-15pxr px-10pxr tablet:gap-x-10pxr tablet:px-0pxr pc:gap-y-32pxr'>
          {PROFILE.map((list, index) => {
            return (
              <li className='flex-center flex-col items-start' key={index}>
                <h4 className='flex-center font-title3-Inter-semibold tablet:font-title2-Inter-semibold gap-5pxr pc:font-title1-Inter-semibold'>
                  <div className='h-16pxr w-16pxr'>{list.icon}</div>
                  <span>{list.type}</span>
                </h4>
                <h5 className='font-caption1-Inter-semibold pl-21pxr tablet:font-body2-bold pc:font-body1-bold'>
                  {list.name}
                </h5>
              </li>
            );
          })}
        </ul>
      </div>
      <p className='leading-relaxed font-body2-bold pc:font-body1-bold'>
        안녕하세요. 기계설계 전공을 시작으로 프로그래밍에 매료되어 프론트엔드
        개발자로 성장한 남민섭입니다. 프론트엔드 개발에 대한 열정을 바탕으로
        HTML, CSS, JavaScript, React 등의 기술을 숙련하였고, 이를 통해 다양한
        프로젝트 진행했습니다. 꼼꼼한 성격과 지속적인 자기 개발을 통한 학습
        능력이 저의 장점입니다.
      </p>
    </figure>
  );
}

export default AboutMe;
