export const metadata = {
  title: "Admin Panel | Barkat Travel",
  description: "Admin dashboard for managing leads and bookings",
};
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
