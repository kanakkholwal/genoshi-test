"use client";

import { AccountDetails } from "./components/account-details";
import { Actions } from "./components/actions";
import { RecentActivity } from "./components/recent-activity";
import { SavedGraphs } from "./components/saved-graphs";
import { UsageMetrics } from "./components/usage-metrics";
import { UserProfile } from "./components/user-profile";
export default function DashBoardPage() {
    return (<>
        <div className="py-4">
            <h1 className="text-3xl font-bold"  data-aos="fade-right">Profile Dashboard</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full mx-auto">
            <UserProfile />
            <AccountDetails />
            <RecentActivity />
            <UsageMetrics />
            <SavedGraphs />
            <Actions />
        </div>
    </>)
}