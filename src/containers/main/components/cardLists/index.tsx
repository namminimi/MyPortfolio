import Image from 'next/image';
import Card from '../card';
import { ProjectListType } from '@/pages';

function CardLists({ projectLists }: ProjectListType) {
  if (!projectLists) return;
  return (
    <ul className='flex-center mt-30pxr flex-wrap justify-start gap-25pxr'>
      {projectLists.map((list) => {
        return <Card key={list.p_no} projectList={list} />;
      })}
    </ul>
  );
}

export default CardLists;
