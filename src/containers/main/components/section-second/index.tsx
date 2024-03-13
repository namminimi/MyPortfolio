import LINKS from '@/constants/links';
import Link from 'next/link';

function LinksBox() {
  return (
    <figure className='box items-start py-20pxr'>
      <ul className='flex flex-col gap-x-10pxr gap-y-32pxr'>
        {LINKS.map((list, index) => {
          return (
            <li className='flex-center flex-col items-start' key={index}>
              <h4 className='font-title3-Inter-semibold tablet:font-title2-Inter-semibold flex-center gap-5pxr pc:font-title1-Inter-semibold'>
                <div className='h-16pxr w-16pxr'>{list.icon}</div>
                <span>{list.type}</span>
              </h4>
              <Link
                className='font-caption1-Inter-semibold pl-21pxr underline tablet:font-body2-bold pc:font-body1-bold'
                href={list.name}
                target='blank'
              >
                {list.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </figure>
  );
}

export default LinksBox;
