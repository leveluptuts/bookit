import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        responsive?: boolean | undefined;
        size?: [string | number, string | number] | undefined;
        bg?: string | undefined;
        padding?: number | undefined;
        border?: boolean | undefined;
        checker?: boolean | undefined;
        title: string;
        controls?: null | any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            props: any;
        };
    };
};
export declare type FrameProps = typeof __propDef.props;
export declare type FrameEvents = typeof __propDef.events;
export declare type FrameSlots = typeof __propDef.slots;
export default class Frame extends SvelteComponentTyped<FrameProps, FrameEvents, FrameSlots> {
}
export {};
