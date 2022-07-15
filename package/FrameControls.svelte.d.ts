import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        controls?: {} | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type FrameControlsProps = typeof __propDef.props;
export declare type FrameControlsEvents = typeof __propDef.events;
export declare type FrameControlsSlots = typeof __propDef.slots;
export default class FrameControls extends SvelteComponentTyped<FrameControlsProps, FrameControlsEvents, FrameControlsSlots> {
}
export {};
