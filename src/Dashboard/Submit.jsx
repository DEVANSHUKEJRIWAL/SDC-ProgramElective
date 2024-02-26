import * as React from 'react';
import Alert from '@mui/joy/Alert';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';

export default function Submit() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
      <Alert
        variant="soft"
        color="success"
        startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
        // endDecorator={
        //   <Button size="sm" variant="solid" color="success">
        //     Close
        //   </Button>
        // }
      >
        Your message was sent successfully.
      </Alert>
    </Box>
  );
}