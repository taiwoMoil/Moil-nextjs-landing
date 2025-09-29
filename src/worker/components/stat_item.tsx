interface StatItemProps {
  className?: string;
  icon?: React.ReactNode;
  header?: string | number;
  text: string;
}

const StatItem = ({
  className = '',
  icon,
  header,
  text,
}: StatItemProps) => {
  return (
    <div className="px-5 h-[180px] stat-item sm:h-[200px] lg:h-[231.19px] bg-white justify-center flex items-center rounded-lg relative stat_item_shadow">
      <div className="h-max max-w-[150px] flex flex-col gap-y-2 items-center">
        {(icon || header) && (
          <div className={className}>{icon || header}</div>
        )}
        <p className="opacity-70 text-center text-neutral-500 text-xs font-normal leading-[14.40px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default StatItem;