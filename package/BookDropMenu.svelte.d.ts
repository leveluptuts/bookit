import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        buttonText?: string | undefined;
        onUpdate: any;
        options: any;
        icon?: "frame" | "component" | "size" | "canvas" | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type BookDropMenuProps = typeof __propDef.props;
export declare type BookDropMenuEvents = typeof __propDef.events;
export declare type BookDropMenuSlots = typeof __propDef.slots;
export default class BookDropMenu extends SvelteComponentTyped<BookDropMenuProps, BookDropMenuEvents, BookDropMenuSlots> {
}
export {};
