import {
  Activity,
  AlertTriangle,
  LayoutDashboard,
  ReceiptText,
  Table2,
  Users,
  WalletCards
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
  { id: 'tables', label: 'Tables', icon: Table2 },
  { id: 'players', label: 'Players', icon: Users },
  { id: 'chips', label: 'Chip Requests', icon: WalletCards },
  { id: 'history', label: 'Hand History', icon: ReceiptText },
  { id: 'security', label: 'Monitoring', icon: AlertTriangle },
  { id: 'stats', label: 'Stats', icon: Activity }
];

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(25,10,14,0.92),rgba(9,4,7,0.96))] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
      <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
        <div className="club-label text-[#d6b078]">Host Console</div>
        <h2 className="mt-2 text-xl font-semibold text-[#fff4e7]">Admin Suite</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Manage', 'Approve', 'Review', 'Track'].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/18 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-[#eadcc9]/72"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <nav className="mt-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onTabChange(item.id)}
            className={`flex w-full items-center gap-3 rounded-[18px] px-3.5 py-2.5 text-left transition ${
              activeTab === item.id
                ? 'border border-[#d3aa6d]/18 bg-[#d3aa6d]/12 text-[#fff1de]'
                : 'border border-transparent bg-white/[0.03] text-[#eadcc9]/64 hover:border-white/10 hover:bg-white/[0.06] hover:text-[#fff1de]'
            }`}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-black/18">
              <item.icon className="h-3.5 w-3.5" />
            </div>
            <span className="text-[0.82rem] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
