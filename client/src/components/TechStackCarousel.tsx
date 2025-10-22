import { 
  SiPython, 
  SiC, 
  SiCplusplus, 
  SiGnubash, 
  SiLinux, 
  SiKalilinux, 
  SiGithub,
  SiJupyter
} from "react-icons/si";
import { Shield, Terminal, Network, Lock, Search, FileSearch, Database, Cpu, Code } from "lucide-react";

const techItems = [
  { name: "Python", Icon: SiPython },
  { name: "C", Icon: SiC },
  { name: "C++", Icon: SiCplusplus },
  { name: "Bash", Icon: SiGnubash },
  { name: "Nmap", Icon: Network },
  { name: "Burp Suite", Icon: Shield },
  { name: "Metasploit", Icon: Terminal },
  { name: "Nessus", Icon: Search },
  { name: "Hydra", Icon: Lock },
  { name: "Wireshark", Icon: Network },
  { name: "KAPE", Icon: FileSearch },
  { name: "Autopsy", Icon: Database },
  { name: "Volatility", Icon: Cpu },
  { name: "Kali Linux", Icon: SiKalilinux },
  { name: "Linux", Icon: SiLinux },
  { name: "Git/GitHub", Icon: SiGithub },
  { name: "VS Code", Icon: Code },
  { name: "Jupyter", Icon: SiJupyter },
];

export default function TechStackCarousel() {
  const duplicatedItems = [...techItems, ...techItems];

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full overflow-hidden py-4 bg-gradient-to-b from-transparent via-background/90 to-background pointer-events-none">
      <div className="flex flex-col gap-3">
        <div className="flex animate-scroll">
          {duplicatedItems.map((item, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center gap-2 px-3 py-1.5 mx-1 bg-card/40 border border-card-border/50 rounded-md backdrop-blur-sm whitespace-nowrap min-w-fit"
            >
              <item.Icon className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-foreground">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="flex animate-scroll-reverse">
          {duplicatedItems.map((item, index) => (
            <div
              key={`row2-${index}`}
              className="flex items-center gap-2 px-3 py-1.5 mx-1 bg-card/40 border border-card-border/50 rounded-md backdrop-blur-sm whitespace-nowrap min-w-fit"
            >
              <item.Icon className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-foreground">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
