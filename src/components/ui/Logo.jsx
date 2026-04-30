

const Logo = ({ className = "flex items-center gap-2", iconClassName = "w-8 h-8", textClassName = "text-xl font-bold tracking-tighter" }) => {
  return (
    <div className={className}>
      <div className={`${iconClassName} flex items-center justify-center rounded-lg`}>
        <img src="/ecosystem/risemanger.png" alt="" />
      </div>
      <span className={`${textClassName} text-slate-900 dark:text-white`}>
        Rise<span className="text-primary">Manager</span>
      </span>
    </div>
  );
};

export default Logo;
