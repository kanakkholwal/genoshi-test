import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";


export function UserProfile(){
    return (  <Card  data-aos="fade-up">
        <CardHeader>
          <CardTitle>User Profile Details</CardTitle>
          <CardDescription>Your personal information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                alt="Avatar"
                className="rounded-full border"
                height="64"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <div>
                <h2 className="font-semibold text-lg">Name</h2>
                <p className="text-gray-500">name@example.com</p>
                <p>Bio goes here...</p>
              </div>
            </div>
            <Button>Edit Profile</Button>
          </div>
        </CardContent>
      </Card>)
}