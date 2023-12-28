import { LucideProps, MessageSquare, User } from "lucide-react";

export const Icons = {
  user: User,

  logo: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 200 200">
      <path
        d="M150 15c-77.43 0-140 62.57-140 140 0 16.78 4.18 32.84 12.27 47.34l42.35 56.78c4.31 5.77 4.86 12.85 2.58 19.52-2.28 6.67-6.96 12.05-14.04 15.18-7.08 3.13-14.58 3.13-21.66 0l-42.35-56.78c-1.95-4.98-2.96-10.33-1.85-16.1 0-77.43-62.57-140-140-140z"
        fill="url(#gradient)"
        stroke="#4fa8d6"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#e2f2fd" />
          <stop offset="1" stop-color="#a9d0ea" />
        </linearGradient>
      </defs>
    </svg>
  ),

  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
  commentReply: MessageSquare,
};
