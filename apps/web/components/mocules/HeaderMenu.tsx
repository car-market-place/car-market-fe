import { Logo } from "../atoms/Logo";
import { TopMenu } from "../atoms/TopMenu";
import { Button } from "../ui";
import { FavoriteBadge } from "./FavouriteBadge";
import { NotificationBadge } from "./NotificationBadge";

export const HeaderMenu = () => {
  return (
    <header className="container mx-auto grid grid-cols-5 items-center">
      <article className="col-span-1">
        <Logo />
      </article>

      <article className="col-span-4 justify-between flex items-center py-2">
        <TopMenu />
        <figure className="flex items-center gap-3">
          <FavoriteBadge count={1} />
          <NotificationBadge count={2} />
          <Button>Đăng tin</Button>
        </figure>
      </article>
    </header>
  );
};
