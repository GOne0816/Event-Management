import * as React from "react";
import { Sep } from '../../../components/ui/separator'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CardWithForm() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>
            Signup to Festify if you want to become a member of festify.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">First Name</Label>
                <Input id="name" placeholder="First Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Last Name</Label>
                <Input id="name" placeholder="Last Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="name" placeholder="Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Password" type="Password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button className="w-full">Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
