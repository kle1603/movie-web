import * as St from "./TooltipImage.styled";

interface TooltipImageProps {
    image: string;
}

const TooltipImage = ({ image }: TooltipImageProps) => {
    return (
        <St.BoxStyled>
            <img className="image" src={image} alt={image} />
        </St.BoxStyled>
    );
};

TooltipImage.propTypes = {};

export default TooltipImage;
