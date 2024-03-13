import { IconArrowLeftNon } from '@/public/svgs';

interface PopupHeaderType {
  handleClose?: () => void;
}

function PopupHeader({ handleClose }: PopupHeaderType) {
  return (
    <div className='flex-center h-50pxr justify-start gap-10pxr border-b border-gray-300 px-20pxr tablet:hidden'>
      <IconArrowLeftNon className='cursor-pointer' onClick={handleClose} />
      <h3 className='font-body1-bold'>상세보기</h3>
    </div>
  );
}

export default PopupHeader;
