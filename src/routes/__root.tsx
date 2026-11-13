import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">გვერდი ვერ მოიძებნა</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          მისამართი არ არსებობს ან გადატანილია.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            მთავარ გვერდზე
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          გვერდის ჩატვირთვა ვერ მოხერხდა
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          მცირე შეცდომა - სცადე თავიდან ან დაბრუნდი მთავარ გვერდზე.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            სცადე ხელახლა
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            მთავარი
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ნანა ლობჯანიძე | PMP® პროექტების მართვის კონსულტანტი" },
      { name: "description", content: "PMP® სერტიფიცირებული პროექტების მართვის კონსულტანტი, ტრენერი და მენტორი. პროექტების მართვა, გუნდის განვითარება, Agile, Waterfall, Hybrid, გრანტების მართვა და პროფესიული ტრენინგები." },
      { name: "author", content: "ნანა ლობჯანიძე" },
      { name: "theme-color", content: "#17E3B2" },
      { property: "og:title", content: "ნანა ლობჯანიძე | PMP® პროექტების მართვის კონსულტანტი" },
      { property: "og:description", content: "PMP® სერტიფიცირებული პროექტების მართვის კონსულტანტი, ტრენერი და მენტორი. პროექტების მართვა, Agile/Waterfall/Hybrid, გრანტების მართვა და პროფესიული ტრენინგები." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ნანა ლობჯანიძე | PMP® პროექტების მართვის კონსულტანტი" },
      { name: "twitter:description", content: "PMP® სერტიფიცირებული პროექტების მართვის კონსულტანტი, ტრენერი და მენტორი." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/kKCpSX41qLPhV9OsfzlRRKUxvmv1/social-images/social-1780747023014-Blue_Professional_Business_Project_Presentation_.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/kKCpSX41qLPhV9OsfzlRRKUxvmv1/social-images/social-1780747023014-Blue_Professional_Business_Project_Presentation_.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@400;500;600;700;800;900&family=Noto+Serif+Georgian:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ka">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
