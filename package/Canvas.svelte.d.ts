import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        canvas_bg?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type CanvasProps = typeof __propDef.props;
export declare type CanvasEvents = typeof __propDef.events;
export declare type CanvasSlots = typeof __propDef.slots;
export default class Canvas extends SvelteComponentTyped<CanvasProps, CanvasEvents, CanvasSlots> {
}
export {};
