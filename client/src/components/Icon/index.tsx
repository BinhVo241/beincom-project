"use client";

import Image, { ImageProps } from "next/image";
import logo_google from "@/assets/icons/logo_google.svg";
import logo_fb from "@/assets/icons/logo_fb.svg";
import login_check_icon from "@/assets/icons/login_check_icon.svg";
import home_icon from "@/assets/icons/home_icon.svg";
import communities_icon from "@/assets/icons/communities_icon.svg";
import marketplace_icon from "@/assets/icons/marketplace_icon.svg";
import logo_beincomm_icon_only from "@/assets/images/logo_beincomm_icon_only.webp";
import logo_beincomm_text_only from "@/assets/images/logo_beincomm_text_only.webp";
import search_icon from "@/assets/icons/search_icon.svg";
import bell_icon from "@/assets/icons/bell_icon.svg";
import bic_chat_logo from "@/assets/icons/bic_chat_logo.svg";
import wallet from "@/assets/icons/wallet.svg";
import add_icon from "@/assets/icons/add_icon.svg";
import create_post_icon from "@/assets/icons/create_post_icon.svg";
import filter_icon from "@/assets/icons/filter_icon.svg";
import check_icon from "@/assets/icons/check_icon.svg";
import dot from "@/assets/icons/dot.svg";
import three_dot from "@/assets/icons/three_dot.svg";
import like from "@/assets/images/like.gif";
import appreciate from "@/assets/images/appreciate.gif";
import care from "@/assets/images/care.gif";
import crying from "@/assets/images/crying.gif";
import laugh from "@/assets/images/laugh.gif";
import on_fire from "@/assets/images/on_fire.gif";
import love from "@/assets/images/love.gif";
import like_noanimate from "@/assets/images/like_noanimate.png";
import love_noanimate from "@/assets/images/love_noanimatepng.png";
import comment_icon from "@/assets/icons/comment_icon.svg";
import interested from "@/assets/icons/interested.svg";
import donate_icon from "@/assets/icons/donate_icon.svg";
import like_false from "@/assets/icons/like_false.svg";

const icons = {
  logo_google,
  logo_fb,
  login_check_icon,
  logo_beincomm_icon_only,
  logo_beincomm_text_only,
  home_icon,
  communities_icon,
  marketplace_icon,
  search_icon,
  bell_icon,
  bic_chat_logo,
  wallet,
  add_icon,
  create_post_icon,
  filter_icon,
  check_icon,
  dot,
  three_dot,
  like,
  appreciate,
  care,
  crying,
  laugh,
  on_fire,
  love,
  like_noanimate,
  love_noanimate,
  comment_icon,
  interested,
  donate_icon,
  like_false,
};

export type IIconName = keyof typeof icons;

export interface IIconProps extends Partial<ImageProps> {
  name: IIconName;
  alt?: string;
}

const Icon: React.FC<IIconProps> = ({ name, alt = "", ...props }) => {
  const SVG: any = icons[name] as React.FC;
  return <Image src={SVG as any} alt={alt} {...props} />;
};

export default Icon;
