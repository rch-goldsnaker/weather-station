import { JSX, SVGProps } from "react";

export const Menu = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={2}
  className="icon icon-tabler icon-tabler-menu-2"
  {...props}
>
  <path stroke="none" d="M0 0h24v24H0z" />
  <path d="M4 6h16M4 12h16M4 18h16" />
</svg>
)
