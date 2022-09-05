export type Props = {
  id: string;
  title: string;
};

const IndexTitle = ({ title, id }: Props) => {
  return (
    <div id={id} className="m-10 text-center w-50 text-3xl">
      <h1 className="border-b-4 py-2 w-10/12 inline-block">{title}</h1>
    </div>
  );
};

export default IndexTitle;
