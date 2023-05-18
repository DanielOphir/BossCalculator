import { MutableRefObject, useEffect } from "react";

export default function useOnClickOutside(ref: MutableRefObject<any>, handler: Function) {
    useEffect(() => {
        const listener = (event: Event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };

        const keyListener = (event: KeyboardEvent) => {
            if (event.key === "Escape")
                listener(event);
        };

        document.addEventListener("mouseup", listener);
        document.addEventListener("touchend", listener);
        document.addEventListener("keyup", keyListener);

        return () => {
            document.removeEventListener("mouseup", listener);
            document.removeEventListener("touchend", listener);
            document.removeEventListener("keyup", keyListener);
        };

        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
    }, [ref, handler]);
};
