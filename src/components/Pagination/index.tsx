import React, { Fragment, useState } from 'react';

type paginationType = {
  postsPerPage: number;
  totalPosts: number;
  paginate: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
};

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: paginationType) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push({ id: i, isDone: false });
  }
  const [numberList, setNumberListState] = useState({
    numberBox: pageNumbers,
  });

  const handleNumberToggle = (id: number) => {
    const newToggle = numberList.numberBox.map((list) =>
      list.id === id
        ? {
            ...list,
            isDone: !list.isDone,
          }
        : list.id !== id && list.isDone === true
          ? {
              ...list,
              isDone: !list.isDone,
            }
          : list,
    );

    setNumberListState({
      ...numberList,
      numberBox: newToggle,
    });
  };

  /* 번호배열 길이 -2 보다 현재페이지 번호가 작으면 ... 제거 */
  const islastHellip = () => {
    return currentPage <= numberList.numberBox.length - 3;
  };

  const isFirstHellip = () => {
    return currentPage >= 4;
  };

  /* 1번과 마지막번호 고정 활성화 */
  const isFixedNumber = (num: number) => {
    return num === 1 || num === numberList.numberBox.length;
  };

  const isNoneNumber = (num: number) => {
    return currentPage + 1 < num || currentPage - 1 > num;
  };

  /* 번호 1과 마지막번호가 가까워졌을때 현재 화면에 랜더링된 번호 유지(페이지만 이동되게) */
  const isNoneNumChange = (num: number) => {
    return (
      (currentPage === 2 && currentPage + 3 > num) ||
      (currentPage === numberList.numberBox.length - 1 &&
        currentPage - 3 < num) ||
      (currentPage === 1 && currentPage + 4 > num) ||
      (currentPage === numberList.numberBox.length && currentPage - 4 < num)
    );
  };

  return (
    <ul className='flex-center gap-10pxr'>
      {numberList.numberBox.map((number, index) => (
        <Fragment key={index}>
          {number.id === numberList.numberBox.length && islastHellip() ? (
            <div className='hellip'>&hellip;</div>
          ) : null}
          {number.id === 2 && isFirstHellip() ? (
            <div className='hellip'>&hellip;</div>
          ) : null}
          <li
            key={number.id}
            className={`cursor-pointer ${
              !isNoneNumber(number.id) ||
              isFixedNumber(number.id) ||
              isNoneNumChange(number.id)
                ? 'flex'
                : 'hidden'
            }`}
            onClick={() => {
              paginate(number.id);
            }}
          >
            <span
              onClick={() => {
                handleNumberToggle(number.id);
              }}
            >
              {number.id}
            </span>
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

export default Pagination;
