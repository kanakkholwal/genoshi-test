import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-6 p-24">
      <Card data-aos="fade-up">

        <CardContent className="pt-5 text-center">
          <h1 className="text-3xl font-semibold">Checkout Profile Pages</h1>
          <Button className="mt-6" variant="outline" asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </CardContent>
      </Card>
      <Card data-aos="fade-up" data-aos-delay="200">

        <CardContent className="pt-5 text-center">
          <h1 className="text-3xl font-semibold">Checkout Pricing Page</h1>
          <Button className="mt-6" variant="outline" asChild>
            <Link href="/pricing">Go to Pricing</Link>
          </Button>
        </CardContent>
      </Card>

    </main>
  )
}
