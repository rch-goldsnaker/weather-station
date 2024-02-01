import { JSX, SVGProps } from "react";

export const Gauge = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icon-tabler-gauge"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M13.41 10.59 16 8M7 12a5 5 0 0 1 5-5" />
  </svg>
)
