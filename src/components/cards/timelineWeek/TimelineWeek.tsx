interface TimelineWeekProps {
  type: string;
  time: string;
  to?: string;
}

const TimelineWeek = ({ type, time, to }: TimelineWeekProps) => {
  return (
    <div className="  w-[180px] ">
      <div className="border hover:bg-border transition-colors  rounded w-full h-[100px] flex items-center justify-start flex-col gap-1 pt-3">
        <div>
          <p className="text-sm text-muted-foreground">{type}</p>
        </div>
        <div>
          {' '}
          <p className="font-bold text-base">{time}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground ">{to}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineWeek;
