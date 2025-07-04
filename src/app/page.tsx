import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Shadcn/ui Registry
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Custom component registry server for Shadcn/ui CLI
        </p>

        <div className="mb-8 rounded-lg border bg-card p-6 text-left">
          <h2 className="mb-3 text-xl font-semibold">Button Component Demo</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Demonstrating the button component with various variants and sizes
          </p>

          <div className="space-y-4">
            {/* Variants */}
            <div>
              <h3 className="mb-2 font-medium">Variants</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="mb-2 font-medium">Sizes</h3>
              <div className="flex flex-wrap items-center gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">🚀</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 text-left">
          <h2 className="mb-3 text-xl font-semibold">Registry Information</h2>
          <p className="text-sm text-muted-foreground">
            This server provides custom components for the Shadcn/ui CLI. You
            can add components using:{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-xs">
              npx shadcn@latest add button
            </code>
          </p>
        </div>
      </div>
    </main>
  );
}
