import Instagram from 'assets/svg/social/white-instagram.svg';
interface FooterTypes {
    logo?: string,
    text?: string,
    icons?: string[],
    iconLinks?: string[],
    iconsTexts?: string[],
    icon?: string,
    title?: string,
    link?: string
};

export const SocialLinks = {
    // facebook: "https://www.facebook.com/",
    // youtube: "https://www.youtube.com/channel",
    instagram: "https://www.instagram.com/shypdeck",
    // twitter: "https://www.twitter.com"
}

export const LandingFooterAbout: Array<FooterTypes> = [{
    title: "hello@shypdeck.com",
    link: "mailto:hello@shypdeck.com"
}]

export const LandingFooterServices: Array<FooterTypes> = [
    {
        title: "About",
        link: "/about"
    },
    {
        title: "Privacy Policy",
        link: "/policy"
    },
    {
        title: "Terms And Conditions",
        link: "/terms"
    }
];

export const LandingFooterCompany: Array<FooterTypes> = [
    {
        iconsTexts: ["@shypdeck"],
        icons: [Instagram],
        iconLinks: [SocialLinks.instagram]
    }
];
