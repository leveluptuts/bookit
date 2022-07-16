export declare const bookit_state: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<{
        canvasBg: string;
        selected_frame: any;
        code: 'VISIBLE' | 'HIDDEN';
        loaded: {};
        tree: {
            [key: string]: {
                title: string;
                parent: string;
                icon: string;
            }[];
        };
    }>, invalidate?: ((value?: {
        canvasBg: string;
        selected_frame: any;
        code: 'VISIBLE' | 'HIDDEN';
        loaded: {};
        tree: {
            [key: string]: {
                title: string;
                parent: string;
                icon: string;
            }[];
        };
    } | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
    update: (this: void, updater: import("svelte/store").Updater<{
        canvasBg: string;
        selected_frame: any;
        code: 'VISIBLE' | 'HIDDEN';
        loaded: {};
        tree: {
            [key: string]: {
                title: string;
                parent: string;
                icon: string;
            }[];
        };
    }>) => void;
    set: (this: void, value: {
        canvasBg: string;
        selected_frame: any;
        code: 'VISIBLE' | 'HIDDEN';
        loaded: {};
        tree: {
            [key: string]: {
                title: string;
                parent: string;
                icon: string;
            }[];
        };
    }) => void;
    init: (data: any) => Promise<void>;
};
