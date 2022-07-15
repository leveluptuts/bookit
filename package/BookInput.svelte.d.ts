import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        value: any;
        label: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type BookInputProps = typeof __propDef.props;
export declare type BookInputEvents = typeof __propDef.events;
export declare type BookInputSlots = typeof __propDef.slots;
export default class BookInput extends SvelteComponentTyped<BookInputProps, BookInputEvents, BookInputSlots> {
}
export {};
