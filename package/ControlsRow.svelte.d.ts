import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        key: any;
        value: any;
        path: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ControlsRowProps = typeof __propDef.props;
export declare type ControlsRowEvents = typeof __propDef.events;
export declare type ControlsRowSlots = typeof __propDef.slots;
export default class ControlsRow extends SvelteComponentTyped<ControlsRowProps, ControlsRowEvents, ControlsRowSlots> {
}
export {};
