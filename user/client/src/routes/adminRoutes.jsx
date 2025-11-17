import AdminLayout from "@/components/layout/admin/adminLayout";
import Dashboard from "../admin/Dashboard";
import PageTitle from "../utils/PageTitle";
import PostCreationPage from "@/admin/PostCreationPage";
import AdminPosts from "@/admin/AdminPosts";
import LinkRequestsTable from "@/admin/ManageUsers";
import UserLinks from "@/admin/manage-alumni";
import RejectedRequests from "@/admin/rejectedRequests";
import RejectedPosts from "@/admin/RejectedPosts";
import PostRequest from "@/admin/PostRequest";
import ProfileBuild from "@/pages/ProfileBuild";
import UserLinksPage from "@/components/UserLinksModal";
import UserPostsPage from "@/pages/UserPostsPage";
import ProfilePage from "@/pages/ProfilePage";
import adminLayout from './../components/layout/admin/adminLayout';
import SavedPostsPage from "@/pages/SavedPostsPage";

export const adminRoutes = [
    { 
        path: "/dashboard", 
        element: (
            <AdminLayout>
                <PageTitle title="Dashboard | CareerNest" />
                <Dashboard />
            </AdminLayout>
        )
    },
    { 
        path: "/", 
        element: (
            <AdminLayout>
                <PageTitle title="Dashboard | CareerNest" />
                <Dashboard />
            </AdminLayout>
        )
    },
    { 
        path: "/userrequests", 
        element: (
            <AdminLayout>
                <PageTitle title="Manage User | CareerNest" />
                <LinkRequestsTable />
            </AdminLayout>
        )
    },
    { 
        path: "/post-creation", 
        element: (
            <AdminLayout>
                <PageTitle title="Manage User | CareerNest" />
                <PostCreationPage />
            </AdminLayout>
        )
    },
    { 
        path: "/manage-alumni", 
        element: (
            <AdminLayout>
                <PageTitle title="Manage User | CareerNest" />
                <UserLinks />
            </AdminLayout>
        )
    },
    { 
        path: "/rejected-requests", 
        element: (
            <AdminLayout>
                <PageTitle title="Manage User | CareerNest" />
                <RejectedRequests />
            </AdminLayout>
        )
    },
    { 
        path: "/rejected-posts", 
        element: (
            <AdminLayout>
                <PageTitle title="Rejected Posts | CareerNest" />
                <RejectedPosts />
            </AdminLayout>
        )
    },
    { 
        path: "/adminposts", 
        element: (
            <AdminLayout>
                <PageTitle title="Admin Posts | CareerNest" />
                <AdminPosts />
            </AdminLayout>
        )
    },
    { 
        path: "/postrequest", 
        element: (
            <AdminLayout>
                <PageTitle title="Admin Request | CareerNest" />
                <PostRequest />
            </AdminLayout>
        )
    },
    { 
        path: "/buildprofile/:username", 
        element: (
            <AdminLayout>
                <PageTitle title="Admin Profile | CareerNest" />
                <ProfileBuild />
            </AdminLayout>
        )
    },
    {
        path: "/links/:userId",
        element: (
        
                <AdminLayout>
                    <PageTitle title="UserLinks | CareerNest" />
                    <UserLinksPage/>
                </AdminLayout>
        ),},
        {
            path: "/profile/:username",
            element: (
                
                    <AdminLayout>
                        <PageTitle title="Profile | CareerNest" />
                        <ProfilePage />
                    </AdminLayout>
               
            ),
        },
        {
            path: "/profile/:username/posts",
            element: (
                
                    <AdminLayout>
                        <PageTitle title="Profile | CareerNest" />
                        <UserPostsPage />
                    </AdminLayout>
          
            ),
        },
        {
            path: "/saved-posts",
            element: (
                <AdminLayout>
                    <PageTitle title="Saved Posts | CareerNest" />
                    <div className="p-6">
                        <SavedPostsPage />
                    </div>
                </AdminLayout>
            ),
        },
];

