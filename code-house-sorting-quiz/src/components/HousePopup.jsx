import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index.css'

const CENTER = "center center"

const InfoStyle = {
    padding: '20px',
    textAlign: 'center',
    width: "600px",
    height: "400px",
    backgroundColor: "grey",
    borderRadius: "20px",
}

//How to minimize this styling?
const PantherStyle = {
    width: "240px",
    height: "240px",
    border: "10px solid #f00000",
    borderRadius: "50%",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    clipPath: "circle(50%)",
}

const BatStyle = {
    width: "240px",
    height: "240px",
    border: "10px solid #4000ff",
    borderRadius: "50%",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    clipPath: "circle(50%)",
}

const LynxStyle = {
    width: "240px",
    height: "240px",
    border: "10px solid #ffbf00",
    borderRadius: "50%",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    clipPath: "circle(50%)",
}

const SaberStyle = {
    width: "240px",
    height: "240px",
    border: "10px solid #29a329",
    borderRadius: "50%",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    clipPath: "circle(50%)",
}

export const HousePopup = ({icon, color, description, alt, name, num}) => {

    const imageStyles = [PantherStyle, BatStyle, LynxStyle, SaberStyle]

    return (
        <div className="flex flex-col gap-4">
            <label className="font-bold text-shadow-lg">{name}</label>
            <Popup 
                trigger={
                    <button className="rounded-full">
                        <img src={icon} style={imageStyles[num]} alt={alt} />
                    </button>} 
                position={CENTER}
                contentStyle={InfoStyle}
            >
                <div className="flex flex-col text-center ">
                    <h1 className="text-2xl underline decoration-4 mb-4">{name}</h1>
                    <p>{description}</p>
                </div>
            </Popup>
        </div>
    )
}