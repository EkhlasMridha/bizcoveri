import { SideNavigationModel } from "./navigation.model";

export var Navigations: SideNavigationModel[] = [
    {
        name: "Notifications",
        route: "#",
        matIcon: "notifications",
        role: "ANONYMOUS",
        isAvailabel: true,
        completedProfile: false
    },
    {
        name: "Dashboard",
        route: "dashboard",
        matIcon: "dashboard",
        role: "ANONYMOUS",
        isAvailabel: true,
        completedProfile: false
    },
    {
        name: "Company Details",
        route: "#",
        matIcon: "list_alt",
        role: "ANONYMOUS",
        isAvailabel: true,
        completedProfile: false
    },
    {
        name: "Pricing",
        route: "#",
        localIcon: "rupee",
        role: "CLIENT",
        isAvailabel: true,
        completedProfile: true
    },
    {
        name: "Account Settings",
        route: "#",
        matIcon: "settings_applications",
        role: "ANONYMOUS",
        isAvailabel: true,
        completedProfile: false
    },
    {
        name: "Meetings",
        route: "#",
        matIcon: "event_note",
        role: "CLIENT",
        isAvailabel: true,
        completedProfile: true
    },
    {
        name: "Solution",
        route: "#",
        localIcon: "solution",
        role: "ANONYMOUS",
        isAvailabel: true,
        completedProfile: false
    },
    {
        name: "Help",
        route: "#",
        matIcon: "help",
        role: "ANONYMOUS",
        isAvailabel: true,
        completedProfile: false
    }
];