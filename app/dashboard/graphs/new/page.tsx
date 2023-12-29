"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SampleGraph from "../../sample/sample-graph";

export default function Page() {

    return (<>

        <main className="max-w-6xl w-full mx-auto my-4 space-y-4">
            <Card  data-aos="fade-up">
                <CardHeader>
                    <CardTitle  data-aos="fade-right" data-aos-delay="100">Create a new graph</CardTitle>
                    <CardDescription  data-aos="fade-up" data-aos-delay="200">
                        Create a new graph by filling out the form below.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2"  data-aos="fade-left" data-aos-delay="100">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" placeholder="Enter graph title" />
                    </div>
                    <div className="space-y-2"  data-aos="fade-left" data-aos-delay="200">
                        <Label htmlFor="description">Description</Label>
                        <Textarea className="min-h-[100px]" id="description" placeholder="Enter graph description" />
                    </div>
                    <div className="flex space-x-4"  data-aos="fade-left" data-aos-delay="300">
                        <Button className="relative overflow-hidden" variant="outline">
                            Upload Papers
                            <input className="absolute inset-0 opacity-0 w-full h-full cursor-pointer" type="file" />
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">Select from Favorites/Collections</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Favorites/Collections</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Select 1</DropdownMenuItem>
                                <DropdownMenuItem>Select 2</DropdownMenuItem>
                                <DropdownMenuItem>Select 3</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <Card className="w-full max-w-lg"  data-aos="fade-left" data-aos-delay="400">
                        <CardHeader>
                            <CardTitle>Graph Settings</CardTitle>
                            <CardDescription>Select layout, colors and other settings.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 space-x-4">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">Select Layout</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>Layout Options</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Layout 1</DropdownMenuItem>
                                    <DropdownMenuItem>Layout 2</DropdownMenuItem>
                                    <DropdownMenuItem>Layout 3</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">Select Color</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>Color Options</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Color 1</DropdownMenuItem>
                                    <DropdownMenuItem>Color 2</DropdownMenuItem>
                                    <DropdownMenuItem>Color 3</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </CardContent>
                    </Card>
                </CardContent>
                <CardFooter>
                    <Button  variant="primary"  data-aos="fade-up" data-aos-delay="100">Create Graph</Button>
                </CardFooter>
            </Card>
            <Card className="mt-8"  data-aos="fade-up" data-aos-delay="300">
                <CardHeader>
                    <CardTitle>Graph Preview:</CardTitle>

                </CardHeader>
                <CardContent className="rounded-lg">
                    <SampleGraph/>
                </CardContent>
            </Card>

        </main>
    </>)
}