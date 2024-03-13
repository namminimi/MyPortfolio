import { useEffect, useState } from 'react';
import SelectList from '../selectList';
import CardLists from '../cardLists';
import { ProjectListType, ProjectType } from '@/pages';
import Pagination from '@/components/Pagination';
import useMediaQueries from '@/hooks/useMediaQueries';

export interface SelectListStateType {
  id: number;
  name: string;
  isDone: boolean;
}

function ProjectsBox({ projectLists }: ProjectListType) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 969 })?.mediaQuery
    .matches;
  const mediaQuery = typeof window !== 'undefined' ? mobileMediaQuery : false;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostPerPage] = useState(6); // 한페이지당 렌더링 되는 데이터수

  //페이지 숫자 계산
  const indexOfLast = currentPage * postsPerPage; //페이지 마지막수 ex 1 * 10
  const indexOfFirst = indexOfLast - postsPerPage; // 페이지 첫번째 수 ex 10 - 10 = 0

  //데이터 몇번까지 자르기
  const currentPosts = (projectLists: ProjectType[]) => {
    let currentPosts = projectLists.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const newProjectLists = currentPosts(projectLists);
  useEffect(() => {
    if (mediaQuery) {
      setPostPerPage(4);
    } else {
      setPostPerPage(6);
    }
  }, [mediaQuery]);
  return (
    <div>
      <h3 className='font-h3-semibold'>전체 {projectLists.length}</h3>
      <CardLists projectLists={newProjectLists} />
      <div className='flex-center mt-30pxr font-title3-semibold'>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={projectLists.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default ProjectsBox;
