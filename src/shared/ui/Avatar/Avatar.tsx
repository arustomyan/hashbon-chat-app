import { FC } from "react";
import avatarBotImg from "@public/images/avatar-bot.svg";
import style from "./Avatar.module.scss";

interface AvatarProps {
  user: boolean;
  size: number;
  linkAvatar?: string;
}

const Avatar: FC<AvatarProps> = ({ user, linkAvatar, size }) => (
  <div className={style.avatar} style={{ width: `${size}px`, height: `${size}px` }}>
    <img src={!user ? avatarBotImg : linkAvatar} alt="user avatar" className={style.img} />
  </div>
);

Avatar.defaultProps = {
  linkAvatar: "",
};

export default Avatar;
