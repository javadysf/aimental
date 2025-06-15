import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function UploadButton({text,css}) {
  return (
    <Button
    className={` ${css} !shadow-none !bg-blue dark:!bg-blue-50 !rounded-xl dark:!text-deepBlue !text-base !px-5 !normal-case !py-2 !text-white`}
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
    >
     {text?text:"+ Upload" }
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}