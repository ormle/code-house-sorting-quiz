
const PantherStyle = {
    width: "200px",
    height: "200px",
    border: "10px solid #f00000",
    borderRadius: "50%",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    clipPath: "circle(50%)",
}

const BatStyle = {
    width: "200px",
    height: "200px",
    border: "10px solid #4000ff",
    borderRadius: "50%",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    clipPath: "circle(50%)",
}

const LynxStyle = {
    width: "200px",
    height: "200px",
    border: "10px solid #ffbf00",
    borderRadius: "50%",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    clipPath: "circle(50%)",
}

const SaberStyle = {
    width: "200px",
    height: "200px",
    border: "10px solid #29a329",
    borderRadius: "50%",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    clipPath: "circle(50%)",
} 

export const HousePopup = ({icon, alt, name, num}) => {

    const imageStyles = [PantherStyle, BatStyle, LynxStyle, SaberStyle]

    return (
        <div className="flex flex-col gap-4 ">
            <div className="relative fit-content ">
                <label className="font-bold text-shadow-lg backdrop-blur-sm">{name}</label>
            </div>
            
            <img src={icon} style={imageStyles[num]} alt={alt} className="backdrop-blur-sm" />
        </div>
    )
}