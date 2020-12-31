import { StepModel } from "@contracts/step.model";
import { EvaluationProcessComponent } from "../components/create-project/sub-components/evaluation-process/evaluation-process.component";
import { ProjectLogisticsComponent } from "../components/create-project/sub-components/project-logistics/project-logistics.component";
import { ProjectOverviewComponent } from "../components/create-project/sub-components/project-overview/project-overview.component";
import { ReviewComponent } from "../components/create-project/sub-components/review/review.component";
import { TeamMembersComponent } from "../components/create-project/sub-components/team-members/team-members.component";

export const ProjectSteps: StepModel[] = [
    {
        headerMatIcon: "description",
        headerTitle: "Project Overview",
        headerDescript: "Describe the project and select a category",
        userType: "client",
        component: ProjectOverviewComponent
    },
    {
        headerMatIcon: "language",
        headerTitle: "Project Logistics",
        headerDescript: "Provide project timelines and administration details",
        userType: "client",
        component: ProjectLogisticsComponent
    },
    {
        headerMatIcon: "ballot",
        headerTitle: "Evaluation Process",
        headerDescript: "Describe additional project requirement",
        userType: "client",
        component: EvaluationProcessComponent
    },
    {
        headerMatIcon: "people_outline",
        headerTitle: "Team Members",
        headerDescript: "Add your team members for seamless execution",
        userType: "client",
        component: TeamMembersComponent
    },
    {
        headerMatIcon: "rate_review",
        headerTitle: "Review",
        headerDescript: "Review the project details before submitting",
        userType: "client",
        component: ReviewComponent
    },
];