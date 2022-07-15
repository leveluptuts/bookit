import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type BookNavProps = typeof __propDef.props;
export declare type BookNavEvents = typeof __propDef.events;
export declare type BookNavSlots = typeof __propDef.slots;
export default class BookNav extends SvelteComponentTyped<BookNavProps, BookNavEvents, BookNavSlots> {
}
export {};
