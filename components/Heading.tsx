type Props = {
  title: string;
};

const Heading = ({ title }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <div className="py-6 px-3 bg-primary w-fit rounded-md" />
      <h3 className="text-primary font-bold text-xl">{title}</h3>
    </div>
  );
};

export default Heading;
