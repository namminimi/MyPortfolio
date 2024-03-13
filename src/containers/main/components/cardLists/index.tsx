import Card from '../card';
import { ProjectListType, ProjectType } from '@/pages';
import dynamic from 'next/dynamic';
import { Modal } from '@/components';
import CardImformation from '@/containers/main/components/cardModal/CardImformation';
import { useEffect, useState } from 'react';
import getProject from '@/data/getProject';
const NoSSRModal = dynamic(() => import('@/components/Modal/Modal'), {
  ssr: false,
});

function CardLists({ projectLists }: ProjectListType) {
  const [projectId, setProjectId] = useState<number | null>(null);
  const [selectProjectList, setSelectProjectList] =
    useState<ProjectType | null>(null);

  const getProjectData = async (id: number) => {
    const data = await getProject(id);
    if (!data) return;
    setSelectProjectList(data[0]);
  };

  useEffect(() => {
    if (!projectId) return;
    getProjectData(projectId);
    return () => {
      setSelectProjectList(null);
    };
  }, [projectId]);

  if (!projectLists) return;

  return (
    <>
      <ul className='tablet970:grid-cols-3-350 mt-30pxr grid grid-cols-1 gap-25pxr tablet:grid-cols-2'>
        {projectLists.map((list) => {
          return (
            <Card key={list.p_no} projectList={list} updateId={setProjectId} />
          );
        })}
      </ul>
      <NoSSRModal>
        <Modal.Window id={projectId} update={setProjectId}>
          <CardImformation projectLists={selectProjectList} />
        </Modal.Window>
      </NoSSRModal>
    </>
  );
}

export default CardLists;
