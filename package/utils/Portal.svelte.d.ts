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
export declare type PortalProps = typeof __propDef.props;
export declare type PortalEvents = typeof __propDef.events;
export declare type PortalSlots = typeof __propDef.slots;
export default class Portal extends SvelteComponentTyped<PortalProps, PortalEvents, PortalSlots> {
}
export {};
