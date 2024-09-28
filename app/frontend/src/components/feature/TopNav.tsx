import { Button } from "../ui/button";
import { User } from "lucide-react";

interface TopNavProps {
  isLoggedIn: boolean;
  onSignIn: () => void;
}

export function TopNav({ isLoggedIn, onSignIn }: TopNavProps) {
  return (
    <nav className="text-x1 flex w-full items-center justify-between border-b border-gray-700 p-4 font-semibold">
      <div className="text-white">TSheets</div>
      <div>
        {isLoggedIn ? (
          <User className="w-6 h-6 text-white" />
        ) : (
          <Button onClick={onSignIn}>Sign In</Button>
        )}
      </div>
    </nav>
  );
}