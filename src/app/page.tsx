import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <h1 className="text-4xl font-bold text-center">
        🎉 Experience Shadcn/ui Components!
      </h1>

      <div className="grid grid-cols-2 gap-4 max-w-md">
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      <div className="flex flex-col gap-2">
        <Button size="sm">Small Button</Button>
        <Button size="default">Default Button</Button>
        <Button size="lg">Large Button</Button>
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p>Click the buttons above to see the styling in action!</p>
        <p className="text-sm mt-2">
          These are all Shadcn/ui Button components
        </p>
      </div>
    </main>
  );
}
