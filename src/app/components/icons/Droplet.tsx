import { JSX, SVGProps } from "react";

export const Droplet = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icon-tabler-droplet"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0 2.602-2.105 3.262-5.708 1.566-8.546l-4.89-7.26c-.42-.625-1.287-.803-1.936-.397a1.376 1.376 0 0 0-.41.397l-4.893 7.26C4.24 13.715 4.9 17.318 7.502 19.423z" />
  </svg>
)
