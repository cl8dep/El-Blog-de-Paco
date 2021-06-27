import React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import MuiLink from "@material-ui/core/Link";
import clsx from "clsx";

interface LinkProps {
  activeClassName?: string;
  as?: string | React.ReactElement;
  className?: string;
  href: string
  onClick?: () => void;
  prefetch?: boolean;
  children?: any;
  [item: string]: any;
}

const NextComposed = React.forwardRef(function NextComposed(
  props: any,
  ref: any
) {
  const { as, href, ...other } = props;

  return (
    <NextLink href={href} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

function Link(props: LinkProps) {
  const {
    href,
    activeClassName = "",
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props;

  const router = useRouter();
  const pathname = href;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  return (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      href={pathname}
      {...other}
    />
  );
}

export default Link;