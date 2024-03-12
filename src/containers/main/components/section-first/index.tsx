import Image from 'next/image';
import PROFILE from '@/constants/profile';

function AboutMe() {
  return (
    <figure className='box'>
      <div className='flex-center justify-start gap-100pxr'>
        <Image
          src={'/avifs/profileImage.avif'}
          width={200}
          height={266}
          className='rounded-3xl'
          alt='프로필이미지'
        />
        <ul className='grid grid-flow-row grid-cols-2 gap-x-10pxr gap-y-32pxr'>
          {PROFILE.map((list, index) => {
            return (
              <li className='flex-center flex-col items-start' key={index}>
                <h4 className='flex-center gap-5pxr font-title1-Inter-semibold'>
                  <div className='h-16pxr w-16pxr'>{list.icon}</div>
                  <span>{list.type}</span>
                </h4>
                <h5 className='pl-21pxr font-body1-bold'>{list.name}</h5>
              </li>
            );
          })}
        </ul>
      </div>
      <p className='leading-relaxed font-body1-bold'>
        프로그래밍에 대한 관심은 자기계발을 위해 파이썬 인터넷 강의를 수강하면서
        시작되었습니다. 이후 프로그래밍에 대한 흥미와 열정이 커져 꾸준히
        공부하면서 프론트엔드 개발 기술을 습득하였고 HTML, CSS, JavaScript,
        React, Next.js 등을 활용한 다양한 프로젝트를 진행하며 실력을 쌓았습니다.
        이러한 경험들을 바탕으로, 저는 팀과 조직에 기여할 수 있는 열정적이고
        성실한 프론트엔드 개발자가 되고자 합니다.
      </p>
    </figure>
  );
}

export default AboutMe;
