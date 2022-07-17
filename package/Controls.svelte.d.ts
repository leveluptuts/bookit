import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ControlsProps = typeof __propDef.props;
export declare type ControlsEvents = typeof __propDef.events;
export declare type ControlsSlots = typeof __propDef.slots;
export default class Controls extends SvelteComponentTyped<ControlsProps, ControlsEvents, ControlsSlots> {
}
export {};
