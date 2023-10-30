import {
    Box,
    Button,
    FormControlLabel,
    Paper,
    Switch,
    Tooltip,
    Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import * as St from "./FormAdd.styled";
import configs from "../../configs";
import { postMovie } from "../../utils/movieApi";
import TooltipImage from "../TooltipImage";

interface Movie {
    name: string;
    image: string;
    background: string;
    logo: string;
    video: string;
    description: string;
    agree: boolean;
}

const FormAdd = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            image: "",
            background: "",
            logo: "",
            video: "https://www.youtube.com/embed/your_video_id",
            description: "",
            agree: false,
        },
        onSubmit: async (values: Movie) => {
            console.log(values);
            try {
                const { data } = await postMovie("Movie", {
                    name: values.name,
                    image: values.image,
                    background: values.background,
                    logo: values.logo,
                    video: values.video,
                    description: values.description,
                });
                console.log(data);
                toast.success("Add Successfully!");
            } catch (error) {
                console.error(error);
            }
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Required.")
                .min(2, "Must be 2 characters or more"),
            image: Yup.string()
                .required("Required.")
                .min(2, "Must be 2 characters or more"),
            background: Yup.string()
                .required("Required.")
                .min(2, "Must be 2 characters or more"),
            logo: Yup.string()
                .required("Required.")
                .min(2, "Must be 2 characters or more"),
            video: Yup.string()
                .required("Required.")
                .min(2, "Must be 2 characters or more"),
            description: Yup.string()
                .required("Required.")
                .min(2, "Must be 2 characters or more"),
            agree: Yup.boolean().oneOf(
                [true],
                "The terms and conditions must be accepted."
            ),
        }),
    });

    const handleAdd = () => {
        navigate(configs.routes.dashboard);
    };

    return (
        <St.BoxStyled>
            <Toaster position="top-right" reverseOrder={false} />
            <Paper className="wrapper">
                <Box className="title-wrapper">
                    <Typography className="title">Add Form</Typography>
                    <Button className="button">
                        <Typography onClick={handleAdd} className="button-desc">
                            Dashboard
                        </Typography>
                    </Button>
                </Box>
                <form className="form" onSubmit={formik.handleSubmit}>
                    <Box className="input">
                        <input
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            className="name-input"
                            placeholder="Name"
                        />
                        {formik.errors.name && (
                            <Typography
                                className="message"
                                variant="caption"
                                color="red"
                            >
                                {formik.errors.name}
                            </Typography>
                        )}
                    </Box>
                    <Tooltip
                        title={<TooltipImage image={formik.values.image} />}
                    >
                        <Box className="input">
                            <input
                                name="image"
                                value={formik.values.image}
                                onChange={formik.handleChange}
                                className="name-input"
                                placeholder="Image Url"
                            />
                            {formik.errors.image && (
                                <Typography
                                    className="message"
                                    variant="caption"
                                    color="red"
                                >
                                    {formik.errors.image}
                                </Typography>
                            )}
                        </Box>
                    </Tooltip>
                    <Tooltip
                        title={
                            <TooltipImage image={formik.values.background} />
                        }
                    >
                        <Box className="input">
                            <input
                                name="background"
                                value={formik.values.background}
                                onChange={formik.handleChange}
                                className="name-input"
                                placeholder="Background Url"
                            />
                            {formik.errors.background && (
                                <Typography
                                    className="message"
                                    variant="caption"
                                    color="red"
                                >
                                    {formik.errors.background}
                                </Typography>
                            )}
                        </Box>
                    </Tooltip>
                    <Tooltip
                        title={<TooltipImage image={formik.values.logo} />}
                    >
                        <Box className="input">
                            <input
                                name="logo"
                                value={formik.values.logo}
                                onChange={formik.handleChange}
                                className="name-input"
                                placeholder="Logo Url"
                            />
                            {formik.errors.logo && (
                                <Typography
                                    className="message"
                                    variant="caption"
                                    color="red"
                                >
                                    {formik.errors.logo}
                                </Typography>
                            )}
                        </Box>
                    </Tooltip>
                    <Box className="input">
                        <input
                            name="video"
                            value={formik.values.video}
                            onChange={formik.handleChange}
                            className="name-input"
                            placeholder="Video Url"
                        />
                        {formik.errors.video && (
                            <Typography
                                className="message"
                                variant="caption"
                                color="red"
                            >
                                {formik.errors.video}
                            </Typography>
                        )}
                    </Box>
                    <Box className="desc">
                        <textarea
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            className="desc-input"
                            placeholder="Description"
                        />
                        {formik.errors.description && (
                            <Typography
                                className="message"
                                variant="caption"
                                color="red"
                            >
                                {formik.errors.description}
                            </Typography>
                        )}
                    </Box>
                    <Box className="switch">
                        {formik.errors.agree && (
                            <Typography
                                className="message"
                                variant="caption"
                                color="red"
                            >
                                {formik.errors.agree}
                            </Typography>
                        )}
                        <FormControlLabel
                            control={<Switch />}
                            label="Agree to terms and conditions."
                            name="agree"
                            value={formik.values.agree}
                            onClick={formik.handleChange}
                        />
                    </Box>
                    <Button className="submit-button" type="submit">
                        <Typography className="submit-desc">Send</Typography>
                    </Button>
                </form>
            </Paper>
        </St.BoxStyled>
    );
};

export default FormAdd;
