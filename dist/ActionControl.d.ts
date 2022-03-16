import { default as React } from 'react';
import type { PropEx } from '@cssfn/css-types';
import { StyleCollection } from '@cssfn/cssfn';
import type { To } from 'history';
import { ControlProps } from '@nodestrap/control';
export interface PressReleaseVars {
    filter: any;
    anim: any;
}
export declare const isPressed: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isPressing: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isReleasing: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isReleased: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isPress: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isRelease: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
export declare const isPressReleasing: (styles: StyleCollection) => import("@cssfn/cssfn").Rule;
/**
 * Uses press & release states.
 * @returns A `[Factory<Rule>, ReadonlyRefs, ReadonlyDecls]` represents press & release state definitions.
 */
export declare const usesPressReleaseState: () => readonly [() => import("@cssfn/cssfn").Rule, import("@cssfn/css-var").ReadonlyRefs<PressReleaseVars>, import("@cssfn/css-var").ReadonlyDecls<PressReleaseVars>];
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
export declare const usesActionControlLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesActionControlVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesActionControlStates: () => import("@cssfn/cssfn").Rule;
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
declare type SingleChild = React.ReactChild | React.ReactFragment | React.ReactPortal;
export declare const isReactRouterLink: (child: SingleChild) => child is React.ReactElement<{
    to?: To | undefined;
    children?: React.ReactNode;
    passHref?: boolean | undefined;
    component?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
}, string | React.JSXElementConstructor<any>>;
export declare const isNextLink: (child: SingleChild) => child is React.ReactElement<{
    href?: To | undefined;
    children?: React.ReactNode;
    passHref?: boolean | undefined;
}, string | React.JSXElementConstructor<any>>;
export declare const isClientSideLink: (children: React.ReactNode | undefined) => To | undefined;
export interface ActionControlProps<TElement extends HTMLElement = HTMLElement> extends ControlProps<TElement> {
    press?: boolean;
}
export declare function ActionControl<TElement extends HTMLElement = HTMLElement>(props: ActionControlProps<TElement>): JSX.Element;
export { ActionControl as default };
