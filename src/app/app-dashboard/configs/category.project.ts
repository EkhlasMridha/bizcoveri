export interface ProjectCategory {
    name: string;
    user: "CLIENT" | "VENDOR";
    lifeCycleStage: "saved" | "bidding" | "execution" | "completed";
    project?: any;
    tableConf: Partial<ColumnConfig>[];
}

export interface ColumnConfig {
    header: string;
    cellId: string;
}

export const VendorProjectCategory: ProjectCategory[] = [
    {
        name: "Projects available for bidding",
        user: "VENDOR",
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
                header: "RFP Status",
                cellId: "position"
            }
        ]
    },
    {
        name: "Projects in execution stage",
        user: "VENDOR",
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
                header: "RFP Status",
                cellId: "position"
            }
        ]
    },
    {
        name: "Historical projects",
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
                header: "Project Manager",
                cellId: "weight"
            },
            {
                header: "RFP Status",
                cellId: "position"
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
            }
        ]
    }
];