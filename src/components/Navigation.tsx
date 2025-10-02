import { NavLink } from "react-router-dom";
import { Home, HelpCircle, CheckCircle, Phone, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Navigation = () => {
  const { t } = useLanguage();
  
  const navItems = [
    {
      to: "/",
      icon: Home,
      label: t.nav.home,
    },
    {
      to: "/complete-guide",
      icon: BookOpen,
      label: t.nav.completeGuide,
    },
    {
      to: "/quiz",
      icon: HelpCircle,
      label: t.nav.quiz,
    },
    {
      to: "/dbt-status",
      icon: CheckCircle,
      label: t.nav.dbtStatus,
    },
    {
      to: "/helpline",
      icon: Phone,
      label: t.nav.helpline,
    },
  ];

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Language Selector and Logo */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A+</span>
              </div>
              <span className="font-bold text-xl text-primary hidden lg:block">{t.nav.appName}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                  )
                }
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "p-2 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-secondary text-muted-foreground"
                  )
                }
              >
                <item.icon className="w-5 h-5" />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;