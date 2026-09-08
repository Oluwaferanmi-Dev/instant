import { useState } from "react";
import { Search, UserCheck, UserX, X, Eye } from "lucide-react";

const initialUsers = [
  { id: "u1", name: "Jane Doe", email: "jane@email.com", role: "Customer", status: "Active", joined: "Mar 12, 2026", bookings: 8 },
  { id: "u2", name: "Mike Johnson", email: "mike@mikesplumbing.com", role: "Provider", status: "Active", joined: "Jan 5, 2026", bookings: 214 },
  { id: "u3", name: "Robert H.", email: "robert@email.com", role: "Customer", status: "Active", joined: "May 20, 2026", bookings: 3 },
  { id: "u4", name: "Carlos R.", email: "carlos@proservices.com", role: "Provider", status: "Pending", joined: "Sep 1, 2026", bookings: 0 },
  { id: "u5", name: "Amanda P.", email: "amanda@email.com", role: "Customer", status: "Active", joined: "Feb 14, 2026", bookings: 12 },
  { id: "u6", name: "Diane W.", email: "diane@clearflow.com", role: "Provider", status: "Pending", joined: "Sep 6, 2026", bookings: 0 },
  { id: "u7", name: "James B.", email: "james@email.com", role: "Customer", status: "Suspended", joined: "Apr 2, 2026", bookings: 2 },
];

type User = typeof initialUsers[0];

export default function AdminUsersPage() {
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [users, setUsers] = useState(initialUsers);
  const [viewUser, setViewUser] = useState<User | null>(null);
  const [suspendId, setSuspendId] = useState<string | null>(null);

  const filtered = users.filter((u) => {
    const matchQ = !query || u.name.toLowerCase().includes(query.toLowerCase()) || u.email.toLowerCase().includes(query.toLowerCase());
    const matchRole = roleFilter === "All" || u.role === roleFilter;
    return matchQ && matchRole;
  });

  const activateUser = (id: string) =>
    setUsers((prev) => prev.map((u) => u.id === id ? { ...u, status: "Active" } : u));

  const suspendUser = (id: string) => {
    setUsers((prev) => prev.map((u) => u.id === id ? { ...u, status: "Suspended" } : u));
    setSuspendId(null);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* User detail modal */}
      {viewUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-[20px] p-6 max-w-sm w-full shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-[#0D1B3E]">User details</h2>
              <button onClick={() => setViewUser(null)}><X size={20} className="text-[#9EA6BE]" /></button>
            </div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#002B95] to-[#3B5FD4] flex items-center justify-center text-white font-bold">
                {viewUser.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-bold text-[#0D1B3E]">{viewUser.name}</p>
                <p className="text-sm text-[#565E74]">{viewUser.email}</p>
              </div>
            </div>
            <div className="space-y-3 mb-5">
              {[
                { label: "Role", val: viewUser.role },
                { label: "Status", val: viewUser.status },
                { label: "Joined", val: viewUser.joined },
                { label: "Bookings", val: String(viewUser.bookings) },
              ].map(({ label, val }) => (
                <div key={label} className="flex justify-between text-sm">
                  <span className="text-[#565E74]">{label}</span>
                  <span className="font-semibold text-[#0D1B3E]">{val}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setViewUser(null)} className="flex-1 border border-[#E2E6F0] rounded-[10px] py-2.5 text-sm font-semibold text-[#565E74] hover:bg-[#F8F9FC]">
                Close
              </button>
              {viewUser.status === "Suspended" ? (
                <button
                  onClick={() => { activateUser(viewUser.id); setViewUser(null); }}
                  className="flex-1 bg-[#004117] text-white rounded-[10px] py-2.5 text-sm font-bold hover:bg-[#002B10] transition-colors"
                >
                  Activate
                </button>
              ) : (
                <button
                  onClick={() => { setSuspendId(viewUser.id); setViewUser(null); }}
                  className="flex-1 bg-[#DC2626] text-white rounded-[10px] py-2.5 text-sm font-bold hover:bg-red-700 transition-colors"
                >
                  Suspend
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Suspend confirm */}
      {suspendId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-[20px] p-6 max-w-sm w-full shadow-2xl">
            <h3 className="font-bold text-[#0D1B3E] mb-2">Suspend this user?</h3>
            <p className="text-sm text-[#565E74] mb-5">The user won't be able to access their account until reactivated.</p>
            <div className="flex gap-3">
              <button onClick={() => setSuspendId(null)} className="flex-1 border border-[#E2E6F0] rounded-[10px] py-2.5 text-sm font-semibold text-[#565E74] hover:bg-[#F8F9FC]">
                Cancel
              </button>
              <button onClick={() => suspendUser(suspendId)} className="flex-1 bg-[#DC2626] text-white rounded-[10px] py-2.5 text-sm font-bold hover:bg-red-700 transition-colors">
                Yes, suspend
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-extrabold text-[#0D1B3E]">User Management</h1>
        <span className="text-sm text-[#565E74]">{users.length} total users</span>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-5 flex-wrap">
        <div className="flex items-center gap-2 bg-white border border-[#E2E6F0] rounded-[10px] px-3 py-2 flex-1 min-w-[200px]">
          <Search size={15} className="text-[#9EA6BE]" />
          <input
            type="text"
            placeholder="Search users…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-sm outline-none text-[#0D1B3E] placeholder-[#9EA6BE]"
          />
        </div>
        {["All", "Customer", "Provider"].map((r) => (
          <button
            key={r}
            onClick={() => setRoleFilter(r)}
            className={`px-4 py-2 rounded-[10px] text-sm font-semibold transition-colors ${
              roleFilter === r ? "bg-[#0D1B3E] text-white" : "bg-white border border-[#E2E6F0] text-[#565E74] hover:bg-[#F8F9FC]"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-[16px] border border-[#E2E6F0] shadow-sm overflow-hidden">
        <div className="hidden sm:grid grid-cols-12 gap-4 px-5 py-3 bg-[#F8F9FC] border-b border-[#E2E6F0] text-xs font-bold text-[#9EA6BE] uppercase tracking-widest">
          <div className="col-span-3">Name</div>
          <div className="col-span-3">Email</div>
          <div className="col-span-2">Role</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-1">Bookings</div>
          <div className="col-span-1">Actions</div>
        </div>
        {filtered.map((u) => (
          <div key={u.id} className="px-5 py-4 border-b border-[#F8F9FC] last:border-0 hover:bg-[#F8F9FC] transition-colors">
            <div className="sm:grid sm:grid-cols-12 sm:gap-4 sm:items-center flex flex-col gap-2">
              <div className="sm:col-span-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#002B95] to-[#3B5FD4] flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {u.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-[#0D1B3E] text-sm">{u.name}</p>
                  <p className="text-xs text-[#9EA6BE]">Joined {u.joined}</p>
                </div>
              </div>
              <p className="sm:col-span-3 text-sm text-[#565E74] truncate">{u.email}</p>
              <div className="sm:col-span-2">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  u.role === "Provider" ? "bg-[#ECFDF5] text-[#004117]" : "bg-[#EEF2FF] text-[#002B95]"
                }`}>
                  {u.role}
                </span>
              </div>
              <div className="sm:col-span-2">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  u.status === "Active" ? "bg-green-50 text-green-700" :
                  u.status === "Pending" ? "bg-amber-50 text-amber-700" :
                  "bg-red-50 text-red-700"
                }`}>
                  {u.status}
                </span>
              </div>
              <p className="sm:col-span-1 text-sm font-semibold text-[#0D1B3E]">{u.bookings}</p>
              <div className="sm:col-span-1 flex items-center gap-1">
                <button
                  onClick={() => setViewUser(u)}
                  className="p-1.5 rounded-[6px] text-[#565E74] hover:bg-[#EEF2FF] hover:text-[#002B95] transition-colors"
                  title="View details"
                >
                  <Eye size={14} />
                </button>
                {u.status === "Suspended" ? (
                  <button
                    onClick={() => activateUser(u.id)}
                    className="p-1.5 rounded-[6px] text-[#565E74] hover:bg-[#ECFDF5] hover:text-[#004117] transition-colors"
                    title="Activate"
                  >
                    <UserCheck size={14} />
                  </button>
                ) : (
                  <button
                    onClick={() => setSuspendId(u.id)}
                    className="p-1.5 rounded-[6px] text-[#565E74] hover:bg-red-50 hover:text-[#DC2626] transition-colors"
                    title="Suspend"
                  >
                    <UserX size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
