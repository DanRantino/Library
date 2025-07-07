import { createFileRoute, Outlet } from '@tanstack/react-router';
import NavBar from '~/components/NavBar';

export const Route = createFileRoute('/_pages')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <NavBar />
      <div className="pt-12">
        <Outlet />
      </div>
    </>
  );
}
