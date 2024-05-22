import {
	BsInfoCircle,
	BsTrash,
	BsUpload,
	BsX,
  BsExclamation,
  BsList,
  BsPerson,
  BsFacebook,
  BsYoutube,
  BsTwitter,
  BsLinkedin,
  BsChevronDown,
  BsArrowLeft,
  BsTelephone ,
  BsEnvelope,
  BsInstagram
} from "react-icons/bs";

export const Icon = {
	info: BsInfoCircle,
	upload: BsUpload,
	trash: BsTrash,
	X: BsX,
  exclamation: BsExclamation,
  menu:BsList ,
  person:BsPerson,
  facebook:BsFacebook,
  youtube: BsYoutube,
  twitter: BsTwitter,
  linkedin:BsLinkedin,
  chevron:BsChevronDown,
  arrowleft:BsArrowLeft,
telephone :BsTelephone ,
  envelope:BsEnvelope,
  instagram:BsInstagram
};
export type IconName = keyof typeof Icon;
