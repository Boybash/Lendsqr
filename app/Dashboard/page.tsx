import Sidebar from "@/Component/Sidebar";
import InfoCard from "@/Component/InfoCard";
import Users from "@/Component/users/page";

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <InfoCard />
      <Users />
    </div>
  );
}
