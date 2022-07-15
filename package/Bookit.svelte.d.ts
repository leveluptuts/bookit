import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        params: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type BookitProps = typeof __propDef.props;
export declare type BookitEvents = typeof __propDef.events;
export declare type BookitSlots = typeof __propDef.slots;
export default class Bookit extends SvelteComponentTyped<BookitProps, BookitEvents, BookitSlots> {
}
export {};
