export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-sm mx-auto p-6">
        <div className="h-8 bg-border rounded-lg w-3/4 mx-auto"></div>
        <div className="space-y-3">
          <div className="h-4 bg-border rounded w-full"></div>
          <div className="h-4 bg-border rounded w-5/6"></div>
          <div className="h-4 bg-border rounded w-4/6"></div>
        </div>
        <div className="h-12 bg-border rounded-lg w-full"></div>
      </div>
    </div>
  );
}
