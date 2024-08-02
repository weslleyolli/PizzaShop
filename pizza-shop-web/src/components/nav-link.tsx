import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinProps = LinkProps

export function NavLink(props: NavLinProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  )
}
