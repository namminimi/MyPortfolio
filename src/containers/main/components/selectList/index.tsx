import { SelectListStateType } from '../section-thired';

interface SelectListType {
  lists: SelectListStateType[];
}

function SelectList({ lists }: SelectListType) {
  return (
    <ul className='flex gap-10pxr'>
      {lists.map((list) => {
        return (
          <li
            className='flex-center h-40pxr w-80pxr cursor-pointer rounded-full border font-body2-bold'
            key={list.id}
          >
            {list.name}
          </li>
        );
      })}
    </ul>
  );
}

export default SelectList;
