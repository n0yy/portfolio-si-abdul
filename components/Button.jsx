import Link from "next/link";

function ButtonPrimary({ href, name }) {
  return (
    <Link href={href}>
      <a className="px-7 py-2 bg-primary shadow-xl hover:bg-white hover:border hover:border-primary/25 font-inter uppercase text-white text-xs font-semibold hover:text-primary">
        {name}
      </a>
    </Link>
  );
}

export { ButtonPrimary };
