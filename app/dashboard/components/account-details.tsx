import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export function AccountDetails() {

    return (<Card  data-aos="fade-up" data-aos-delay="100">
        <CardHeader>
            <CardTitle>Account Details</CardTitle>
            <CardDescription>Your subscription and account status</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col gap-4 justify-between">
                <div>
                    <h2 className="font-semibold text-lg">Subscription</h2>
                    <p className="text-gray-500">Premium - Active</p>
                </div>
                <Button className="mt-6">Manage Subscription</Button>
            </div>
        </CardContent>
    </Card>)
}