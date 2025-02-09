import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-12 px-4">
      <Card className="max-w-md mx-auto bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-2xl text-zinc-100">Welcome back</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-zinc-100">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-zinc-800 border-zinc-700 text-zinc-100"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-zinc-100">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="bg-zinc-800 border-zinc-700 text-zinc-100"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-red-800 hover:bg-red-700 text-white">
            Sign In
          </Button>
          <p className="text-sm text-zinc-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-red-500 hover:text-red-400">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
