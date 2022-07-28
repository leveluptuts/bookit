import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        active?: boolean | undefined;
    };
    events: {
        click: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type SideBarHeadingProps = typeof __propDef.props;
export declare type SideBarHeadingEvents = typeof __propDef.events;
export declare type SideBarHeadingSlots = typeof __propDef.slots;
export default class SideBarHeading extends SvelteComponentTyped<SideBarHeadingProps, SideBarHeadingEvents, SideBarHeadingSlots> {
}
export {};
