export interface ChildToolbarNavModel {
    name: string;
    route: string;
    userType: "shared" | "client" | "vendor";
}

export const ChildNavigations: ChildToolbarNavModel[] = [
    {
        name: "Project Details",
        route: "detail",
        userType: "shared"
    },
    {
        name: "Project Roles & Users",
        route: "project-roles",
        userType: "shared"
    },
    {
        name: "Service Partner Selection",
        route: "service-partner",
        userType: "client"
    },
    {
        name: "Q & A",
        route: "qa",
        userType: "shared"
    },
    {
        name: "Proposals",
        route: "proposals",
        userType: "client"
    },
    {
        name: "Proposal Submition",
        route: "proposals",
        userType: "vendor"
    },
    {
        name: "Agreement",
        route: "agreement",
        userType: "shared"
    }
];