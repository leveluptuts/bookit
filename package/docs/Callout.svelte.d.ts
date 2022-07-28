import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        type?: "warning" | "info" | "correct" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type CalloutProps = typeof __propDef.props;
export declare type CalloutEvents = typeof __propDef.events;
export declare type CalloutSlots = typeof __propDef.slots;
export default class Callout extends SvelteComponentTyped<CalloutProps, CalloutEvents, CalloutSlots> {
}
export {};
