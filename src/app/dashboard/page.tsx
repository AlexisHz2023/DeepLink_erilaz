import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div >
      <div className="flex gap-5 items-center justify-center mt-5">
        <h1>DashboardPage</h1>
      </div>
      <div className="flex gap-2 items-center justify-center mt-5">
        <h3>Bienvenido</h3>
        <UserButton />
      </div>
    </div>
  );
};

export default DashboardPage;
