import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChromeIcon } from "lucide-react"
import SampleGraph from "../sample/sample-graph"
export default function Page() {

    return (<>
        <div className="py-4">
            <h1 className="text-3xl font-bold"  data-aos="fade-right">
                Account Settings
            </h1>
        </div>
        <main className="flex flex-row flex-wrap items-stretch gap-6 max-w-6xl w-full mx-auto">
            <Card className="w-full max-w-lg mb-4"   data-aos="fade-up" >
                <CardHeader>
                    <CardTitle>Update Profile Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Enter your email" type="email" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="profile-picture">Profile Picture</Label>
                        <Input id="profile-picture" type="file" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="ml-auto">Save</Button>
                </CardFooter>
            </Card>
            <Card className="w-full max-w-lg mb-4"  data-aos="fade-up" data-aos-delay="300">
                <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="ml-auto">Save</Button>
                </CardFooter>
            </Card>
            <Card className="w-full max-w-lg"  data-aos="fade-up" data-aos-delay="500">
                <CardHeader>
                    <CardTitle>Manage Subscription</CardTitle>
                    <CardDescription>Current Plan: Pro ($9/month)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button className="w-full" variant="primary">Upgrade Plan</Button>
                    <Button className="w-full">Downgrade Plan</Button>
                    <Button className="w-full" variant="outline">
                        Cancel Subscription
                    </Button>
                </CardContent>
            </Card>
            <Card className="w-full max-w-lg mb-4"  data-aos="fade-up" data-aos-delay="700">
                <CardHeader>
                    <CardTitle>Link Third-Party Accounts</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <Button>
                        <ChromeIcon className="w-4 h-4 mr-2" />
                        Link to Google
                    </Button>
                </CardContent>
            </Card>
            <Card className="w-full"  data-aos="fade-up" >
                <CardHeader>
                    <CardTitle>View Usage Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                    <SampleGraph />
                </CardContent>
            </Card>
        </main>
    </>)
}