import Image from 'next/image';
import Card from '../card';

function CardLists() {
  return (
    <ul className='flex-center mt-30pxr flex-wrap justify-start gap-25pxr'>
      {Array.from({ length: 6 }, (_, index) => {
        return <Card key={index} />;
      })}
    </ul>
  );
}

export default CardLists;
