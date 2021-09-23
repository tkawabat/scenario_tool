import React from 'react';
import styled from 'styled-components';
import { Snackbar} from '@mui/material/';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { DurationNotification } from '../../lib/Const';
import { NotificationModel } from '../../store/NotificationSlice';


const Main = styled.div`
        
`;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export interface NotificationProps {
    notification: NotificationModel
}

const App = (props: NotificationProps) => {
    const [open, setOpen] = React.useState(true);

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }
    
    return (
        <Snackbar open={open} autoHideDuration={DurationNotification * 1000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={props.notification.type} sx={{ width: '100%' }}>
                {props.notification.text}
            </Alert>
        </Snackbar>
    );
};

export default App