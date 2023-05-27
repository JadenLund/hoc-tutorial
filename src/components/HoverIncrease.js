function HoverIncrease(props) {
    const [fontSize, setFontSize] = useState(10);

    return (
        <div>
            <button onMouseOver={() => setFontSize((size) => siz + 1)}>
                Increase on hover
            </button>
            <p style={{ fontSize }}>
                Sie of font in onouseOver function: {fontSize}
            </p>
        </div>
    )
}
export default HoverIncrease;
