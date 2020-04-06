export interface SidebarLink {
    name: string;
    icon: string;
    link: string;
}
export interface SplashCard {
    title?: string;
    subtitle?: string;
    content?: string;
    image?: {
        src?: string;
        description?: string;
    };
    imageSize?: "sm" | "md" | "lg";
    actions?: [{
        name: string;
        icon: string;
        action?: Function;
    }];
    footer;
}