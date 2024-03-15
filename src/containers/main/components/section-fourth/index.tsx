import WORKS from '@/constants/work';

function WorkBox() {
  return (
    <div className='box items-start px-40pxr py-20pxr tablet:px-70pxr'>
      <ul className='flex-center flex-col items-start justify-between gap-15pxr'>
        {WORKS.map((work, index) => {
          return (
            <li className='list-disc' key={index}>
              <h3 className='font-body1-semibold tablet:font-title3-semibold'>
                {work.name}
              </h3>
              <p className='font-caption1-semibold tablet:font-body2-bold'>
                {work.Todo}
              </p>
              <small className='font-caption1-semibold tablet:font-body2-semibold'>
                {work.term}
              </small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WorkBox;
