import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Pencil, Share, Star, Trash2 } from 'lucide-react';

export default function Page() {

    return (<>
        <main className="my-4">
            <Card  data-aos="fade-up">
                <CardHeader className="flex-row gap-4 flex-wrap justify-between">
                    <div>
                        <CardTitle  data-aos="fade-up" data-aos-delay="100">Graph Page</CardTitle>
                        <p className="text-gray-500 text-xs my-1"  data-aos="fade-left" data-aos-delay="150">Created by: <span className="text-gray-700">John Doe </span>
                            on <span className="text-gray-700">2021-01-01</span>
                        </p>
                        <CardDescription  data-aos="fade-left" data-aos-delay="200">
                            Beautifully designed graphs and charts using React and ApexCharts.
                        </CardDescription>
                    </div>
                    <div className="flex gap-2 items-center justify-end">
                        <Button variant="outline" className="text-gray-500 hover:text-gray-700" data-aos="fade-left" data-aos-delay="0">
                            <Star size={16} />
                        </Button>
                        <Button variant="outline" className="text-gray-500 hover:text-gray-700" data-aos="fade-left" data-aos-delay="100">
                            <Share size={16} />
                        </Button>
                        <Button variant="outline" className="border-red-500 text-red-500 bg-white hover:bg-red-50"  data-aos="fade-left" data-aos-delay="200">
                            <Trash2 size={16} />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Button  data-aos="fade-right">View Graph</Button>
                    <div className="max-w-2xl mt-10">
                        <h2 className="text-2xl font-bold text-gray-900"  data-aos="fade-right" data-aos-delay="100">Associated Papers</h2>
                        <ul className="mt-4 space-y-4">
                            <li  data-aos="fade-up" data-aos-delay="100">
                                <Card>
                                    <CardContent className="p-4">
                                        <h3 className="text-lg font-medium text-gray-900">Paper Title</h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Other relevant information about the paper.
                                        </p>
                                    </CardContent>
                                    <CardFooter className=" gap-4">
                                        <Button
                                            className="border-gray-300 text-gray-700 bg-white hover:bg-gray-50 "
                                            variant="outline"
                                            size="sm"
                                        >
                                            <Pencil size={16} />

                                        </Button>
                                        <Button
                                            className="border-gray-300 text-gray-700 bg-white hover:bg-gray-50 "
                                            variant="outline"
                                            size="sm"

                                        >
                                            <Share size={16} />
                                        </Button>
                                        <Button
                                            className="border-red-500 text-red-500 bg-white hover:bg-red-50 "
                                            variant="outline"
                                            size="sm"

                                        >
                                            <Trash2 size={16} />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </li>
                            <li  data-aos="fade-up" data-aos-delay="200">
                                <Card>
                                    <CardContent className="p-4">
                                        <h3 className="text-lg font-medium text-gray-900">Another Paper Title</h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Other relevant information about the paper.
                                        </p>
                                    </CardContent>
                                    <CardFooter className=" gap-4">
                                        <Button
                                            className="border-gray-300 text-gray-700 bg-white hover:bg-gray-50 "
                                            variant="outline"
                                            size="sm"
                                        >
                                            <Pencil size={16} />

                                        </Button>
                                        <Button
                                            className="border-gray-300 text-gray-700 bg-white hover:bg-gray-50 "
                                            variant="outline"
                                            size="sm"

                                        >
                                            <Share size={16} />
                                        </Button>
                                        <Button
                                            className="border-red-500 text-red-500 bg-white hover:bg-red-50 "
                                            variant="outline"
                                            size="sm"

                                        >
                                            <Trash2 size={16} />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </li>
                        </ul>

                    </div>
                </CardContent>
            </Card>


        </main>
    </>)
}