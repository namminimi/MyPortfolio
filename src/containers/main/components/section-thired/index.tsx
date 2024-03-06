import { useState } from 'react';
import SelectList from '../selectList';
import CardLists from '../cardLists';

export interface SelectListStateType {
  id: number;
  name: string;
  isDone: boolean;
}

function ProjectsBox() {
  const [selectList, setSelectList] = useState<SelectListStateType[]>([
    { id: 1, name: '전체', isDone: true },
    { id: 2, name: '팀', isDone: true },
    { id: 3, name: '개인', isDone: true },
  ]);
  return (
    <div>
      <ul className='flex gap-10pxr'>
        <SelectList lists={selectList} />
      </ul>
      <CardLists />
      <div className='flex-center mt-30pxr font-title3-semibold'>1 2 3 4 5</div>
    </div>
  );
}

export default ProjectsBox;
