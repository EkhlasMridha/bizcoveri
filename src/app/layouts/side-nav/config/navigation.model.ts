export interface SideNavigationModel {
    name: string;
    route: string;
    matIcon?: string;
    localIcon?: string;
    role: "CLIENT" | "VENDOR" | "ANONYMOUS";
    isAvailabel: boolean;
    completedProfile: boolean;
}