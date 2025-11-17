import InstituteAnalysis from "@/superadmin/Institutes/InstituteAnalysis";
import DefaultLayout from "../components/layout/DefaultLayout";

import CorporateList from "../superadmin/Corporates/CorporateList";
import CreateAdminForm from "../superadmin/CreateAdminForm";
import InstituteList from "../superadmin/Institutes/InstituteList";
import SchoolList from "../superadmin/Schools/SchoolList";
import SuperAdminPage from "../superadmin/SuperAdminPage";

import PageTitle from "../utils/PageTitle";
import CorporateAnalysis from "@/superadmin/Corporates/CorporateAnalysis";
import SchoolAnalysis from "@/superadmin/Schools/SchoolAnalysis";
import ContactRequests from "@/superadmin/ContactRequests/ContactRequests";
import LeadManagement from "../superadmin/LeadManagement/LeadManagement";
import LeadDashboard from "../superadmin/LeadManagement/LeadDashboard";

export const superAdminRoutes = [
   
    { 
        path: "/", 
        element: (
            <DefaultLayout>
                <PageTitle title="Create an admin | CareerNest" />
                <SuperAdminPage />
                
            </DefaultLayout>
        )
    },
    { 
        path: "/institute-analysis", 
        element: (
            <DefaultLayout>
                <PageTitle title="Create an admin | CareerNest" />
                <InstituteAnalysis />
            </DefaultLayout>
        )
    },
    { 
        path: "/create-admin", 
        element: (
            <DefaultLayout>
                <PageTitle title="Create an admin | CareerNest" />
             
                <CreateAdminForm />
               
            </DefaultLayout>
        )
    },
    { 
        path: "/Institute-List", 
        element: (
            <DefaultLayout>
                <PageTitle title="Manage Institutes | CareerNest" />
             
                <InstituteList />
               
            </DefaultLayout>
        )
    },
    { 
        path: "/Institute-Analysis", 
        element: (
            <DefaultLayout>
                <PageTitle title="Analyse Corporates| CareerNest" />
                <InstituteAnalysis/>
                
            </DefaultLayout>
        )
    },
    { 
        path: "/School-List", 
        element: (
            <DefaultLayout>
                <PageTitle title="Manage Schools | CareerNest" />
             
                <SchoolList />
               
            </DefaultLayout>
        )
    },
    { 
        path: "/School-Analysis", 
            element: (
            <DefaultLayout>
                <PageTitle title="Analyse Corporates| CareerNest" />
                <SchoolAnalysis/>
                
            </DefaultLayout>
        )
    },
    { 
        path: "/corporate-List", 
        element: (
            <DefaultLayout>
                <PageTitle title="Manage Schools | CareerNest" />
             
                <CorporateList />
               
            </DefaultLayout>
        )
    },
    { 
        path: "/corporate-Analysis", 
        element: (
            <DefaultLayout>
                <PageTitle title="Analyse Corporates| CareerNest" />
                <CorporateAnalysis/>
                
            </DefaultLayout>
        )
    },
    { 
        path: "/contact-requests", 
        element: (
            <DefaultLayout>
                <PageTitle title="Contact Requests | CareerNest" />
                <ContactRequests />
            </DefaultLayout>
        )
    },
    { 
        path: "/lead-management", 
        element: (
            <DefaultLayout>
                <PageTitle title="Lead Management | CareerNest" />
                <LeadManagement />
            </DefaultLayout>
        )
    },
    { 
        path: "/lead-dashboard", 
        element: (
            <DefaultLayout>
                <PageTitle title="Lead Dashboard | CareerNest" />
                <LeadDashboard />
            </DefaultLayout>
        )
    },

    // Add additional super-admin-specific routes here if needed
];



