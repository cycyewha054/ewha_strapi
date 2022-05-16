import React, { FC } from 'react';
import { Icon } from './Icon';

interface UploadPopUpProps {
  open: boolean;
  onClose: () => void;
}
export const UploadPopUp: FC<UploadPopUpProps> = ({ open, onClose }) => {
  if (!open) return <></>;
  return (
    <div className="z-50 fixed inset-0 bg-littleblack flex items-center justify-center px-4">
      <div className="w-3/4 min-h-screen-15 flex flex-col  bg-white rounded-xl overflow-hidden p-6 space-y-4">
        <div className="flex items-center justify-between space-x-4">
          <h1>Title</h1>
          <button onClick={onClose}>
            <Icon.X />
          </button>
        </div>
      </div>
    </div>
  );
};
