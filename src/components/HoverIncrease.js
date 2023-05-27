import { useState } from "react";
function HoverIncrease(props) {
    const [fontSize, setFontSize] = useState(10);

    return (
        <div>
            <button onMouseOver={() => setFontSize((size) => size + 1)}>
                Increase on hover
            </button>
            <p style={{ fontSize }}>
                Sie of font in onMouseHover function: {fontSize}
            </p>
        </div>
    )
}
export default HoverIncrease;
