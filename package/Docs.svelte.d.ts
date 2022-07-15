/** @typedef {typeof __propDef.props}  DocsProps */
/** @typedef {typeof __propDef.events}  DocsEvents */
/** @typedef {typeof __propDef.slots}  DocsSlots */
export default class Docs extends SvelteComponentTyped<{}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DocsProps = typeof __propDef.props;
export type DocsEvents = typeof __propDef.events;
export type DocsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
