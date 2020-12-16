import { NavigationModel } from "../../contracts/navigation.model";

export const authpageNavigation: NavigationModel[] = [
    {
        name: "Sign Up",
        route: "signup",
        type: "secondary"
    },
    {
        name: "Login",
        route: "signin",
        type: "secondary"
    }
];

export const customToolbarNavigation: NavigationModel[] = [
    {
        name: "Solution",
        route: "#",
        type: "secondary"
    },
    {
        name: "Why Bizcoveri",
        route: "why-bizcovery",
        type: "secondary"
    },
    {
        name: "About",
        route: "about",
        type: "secondary"
    },
    {
        name: "Contact us",
        route: "#",
        type: "secondary"
    },
    {
        name: "Create Project",
        route: "#",
        type: "primary"
    }
];