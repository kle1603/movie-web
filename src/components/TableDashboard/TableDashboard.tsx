import {
    Box,
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";
import * as St from "./TableDashboard.styled";
import { useEffect, useState } from "react";
import { deleteMovie, getAllMovie } from "../../utils/movieApi";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import configs from "../../configs";

interface TableDashboardProps {
    id: string;
    name: string;
    description: string;
    image: string;
}

const TableDashboard = () => {
    const [movies, setMovies] = useState<TableDashboardProps[]>([]);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<
        TableDashboardProps | undefined
    >();

    const handleOpen = (movie: TableDashboardProps) => {
        console.log(movie);
        setSelectedMovie(movie);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        (async () => {
            const { data } = await getAllMovie("Movie");

            setMovies(data);
        })();
    }, []);

    const handleEdit = (id: string) => {
        navigate(configs.routes.dashboard + "/edit/" + id);
    };

    const handleDelete = (id: string) => {
        (async () => {
            await deleteMovie("Movie", Number(id));
            const { data } = await getAllMovie("Movie");

            setMovies(data);
            toast.success("Delete successfully");
        })();
        setOpen(false);
    };

    const handleAdd = () => {
        navigate(configs.routes.add);
    };

    return (
        <St.DivStyled>
            <Toaster position="top-right" reverseOrder={false} />
            <Box className="title-wrapper">
                <Typography className="title">Table Dashboard</Typography>
                <Button className="button">
                    <Typography onClick={handleAdd} className="button-desc">
                        Add
                    </Typography>
                </Button>
            </Box>
            <Paper className="table-wrapper">
                <TableContainer>
                    <Table className="table">
                        <TableHead className="table-header">
                            <TableRow>
                                <TableCell className="col id-col" align="left">
                                    <Typography>Id</Typography>
                                </TableCell>
                                <TableCell
                                    className="col name-col"
                                    align="left"
                                >
                                    <Typography>Name</Typography>
                                </TableCell>
                                <TableCell
                                    className="col desc-col"
                                    align="left"
                                >
                                    <Typography>Description</Typography>
                                </TableCell>
                                <TableCell
                                    className="col image-col"
                                    align="left"
                                >
                                    <Typography>Image</Typography>
                                </TableCell>
                                <TableCell
                                    className="col action-col"
                                    align="left"
                                >
                                    <Typography>Action</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="table-body">
                            {movies.map((movie) => (
                                <TableRow key={movie.id}>
                                    <TableCell className="id" align="left">
                                        <Typography>{movie.id}</Typography>
                                    </TableCell>
                                    <TableCell className="name" align="left">
                                        <Typography>{movie.name}</Typography>
                                    </TableCell>
                                    <TableCell className="desc" align="left">
                                        <Typography>
                                            {movie.description}
                                        </Typography>
                                    </TableCell>
                                    <TableCell className="image">
                                        <Box className="image-wrapper">
                                            <img
                                                className="image"
                                                src={movie.image}
                                                alt={movie.name}
                                            />
                                        </Box>
                                    </TableCell>
                                    <TableCell className="action" align="left">
                                        <Box>
                                            <IconButton
                                                onClick={() =>
                                                    handleEdit(movie.id)
                                                }
                                                className="icon-wrapper"
                                            >
                                                <AiOutlineEdit className="icon" />
                                            </IconButton>{" "}
                                            <IconButton
                                                onClick={() =>
                                                    handleOpen(movie)
                                                }
                                                className="icon-wrapper"
                                            >
                                                <AiOutlineDelete className="icon" />
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <St.DialogStyled
                    fullWidth={true}
                    onClose={handleClose}
                    open={open}
                >
                    <DialogTitle>Confirmation</DialogTitle>
                    <DialogContent>
                        Are you sure to delete {selectedMovie?.name}?
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} className="dialog-cancel">Cancel</Button>
                        <Button
                            className="dialog-ok"
                            onClick={() =>
                                selectedMovie?.id &&
                                handleDelete(selectedMovie.id)
                            }
                        >
                            Ok
                        </Button>
                    </DialogActions>
                </St.DialogStyled>
            </Paper>
        </St.DivStyled>
    );
};

TableDashboard.propTypes = {};

export default TableDashboard;
