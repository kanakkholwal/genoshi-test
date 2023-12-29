import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function SavedGraphs(){
    return ( <Card   data-aos="fade-up" data-aos-delay="400">
        <CardHeader>
            <CardTitle>Saved Graphs</CardTitle>
            <CardDescription>Your saved graphs</CardDescription>
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
                        <p className="text-gray-500">Created on Dec 12, 2023</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img
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
                        <p className="text-gray-500">Created on Dec 11, 2023</p>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>)
}