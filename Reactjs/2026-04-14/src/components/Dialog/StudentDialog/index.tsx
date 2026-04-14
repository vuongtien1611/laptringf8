import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface Props {
    isOpen: boolean
    onClose: () => void
}

const StudentDialog = ({isOpen, onClose}: Props) => {


    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            role="alertdialog"
            maxWidth="xs"
        >
            <DialogTitle id="alert-dialog-title">
                {"Student Dialog"}
            </DialogTitle>
            <DialogContent >
               <TextField
                   margin="dense"
                   fullWidth={true}
               variant="outlined"
               label="tên"
               >
               </TextField>

                <TextField
                    fullWidth={true}
                    margin="dense"
                    variant="outlined"
                    label="Tuổi"
                >
                </TextField>

                <TextField
                    fullWidth={true}
                    margin="dense"
                    variant="outlined"
                    label="Lớp"
                >
                </TextField>

                <TextField
                    fullWidth={true}
                    margin="dense"
                    variant="outlined"
                    label="Địa Chỉ"
                >
                </TextField>
            </DialogContent>
            <DialogActions>
                <Button color={"error"} variant={"outlined"} onClick={onClose} autoFocus sx={{textTransform: 'none'}}>
                    Cancel
                </Button>
                <Button color={"success"} variant={'outlined'} onClick={onClose} sx={{textTransform: 'none'}}>Save</Button>
            </DialogActions>
        </Dialog>
    )
}

export default StudentDialog
