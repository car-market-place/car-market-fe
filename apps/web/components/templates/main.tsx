import { ReactNode } from "react";

type Props = {
  header: ReactNode;
  sidebar: ReactNode;
  main: ReactNode;
};

const MainTemplate = ({ header, sidebar, main }: Props) => {
  return (
    <main>
      <header>{header}</header>
      <section className="grid grid-cols-5">
        <aside className="col-span-1">{sidebar}</aside>
        <main className="col-span-4">{main}</main>
      </section>
    </main>
  );
};

export default MainTemplate;
