import { default as React } from 'react';
import type { PropEx } from '@cssfn/css-types';
import { StyleCollection } from '@cssfn/cssfn';
import { ControlProps } from '@nodestrap/control';
export interface PressReleaseVars {
    filter: any;
    anim: any;
}
export declare const isPressed: (styles: StyleCollection) => import("@cssfn/cssfn").RuleEntry;
export declare const isPressing: (styles: StyleCollection) => import("@cssfn/cssfn").RuleEntry;
export declare const isReleasing: (styles: StyleCollection) => import("@cssfn/cssfn").RuleEntry;
export declare const isReleased: (styles: StyleCollection) => import("@cssfn/cssfn").RuleEntry;
export declare const isPress: (styles: StyleCollection) => import("@cssfn/cssfn").RuleEntry;
export declare const isRelease: (styles: StyleCollection) => import("@cssfn/cssfn").RuleEntry;
export declare const isPressReleasing: (styles: StyleCollection) => import("@cssfn/cssfn").RuleEntry;
/**
 * Uses press & release states.
 * @returns A `[Factory<StyleCollection>, ReadonlyRefs, ReadonlyDecls]` represents press & release state definitions.
 */
export declare const usesPressReleaseState: () => readonly [() => StyleCollection, import("@cssfn/css-var").ReadonlyRefs<PressReleaseVars>, import("@cssfn/css-var").ReadonlyDecls<PressReleaseVars>];
export declare const usePressReleaseState: (props: ActionControlProps, mouses?: number[] | null, keys?: string[] | null) => {
    /**
     * partially/fully press
    */
    press: boolean;
    class: string | null;
    handlePress: () => void;
    handleMouseDown: React.MouseEventHandler<HTMLElement>;
    handleKeyDown: React.KeyboardEventHandler<HTMLElement>;
    handleAnimationEnd: (e: React.AnimationEvent<HTMLElement>) => void;
};
export declare const usesActionControlLayout: () => StyleCollection;
export declare const usesActionControlVariants: () => StyleCollection;
export declare const usesActionControlStates: () => StyleCollection;
export declare const useActionControlSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    cursor: string;
    filterPress: string[][];
    '@keyframes press': PropEx.Keyframes;
    '@keyframes release': PropEx.Keyframes;
    animPress: (string | PropEx.Keyframes)[][];
    animRelease: (string | PropEx.Keyframes)[][];
}>, cssDecls: import("@cssfn/css-config").Decls<{
    cursor: string;
    filterPress: string[][];
    '@keyframes press': PropEx.Keyframes;
    '@keyframes release': PropEx.Keyframes;
    animPress: (string | PropEx.Keyframes)[][];
    animRelease: (string | PropEx.Keyframes)[][];
}>, cssVals: import("@cssfn/css-config").Vals<{
    cursor: string;
    filterPress: string[][];
    '@keyframes press': PropEx.Keyframes;
    '@keyframes release': PropEx.Keyframes;
    animPress: (string | PropEx.Keyframes)[][];
    animRelease: (string | PropEx.Keyframes)[][];
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export interface ActionControlProps<TElement extends HTMLElement = HTMLElement> extends ControlProps<TElement> {
    press?: boolean;
}
export declare function ActionControl<TElement extends HTMLElement = HTMLElement>(props: ActionControlProps<TElement>): JSX.Element;
export { ActionControl as default };
