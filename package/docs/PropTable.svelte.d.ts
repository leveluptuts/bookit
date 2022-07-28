import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        props?: {
            [key: string]: {
                text: string;
                default?: any;
                type: string;
            };
        } | undefined;
        title?: string | boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type PropTableProps = typeof __propDef.props;
export declare type PropTableEvents = typeof __propDef.events;
export declare type PropTableSlots = typeof __propDef.slots;
export default class PropTable extends SvelteComponentTyped<PropTableProps, PropTableEvents, PropTableSlots> {
}
export {};
