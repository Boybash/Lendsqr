import Sidebar from "@/Component/Sidebar";
import InfoCard from "@/Component/InfoCard";
import Users from "@/Component/Users";

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <InfoCard />
      <Users />
    </div>
  );
}
