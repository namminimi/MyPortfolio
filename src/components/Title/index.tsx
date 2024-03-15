import { ReactNode } from 'react';
import {
  IconFile,
  IconLinks,
  IconProfile,
  IconStudy,
  IconWork,
} from '../../../public/svgs';

interface TitleType {
  type: 'about' | 'links' | 'projects' | 'work' | 'other';
}

const SELECT_TITLE = {
  about: {
    icon: <IconProfile width='100%' height='100%' viewBox='0 0 48 48' />,
    name: 'About Me',
  },
  links: {
    icon: <IconLinks width='100%' height='100%' viewBox='0 0 48 48' />,
    name: 'Links',
  },
  projects: {
    icon: <IconFile width='100%' height='100%' viewBox='0 0 48 48' />,
    name: 'Projects',
  },
  work: {
    icon: <IconWork width='100%' height='100%' viewBox='0 0 24 24' />,
    name: 'Work Experience',
  },
  other: {
    icon: <IconStudy width='100%' height='100%' viewBox='0 0 24 24' />,
    name: 'Other Experience',
  },
};

function Title({ type }: TitleType) {
  return (
    <h2 className='flex-center justify-start gap-10pxr font-title1-Inter-semibold tablet:font-h2-Inter-semibold'>
      <div className='h-24pxr w-24pxr tablet:h-32pxr tablet:w-32pxr'>
        {SELECT_TITLE[type].icon}
      </div>
      <span>{SELECT_TITLE[type].name}</span>
    </h2>
  );
}

export default Title;
