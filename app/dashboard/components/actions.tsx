
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function Actions() {

    return ( <Card   data-aos="fade-up" data-aos-delay="500">
        <CardHeader>
            <CardTitle>
                Actions &amp; Links
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col gap-4">
                <Button variant="outline">Share graphs</Button>
                <Button variant="outline">Upload papers</Button>
                <Button>Create a new graph</Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-5">
                <Link className="text-gray-500 hover:text-gray-900" href="#">
                    Go to Favorites
                </Link>
                <Link className="text-gray-500 hover:text-gray-900" href="#">
                    Go to Collections
                </Link>
            </div>
        </CardContent>
    </Card>)

}