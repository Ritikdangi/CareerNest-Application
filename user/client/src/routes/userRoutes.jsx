import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // Assuming react-hot-toast is installed
import { axiosInstance } from "@/lib/axios";
import Layout from "../components/layout/Layout";
import PageTitle from "../utils/PageTitle";
import HomePage from "../pages/HomePage";
import NotificationsPage from "../pages/NotificationsPage";
import NetworkPage from "../pages/NetworkPage";
import PostPage from "../pages/PostPage";
import ProfilePage from "../pages/ProfilePage";
import MyLinksPage from "../pages/MyLinksPage";
import HashtagPage from "../pages/HashtagPage";
import UserLinksPage from "@/components/UserLinksModal";
import JoinNetworkCalling from "@/pages/JoinNetworkCalling";
import ComingSoon from "@/pages/ComingSoon";
import SavedPostsPage from "@/pages/SavedPostsPage";
import UserPostsPage from "@/pages/UserPostsPage";
import ConversationsPage from "@/pages/ConversationsPage";
import ChatPage from "@/pages/ChatPage";
import SubAdminDashboardPage from "@/subadmin/pages/SubAdminDashboardPage";
import SubAdminRejectedRequests from '@/subadmin/pages/SubAdminRejectedRequests';
import SubAdminProtectedRoute from "@/subadmin/components/SubAdminProtectedRoute";
import SubAdminLayout from "@/subadmin/components/SubAdminLayout";
import SubAdminManageUsers from "@/subadmin/pages/ManageUsers";
import PostCreationPage from "@/subadmin/pages/PostCreationPage";
import PostRequest from "@/subadmin/pages/PostRequest";
import RejectedPosts from "@/subadmin/pages/RejectedPosts";
import SubManageAlumni from "@/subadmin/pages/subManageAlumni";
import SubAdminPosts from "@/subadmin/pages/SubAdminPosts";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axiosInstance.get("/auth/me");
                const user = response.data;

                if (user.Links.length === 0) {
                    toast.error("Join a network first to get started with your home page!");
                    // Wrap navigate in setTimeout to ensure it gets executed correctly
                    setTimeout(() => navigate("/network"), 0);
                }
            } catch (error) {
                console.error("Failed to fetch user data:", error);
                // Redirect to homepage on error
                setTimeout(() => navigate("/"), 0);
            }
        };

        fetchUser();
    }, [navigate]);

    return children;
};

 export const userRoutes = [
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Layout>
                    <PageTitle title="Home | CareerNest" />
                    <HomePage />
                </Layout>
            </ProtectedRoute>
        ),
    },
    {
        path: "/notifications",
        element: (
            <ProtectedRoute>
                <Layout>
                    <PageTitle title="Notifications | CareerNest" />
                    <NotificationsPage />
                </Layout>
            </ProtectedRoute>
        ),
    },
    {
        path: "/network",
        element: (
            <Layout>
                <PageTitle title="Network | CareerNest" />
                <JoinNetworkCalling /> 
            </Layout>
        ),
    },
    {
        path: "/post/:postId",
        element: (
            <ProtectedRoute>
                <Layout>
                    <PageTitle title="Post | CareerNest" />
                    <PostPage />
                </Layout>
            </ProtectedRoute>
        ),
    },
    {
        path: "/profile/:username",
        element: (
            <ProtectedRoute>
                <Layout>
                    <PageTitle title="Profile | CareerNest" />
                    <ProfilePage />
                </Layout>
            </ProtectedRoute>
        ),
    },
    {
        path: "/profile/:username/posts",
        element: (
            <ProtectedRoute>
                <Layout>
                    <PageTitle title="Profile | CareerNest" />
                    <UserPostsPage />
                </Layout>
            </ProtectedRoute>
        ),
    },
    {
        path: "/my-links",
        element: (
            <ProtectedRoute>
                <PageTitle title="My Links | CareerNest" />
                <MyLinksPage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/links/:userId",
        element: (
            <ProtectedRoute>
                <Layout>
                    <PageTitle title="UserLinks | CareerNest" />
                    <UserLinksPage/>
                </Layout>
            </ProtectedRoute>
        ),
    },
    {
        path: "/comingsoon",
        element: (
            <ProtectedRoute>
                <Layout>
                    <PageTitle title="Coming Soon | CareerNest" />
                    <ComingSoon/>
                </Layout>
            </ProtectedRoute>

        ),
    },
    {
        path: "/saved-posts",
        element: (
            <ProtectedRoute>
                <Layout>
                    <PageTitle title="Saved Posts | CareerNest" />
                    <SavedPostsPage />
                </Layout>
            </ProtectedRoute>
        ),
    },
    {
        path: "/hashtag/:tag",
        element: (
            <ProtectedRoute>
                <Layout>
                    <PageTitle title="Hashtag | CareerNest" />
                    <HashtagPage />
                </Layout>
            </ProtectedRoute>
        ),
    },
    {
        path: "/messages",
        element: (
            <ProtectedRoute>
                <Layout>
                    <PageTitle title="Messages | CareerNest" />
                    <ConversationsPage />
                </Layout>
            </ProtectedRoute>
        ),
    },
    {
        path: "/messages/:username",
        element: (
            <ProtectedRoute>
                <Layout>
                    <PageTitle title="Chat | CareerNest" />
                    <ChatPage />
                </Layout>
            </ProtectedRoute>
        ),
    },
    {
        path: "/subadmin",
        element: (
            <ProtectedRoute>
                <SubAdminProtectedRoute requiredPath="/subadmin">
                    <PageTitle title="Sub-Admin Dashboard | CareerNest" />
                    <SubAdminLayout>
                        <SubAdminDashboardPage />
                    </SubAdminLayout>
                </SubAdminProtectedRoute>
            </ProtectedRoute>
        ),
    },
    {
        path: "/subadmin/dashboard",
        element: (
            <ProtectedRoute>
                <SubAdminProtectedRoute requiredPath="/subadmin/dashboard">
                    <PageTitle title="Sub-Admin Dashboard | CareerNest" />
                    <SubAdminLayout>
                        <SubAdminDashboardPage />
                    </SubAdminLayout>
                </SubAdminProtectedRoute>
            </ProtectedRoute>
        ),
    },
    {
        path: "/subadmin/manage-users",
        element: (
            <ProtectedRoute>
                <SubAdminProtectedRoute requiredPath="/subadmin/manage-users">
                    <PageTitle title="Manage Users | CareerNest SubAdmin" />
                    <SubAdminLayout>
                        <SubAdminManageUsers />
                    </SubAdminLayout>
                </SubAdminProtectedRoute>
            </ProtectedRoute>
        ),
    },
    {
        path: "/subadmin/network-requests",
        element: (
            <ProtectedRoute>
                <SubAdminProtectedRoute requiredPath="/subadmin/network-requests">
                    <PageTitle title="Network Requests | CareerNest SubAdmin" />
                    <SubAdminLayout>
                        <SubAdminManageUsers />
                    </SubAdminLayout>
                </SubAdminProtectedRoute>
            </ProtectedRoute>
        ),
    },
    {
        path: "/subadmin/manage-alumni",
        element: (
            <ProtectedRoute>
                <SubAdminProtectedRoute requiredPath="/subadmin/manage-alumni">
                    <PageTitle title="Manage Alumni | CareerNest SubAdmin" />
                    <SubAdminLayout>
                        <SubManageAlumni />
                    </SubAdminLayout>
                </SubAdminProtectedRoute>
            </ProtectedRoute>
        ),
    },
    {
        path: "/subadmin/posts",
        element: (
            <ProtectedRoute>
                <SubAdminProtectedRoute requiredPath="/subadmin/posts">
                    <PageTitle title="View Posts | CareerNest SubAdmin" />
                    <SubAdminLayout>
                        <SubAdminPosts />
                    </SubAdminLayout>
                </SubAdminProtectedRoute>
            </ProtectedRoute>
        ),
    },
    {
        path: "/subadmin/post-creation",
        element: (
            <ProtectedRoute>
                <SubAdminProtectedRoute requiredPath="/subadmin/post-creation">
                    <PageTitle title="Create Post | CareerNest SubAdmin" />
                    <SubAdminLayout>
                        <PostCreationPage />
                    </SubAdminLayout>
                </SubAdminProtectedRoute>
            </ProtectedRoute>
        ),
    },
    {
        path: "/subadmin/post-requests",
        element: (
            <ProtectedRoute>
                <SubAdminProtectedRoute requiredPath="/subadmin/post-requests">
                    <PageTitle title="Post Requests | CareerNest SubAdmin" />
                    <SubAdminLayout>
                        <PostRequest />
                    </SubAdminLayout>
                </SubAdminProtectedRoute>
            </ProtectedRoute>
        ),
    },
    {
        path: "/subadmin/rejected-posts",
        element: (
            <ProtectedRoute>
                <SubAdminProtectedRoute requiredPath="/subadmin/rejected-posts">
                    <PageTitle title="Rejected Posts | CareerNest SubAdmin" />
                    <SubAdminLayout>
                        <RejectedPosts />
                    </SubAdminLayout>
                </SubAdminProtectedRoute>
            </ProtectedRoute>
        ),
    },
    {
        path: "/subadmin/rejected-requests",
        element: (
            <ProtectedRoute>
                <SubAdminProtectedRoute requiredPath="/subadmin/rejected-requests">
                    <PageTitle title="Rejected Requests | CareerNest SubAdmin" />
                    <SubAdminLayout>
                        <SubAdminRejectedRequests />
                    </SubAdminLayout>
                </SubAdminProtectedRoute>
            </ProtectedRoute>
        ),
    },
];


