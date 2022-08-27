import ShydeckWhite from 'assets/png/shydeck/logo_white.png';

interface FooterTypes {
    logo?: string,
    text?: string,
    icons?: string[],
    iconLinks?: string[],
    icon?: string,
    title?: string,
    link?: string
};

export const SocialLinks = {
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/channel",
    instagram: "https://www.instagram.com/shypdeck",
    twitter: "https://www.twitter.com"
}

export const LandingFooterAbout: Array<FooterTypes> = [{
    logo: ShydeckWhite,
    text: ``,
    icons: [],
    iconLinks: []
}]

export const LandingFooterServices: Array<FooterTypes> = [
    {
        title: "Terms And Conditions",
        link: "/terms"
    }
];

export const LandingFooterCompany: Array<FooterTypes> = [
    {
        title: "About",
        link: "/about"
    },
    {
        title: "Privacy Policy",
        link: "/policy"
    }
];
