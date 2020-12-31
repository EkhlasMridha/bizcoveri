import { StepBasicInfoComponent } from "../components/step-basic-info/step-basic-info.component";
import { StepCompanyDetailsComponent } from "../components/step-company-details/step-company-details.component";
import { StepPartnerProfileComponent } from "../components/step-partner-profile/step-partner-profile.component";
import { StepProjectComponent } from "../components/step-project/step-project.component";
import { StepReviewComponent } from "../components/step-review/step-review.component";
import { StepServiceComponent } from "../components/step-service/step-service.component";
import { StepTeamMembersComponent } from "../components/step-team-members/step-team-members.component";
import { StepModel } from "./step.model";

export const StepConfig: StepModel[] = [
    {
        headerMatIcon: "description",
        headerTitle: "Basic Information",
        headerDescript: "Name, address and profiles",
        userType: "shared",
        component: StepBasicInfoComponent
    },
    {
        headerMatIcon: "business",
        headerTitle: "Company details",
        headerDescript: "Description, people and location",
        userType: "shared",
        component: StepCompanyDetailsComponent
    },
    {
        headerMatIcon: "assignment_ind",
        headerTitle: "Partner profiles",
        headerDescript: "Partners and their profiles",
        userType: "vendor",
        component: StepPartnerProfileComponent
    },
    {
        headerMatIcon: "business_center",
        headerTitle: "Services & industries",
        headerDescript: "Services provided and industries served",
        userType: "vendor",
        component: StepServiceComponent
    },
    {
        headerMatIcon: "data_usage",
        headerTitle: "Project experience",
        headerDescript: "Projects executed and client testimonials",
        userType: "vendor",
        component: StepProjectComponent
    },
    {
        headerLocalIcon: "team",
        headerTitle: "Team members",
        headerDescript: "Add all your team members dor seamless execution",
        userType: "shared",
        component: StepTeamMembersComponent
    },
    {
        headerMatIcon: "rate_review",
        headerTitle: "Review",
        headerDescript: "Review the project details before submitting",
        userType: "shared",
        component: StepReviewComponent
    },
];