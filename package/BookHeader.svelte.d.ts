import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type BookHeaderProps = typeof __propDef.props;
export declare type BookHeaderEvents = typeof __propDef.events;
export declare type BookHeaderSlots = typeof __propDef.slots;
export default class BookHeader extends SvelteComponentTyped<BookHeaderProps, BookHeaderEvents, BookHeaderSlots> {
}
export {};
