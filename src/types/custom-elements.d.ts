// src/types/custom-elements.d.ts
import "react";

declare module "react" {
    interface PixelCanvasHTMLAttributes<T> extends React.HTMLAttributes<T> {
        "data-gap"?: number;
        "data-speed"?: number;
        "data-colors"?: string;
        "data-variant"?: "default" | "icon";
        "data-no-focus"?: "" | boolean; // Allow empty string or boolean
        ref?: React.Ref<T>;
    }

    namespace JSX {
        interface IntrinsicElements {
            "pixel-canvas": PixelCanvasHTMLAttributes<HTMLElement>;
        }
    }
}
