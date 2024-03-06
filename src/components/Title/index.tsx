import { ReactNode } from 'react';
import { IconFile, IconLinks, IconProfile } from '../../../public/svgs';

interface TitleType {
  type: 'about' | 'links' | 'projects';
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
};

function Title({ type }: TitleType) {
  return (
    <h2 className='flex-center font-h2-Inter-semibold justify-start gap-10pxr'>
      <div className='h-32pxr w-32pxr'>{SELECT_TITLE[type].icon}</div>
      <span>{SELECT_TITLE[type].name}</span>
    </h2>
  );
}

export default Title;
