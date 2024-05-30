declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_GOOGLE_CLIENT_ID: string; // this is the line you want
    readonly NODE_ENV: "development" | "production";
    readonly BACKEND_URL: string;
    readonly NEXT_PUBLIC_BACKEND_URL: string;
    readonly GROQ_API_KEY: string;
  }
}
