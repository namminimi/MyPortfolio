import STUDYS from '@/constants/study';
import Link from 'next/link';
import React from 'react';

function OtherBox() {
  return (
    <div className='box items-start px-40pxr py-20pxr tablet:px-70pxr'>
      <ul className='flex-center flex-col items-start justify-between gap-15pxr'>
        {STUDYS.map((list, index) => {
          return (
            <li className='list-disc' key={index}>
              <h3 className='font-body2-bold tablet:font-body1-bold'>
                {list.Done}
              </h3>
              {list.origin && (
                <p className='font-caption1-semibold tablet:font-body2-semibold'>
                  {list.origin}
                </p>
              )}
              {list.link && (
                <Link
                  className='underline font-caption1-semibold tablet:font-body2-semibold'
                  href={list.link}
                >
                  github
                </Link>
              )}
              <small className='block font-caption1-semibold tablet:font-body2-semibold'>
                {list.term}
              </small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OtherBox;
