import { useId } from "react";

function polygonToRoundedPath(polygon, radius = 0.03) {
    const points = polygon
        .split(",")
        .map((point) => {
        const [x, y] = point.trim().split(/\s+/);

        return {
            x: parseFloat(x) / 100,
            y: parseFloat(y) / 100,
        };
        });

    if (points.length < 3) {
        throw new Error("A polygon needs at least 3 points.");
    }

    const roundedPoints = points.map((current, index) => {
        const previous = points[(index - 1 + points.length) % points.length];
        const next = points[(index + 1) % points.length];

        // Vector from current → previous
        const previousVector = {
        x: previous.x - current.x,
        y: previous.y - current.y,
        };

        // Vector from current → next
        const nextVector = {
        x: next.x - current.x,
        y: next.y - current.y,
        };

        const previousLength = Math.hypot(
        previousVector.x,
        previousVector.y
        );

        const nextLength = Math.hypot(
        nextVector.x,
        nextVector.y
        );

        // Don't allow the rounding distance
        // to consume too much of the edge.
        const offset = Math.min(
        radius,
        previousLength / 2,
        nextLength / 2
        );

        // Normalize previous vector
        const previousUnit = {
        x: previousVector.x / previousLength,
        y: previousVector.y / previousLength,
        };

        // Normalize next vector
        const nextUnit = {
        x: nextVector.x / nextLength,
        y: nextVector.y / nextLength,
        };

        // Point where the incoming line stops
        const start = {
        x: current.x + previousUnit.x * offset,
        y: current.y + previousUnit.y * offset,
        };

        // Point where the outgoing line starts
        const end = {
        x: current.x + nextUnit.x * offset,
        y: current.y + nextUnit.y * offset,
        };

        return {
        start,
        end,
        corner: current,
        };
    });

    // Start at the rounded point of the first corner.
    let path = `M ${roundedPoints[0].end.x} ${roundedPoints[0].end.y}`;

    for (let i = 1; i <= roundedPoints.length; i++) {
        const current =
        roundedPoints[i % roundedPoints.length];

        path += `
        L ${current.start.x} ${current.start.y}
        Q ${current.corner.x} ${current.corner.y}
            ${current.end.x} ${current.end.y}
        `;
    }

    path += " Z";

    return path;
}


const ZentryImage = ({
    src,
    alt = "",
    polygon,
    radius = 0.03,
    style = {},
    classes
}) => {
    const id = useId().replace(/:/g, "");

    const clipPathId = `zentry-clip-${id}`;

    const path = polygonToRoundedPath(
        polygon,
        radius
    );

    return (
        <>
            <svg
                style={{
                position: "absolute",
                width: 0,
                height: 0,
                }}
            >
                <defs>
                <clipPath
                    id={clipPathId}
                    clipPathUnits="objectBoundingBox"
                >
                    <path d={path} />
                </clipPath>
                </defs>
            </svg>

            <img
                src={src}
                alt={alt}
                className={classes}
                style={{
                    objectFit: "cover",

                    clipPath: `url(#${clipPathId})`,

                    ...style,
                }}
            />
        </>
    );
}

export default ZentryImage;