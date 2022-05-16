import { ComponentType, FC, SVGProps } from 'react';
import { ReactComponent as ArrowLeft } from '../assets/icons/icon-arrow-left.svg';
import { ReactComponent as ArrowRight } from '../assets/icons/icon-arrow-right.svg';
import { ReactComponent as BellOff } from '../assets/icons/icon-bell-off.svg';
import { ReactComponent as Bell } from '../assets/icons/icon-bell.svg';
import { ReactComponent as Bookmark } from '../assets/icons/icon-bookmark.svg';
import { ReactComponent as Calendar } from '../assets/icons/icon-calendar.svg';
import { ReactComponent as ChevronDown } from '../assets/icons/icon-chevron-down.svg';
import { ReactComponent as ChevronLeft } from '../assets/icons/icon-chevron-left.svg';
import { ReactComponent as ChevronRight } from '../assets/icons/icon-chevron-right.svg';
import { ReactComponent as ChevronUp } from '../assets/icons/icon-chevron-up.svg';
import { ReactComponent as Clock } from '../assets/icons/icon-clock.svg';
import { ReactComponent as CreditCard } from '../assets/icons/icon-credit-card.svg';
import { ReactComponent as Download } from '../assets/icons/icon-download.svg';
import { ReactComponent as ExternalLink } from '../assets/icons/icon-external-link.svg';
import { ReactComponent as EyeOff } from '../assets/icons/icon-eye-off.svg';
import { ReactComponent as Eye } from '../assets/icons/icon-eye.svg';
import { ReactComponent as File } from '../assets/icons/icon-file.svg';
import { ReactComponent as Folder } from '../assets/icons/icon-folder.svg';
import { ReactComponent as Heart } from '../assets/icons/icon-heart.svg';
import { ReactComponent as Home } from '../assets/icons/icon-home.svg';
import { ReactComponent as Instagram } from '../assets/icons/icon-instagram.svg';
import { ReactComponent as Link } from '../assets/icons/icon-link.svg';
import { ReactComponent as Mail } from '../assets/icons/icon-mail.svg';
import { ReactComponent as MapPin } from '../assets/icons/icon-map-pin.svg';
import { ReactComponent as Map } from '../assets/icons/icon-map.svg';
import { ReactComponent as Menu } from '../assets/icons/icon-menu.svg';
import { ReactComponent as Minus } from '../assets/icons/icon-minus.svg';
import { ReactComponent as MoreHorizontal } from '../assets/icons/icon-more-horizontal.svg';
import { ReactComponent as MoreVertical } from '../assets/icons/icon-more-vertical.svg';
import { ReactComponent as Phone } from '../assets/icons/icon-phone.svg';
import { ReactComponent as Plus } from '../assets/icons/icon-plus.svg';
import { ReactComponent as RefreshCCW } from '../assets/icons/icon-refresh-ccw.svg';
import { ReactComponent as Search } from '../assets/icons/icon-search.svg';
import { ReactComponent as Send } from '../assets/icons/icon-send.svg';
import { ReactComponent as Settings } from '../assets/icons/icon-settings.svg';
import { ReactComponent as Share } from '../assets/icons/icon-share.svg';
import { ReactComponent as ShoppingCart } from '../assets/icons/icon-shopping-cart.svg';
import { ReactComponent as Star } from '../assets/icons/icon-star.svg';
import { ReactComponent as Tick } from '../assets/icons/icon-tick.svg';
import { ReactComponent as Trash } from '../assets/icons/icon-trash.svg';
import { ReactComponent as Upload } from '../assets/icons/icon-upload.svg';
import { ReactComponent as User } from '../assets/icons/icon-user.svg';
import { ReactComponent as X } from '../assets/icons/icon-x.svg';
import { ReactComponent as Youtube } from '../assets/icons/icon-youtube.svg';

function withStroke<T extends SVGProps<SVGSVGElement>>(
  Icon: ComponentType<T>
): FC<T> {
  return ({ className = '', ...props }) => (
    <Icon className={`stroke-current ${className}`} {...(props as T)} />
  );
}

export const Icon = {
  ArrowLeft: withStroke(ArrowLeft),
  ArrowRight: withStroke(ArrowRight),
  BellOff: withStroke(BellOff),
  Bell: withStroke(Bell),
  Bookmark: withStroke(Bookmark),
  Calendar: withStroke(Calendar),
  ChevronDown: withStroke(ChevronDown),
  ChevronLeft: withStroke(ChevronLeft),
  ChevronRight: withStroke(ChevronRight),
  ChevronUp: withStroke(ChevronUp),
  Clock: withStroke(Clock),
  CreditCard: withStroke(CreditCard),
  Download: withStroke(Download),
  ExternalLink: withStroke(ExternalLink),
  EyeOff: withStroke(EyeOff),
  Eye: withStroke(Eye),
  File: withStroke(File),
  Folder: withStroke(Folder),
  Heart: withStroke(Heart),
  Home: withStroke(Home),
  Instagram: withStroke(Instagram),
  Link: withStroke(Link),
  Mail: withStroke(Mail),
  MapPin: withStroke(MapPin),
  Map: withStroke(Map),
  Menu: withStroke(Menu),
  Minus: withStroke(Minus),
  MoreHorizontal: withStroke(MoreHorizontal),
  MoreVertical: withStroke(MoreVertical),
  Phone: withStroke(Phone),
  Plus: withStroke(Plus),
  RefreshCCW: withStroke(RefreshCCW),
  Search: withStroke(Search),
  Send: withStroke(Send),
  Settings: withStroke(Settings),
  Share: withStroke(Share),
  ShoppingCart: withStroke(ShoppingCart),
  Star: withStroke(Star),
  Tick: withStroke(Tick),
  Trash: withStroke(Trash),
  Upload: withStroke(Upload),
  User: withStroke(User),
  X: withStroke(X),
  Youtube: withStroke(Youtube),
};
