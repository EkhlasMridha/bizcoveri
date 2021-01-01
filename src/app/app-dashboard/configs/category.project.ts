export interface ProjectCategory {
    name: string;
    user: "CLIENT" | "VENDOR";
    lifeCycleStage: "saved" | "bidding" | "execution" | "completed";
    project?: any;
    bidding?: boolean;
    tableConf: Partial<ColumnConfig>[];
}

export interface ColumnConfig {
    header?: string;
    cellId?: string;
    button?: boolean;
    isHighlight?: boolean;
    route?: string;
    queryParam: any;
}

export const VendorProjectCategory: ProjectCategory[] = [
    {
        name: "Projects available for bidding",
        user: "VENDOR",
        lifeCycleStage: "saved",
        bidding: true,
        tableConf: [
            {
                header: "Project Title",
                cellId: "name"
            },
            {
                header: "Category",
                cellId: "symbol"
            },
            {
                header: "Industry",
                cellId: "weight"
            },
            {
                header: "Fee Amount",
                cellId: "position"
            },
            {
                header: "Pay Fee",
                cellId: "action",
                isHighlight: true,
                button: true,
                route: "project-finalize"
            }
        ]
    },
    {
        name: "Projects in bidding stage",
        user: "VENDOR",
        lifeCycleStage: "bidding",
        tableConf: [
            {
                header: "Project Title",
                cellId: "name"
            },
            {
                header: "Category",
                cellId: "symbol"
            },
            {
                header: "Project Manager",
                cellId: "weight"
            },
            {
                header: "Project Stage",
                cellId: "position"
            },
            {
                header: "View",
                cellId: "action",
                button: true,
                route: "/biz-solution/project/detail",
            }
        ]
    },
    {
        name: "Won Projects",
        user: "VENDOR",
        lifeCycleStage: "completed",
        tableConf: [
            {
                header: "Project Title",
                cellId: "name"
            },
            {
                header: "Category",
                cellId: "symbol"
            },
            {
                header: "Company Name",
                cellId: "weight"
            },
            {
                header: "Project Manager",
                cellId: "position"
            },
            {
                header: "View",
                cellId: "action",
                button: true,
                route: "/biz-solution/project/detail",
            }
        ]
    }
];

export const ClientProjectCategory: ProjectCategory[] = [
    {
        name: "Saved projects",
        user: "CLIENT",
        lifeCycleStage: "saved",
        tableConf: [
            {
                header: "Project Title",
                cellId: "name"
            },
            {
                header: "Category",
                cellId: "symbol"
            },
            {
                header: "Project Manager",
                cellId: "weight"
            },
            {
                header: "RFP Status",
                cellId: "position"
            },
            {
                header: "View",
                cellId: "action",
                button: true,
                route: "create-project",
                queryParam: -1
            }
        ]
    },
    {
        name: "Projects in bidding stage",
        user: "CLIENT",
        lifeCycleStage: "bidding",
        tableConf: [
            {
                header: "Project Title",
                cellId: "name"
            },
            {
                header: "Category",
                cellId: "symbol"
            },
            {
                header: "Project Manager",
                cellId: "weight"
            },
            {
                header: "Project Stage",
                cellId: "position"
            },
            {
                header: "View",
                cellId: "action",
                button: true,
                route: "create-project",
                queryParam: -1
            }
        ]
    },
    {
        name: "Projects in execution stage",
        user: "CLIENT",
        lifeCycleStage: "execution",
        tableConf: [
            {
                header: "Project Title",
                cellId: "name"
            },
            {
                header: "Category",
                cellId: "symbol"
            },
            {
                header: "Project Manager",
                cellId: "weight"
            },
            {
                header: "Project Status",
                cellId: "position"
            },
            {
                header: "View",
                cellId: "action",
                button: true,
                route: "create-project",
                queryParam: -1
            }
        ]
    },
    {
        name: "Completed projects",
        user: "CLIENT",
        lifeCycleStage: "completed",
        tableConf: [
            {
                header: "Project Title",
                cellId: "name"
            },
            {
                header: "Category",
                cellId: "symbol"
            },
            {
                header: "Service Provider",
                cellId: "weight"
            },
            {
                header: "Project Manager",
                cellId: "position"
            },
            {
                header: "View",
                cellId: "action",
                button: true,
                route: "create-project",
                queryParam: -1
            }
        ]
    }
];