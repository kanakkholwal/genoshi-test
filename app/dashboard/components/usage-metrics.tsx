"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export function UsageMetrics(){

    return (<Card   data-aos="fade-up" data-aos-delay="300">
                <CardHeader>
                    <CardTitle>Usage Metrics</CardTitle>
                    <CardDescription>Your recent usage data</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <div>
                            <h2 className="font-semibold text-lg">Graphs Created</h2>
                            <h3 className="text-gray-500">
                                <span className="font-medium">Today</span> - 3
                            </h3>
                            
                        </div>
                        <div>
                            <h2 className="font-semibold text-lg">Graphs Shared</h2>
                            <h3 className="text-gray-500">
                                <span className="font-medium">Today</span> - 1
                            </h3>

                        </div>
                        <div>
                            <h2 className="font-semibold text-lg">Papers Collected</h2>
                            <h3 className="text-gray-500">
                                <span className="font-medium">Today</span> - 0
                            </h3>

                        </div>
                    </div>
                </CardContent>
            </Card>
    )
}