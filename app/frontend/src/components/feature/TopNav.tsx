import { Button } from "../ui/button";

export function TopNav() {
  return (
    <nav className="text-x1 flex w-full items-center justify-between border-b border-gray-700 p-4 font-semibold">
      <div className="text-white">TSheets</div>
      <div>
        <Button>Sign In</Button>
      </div>
    </nav>
  );
}
