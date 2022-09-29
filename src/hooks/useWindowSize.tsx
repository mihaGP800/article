import {useState, useEffect} from "react";

export interface Size {
    width: number | undefined;
    height: number | undefined;
}

export function useWindowSize(): Size {
    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

// Usage
// function App() {
//     const size: Size = useWindowSize();
//     return (
//         <div>
//             {size.width}px / {size.height}px
//         </div>
//     );
// }