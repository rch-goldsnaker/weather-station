import { JSX, SVGProps } from "react";

export const Sun = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={2}
  className="icon icon-tabler icon-tabler-sun"
  {...props}
>
  <path stroke="none" d="M0 0h24v24H0z" />
  <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7" />
</svg>
)
