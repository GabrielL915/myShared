import { Button } from "../ui/button";

export function TopNav() {
  return (
    <nav className="text-x1 flex w-full items-center justify-between border-b p-4 font-semibold">
      <div>TSheets</div>
      <div>
        <Button> Sign In</Button>
      </div>
    </nav>
  );
}
