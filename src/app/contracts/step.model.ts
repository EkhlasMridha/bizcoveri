export interface StepModel {
    headerMatIcon?: string;
    headerLocalIcon?: string;
    headerTitle: string;
    headerDescript: string;
    component: any;
    userType: "client" | "vendor" | "shared";
}