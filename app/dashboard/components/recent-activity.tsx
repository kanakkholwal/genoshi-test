import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function RecentActivity() {

    return (<Card   data-aos="fade-up" data-aos-delay="300">
        <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your recent actions and updates</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <Image
                        alt="Graph Thumbnail"
                        height="50"
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "50/50",
                            objectFit: "cover",
                        }}
                        width="50"
                    />
                    <div>
                        <h2 className="font-semibold text-lg">Graph Title</h2>
                        <p className="text-gray-500">Created at 12:34 PM</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Image
                        alt="Collection Thumbnail"
                        height="50"
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "50/50",
                            objectFit: "cover",
                        }}
                        width="50"
                    />
                    <div>
                        <h2 className="font-semibold text-lg">Collection Title</h2>
                        <p className="text-gray-500">Added at 2:45 PM</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Image
                        alt="Query Thumbnail"
                        height="50"
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "50/50",
                            objectFit: "cover",
                        }}
                        width="50"
                    />
                    <div>
                        <h2 className="font-semibold text-lg">Query Title</h2>
                        <p className="text-gray-500">Executed at 3:15 PM</p>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>)
}