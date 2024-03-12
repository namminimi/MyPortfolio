import Card from '../card';
import { ProjectListType } from '@/pages';
import dynamic from 'next/dynamic';
import { Modal } from '@/components';
import CardImformation from '@/containers/main/components/cardModal/CardImformation';

const NoSSRModal = dynamic(() => import('@/components/Modal/Modal'), {
  ssr: false,
});

function CardLists({ projectLists }: ProjectListType) {
  if (!projectLists) return;
  console.log(projectLists[4]);
  return (
    <>
      <ul className='flex-center mt-30pxr flex-wrap justify-start gap-25pxr'>
        {projectLists.map((list) => {
          return <Card key={list.p_no} projectList={list} />;
        })}
      </ul>
      <NoSSRModal>
        <Modal.Window>
          <CardImformation projectLists={projectLists[4]} />
        </Modal.Window>
      </NoSSRModal>
    </>
  );
}

export default CardLists;
