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
    facebook: "https://www.facebook.com/haladigital/",
    youtube: "https://www.youtube.com/channel/haladigital",
    instagram: "https://www.instagram.com/haladigital",
    twitter: "https://www.twitter.com/haladigital"
}

export const LandingFooterAbout: Array<FooterTypes> = [{
    logo: ShydeckWhite,
    text: ``,
    icons: [],
    iconLinks: []
}]

export const LandingFooterServices: Array<FooterTypes> = [
    {
        title: "Send Item",
        link: "#"
    },
    {
        title: "Track Order",
        link: "#"
    }
];

export const LandingFooterCompany: Array<FooterTypes> = [
    {
        title: "About",
        link: "#"
    },
    {
        title: "Privacy Policy",
        link: "#"
    }
];
