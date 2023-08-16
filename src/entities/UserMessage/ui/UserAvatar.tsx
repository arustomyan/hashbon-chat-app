import Avatar from "@shared/ui/Avatar/Avatar";
import userAvatarImg from "@public/images/avatar-user.svg";

const UserAvatar = ({ size }: { size: number }) => (
  // здесь предпологаем что может быть получение ссылки из стора

  <Avatar user size={size} linkAvatar={userAvatarImg} />
);
export default UserAvatar;
