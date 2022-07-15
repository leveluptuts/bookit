export declare function getStory({ parent, title }: {
    parent: any;
    title: any;
}): Promise<{
    title: string;
    parent: string;
    icon: string;
} | null | undefined>;
export declare function load({ params }: {
    params: any;
}): {
    props: {
        params: any;
    };
};
