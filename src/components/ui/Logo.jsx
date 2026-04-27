import React from 'react';
import { Shield } from 'lucide-react';

const Logo = ({ className = "flex items-center gap-2", iconClassName = "w-8 h-8", textClassName = "text-xl font-bold tracking-tighter" }) => {
  return (
    <div className={className}>
      <div className={`${iconClassName} bg-primary flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]`}>
        <Shield className="text-white w-2/3 h-2/3" />
      </div>
      <span className={`${textClassName} text-slate-900 dark:text-white`}>
        RISE<span className="text-primary">EMPIRE</span>
      </span>
    </div>
  );
};

export default Logo;
