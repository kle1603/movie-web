import { Box } from "@mui/material";
import * as St from "./Video.styled";

interface VideoProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    src: string;
}

const Video = ({ open, setOpen, src }: VideoProps) => {
    const handleModal = () => setOpen(!open);
    return (
        <St.StyledModal open={open} onClose={handleModal}>
            <Box className="modal__wrapper">
                <iframe className="video" src={`${src}`} />
            </Box>
        </St.StyledModal>
    );
};

export default Video;
