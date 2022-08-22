
export const leftLinks: typeOfHeaderItem[] = [
    // {
    //     "title": "Home",
    //     "link": "/"
    // }
];

export const rightLinks: typeOfHeaderItem[] = [
    {
        "title": "Track Order",
        "link": "/track"
    },
    {
        "title": "About",
        "link": "/about"
    }
];

export type typeOfHeaderItem = {
    title?: string,
    type?: string,
    link?: string,
    links?: { [key: string]: any }[],
    class?: string
};
