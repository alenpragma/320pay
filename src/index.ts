import { MenuInterface } from "./types/menuType";

import home from "./assets/icon/navIcon/home.svg";
import homeHover from "./assets/icon/navIcon/home-hover.svg";
import lighting from "./assets/icon/navIcon/lighting.svg";
import lightingHover from "./assets/icon/navIcon/lightin-hover.svg";
import wallet from "./assets/icon/navIcon/wallet.svg";
import walletHover from "./assets/icon/navIcon/wallet-hover.svg";
import filelock from "./assets/icon/navIcon/file-lock.svg";
import filelockHover from "./assets/icon/navIcon/file-lock-hover.svg";

import layers from "./assets/icon/navIcon/layers.svg";
import layerHover from "./assets/icon/navIcon/layers-hover.svg";
import clock from "./assets/icon/navIcon/clock.svg";
import clockHover from "./assets/icon/navIcon/clock-hover.svg";
import server from "./assets/icon/navIcon/server.svg";
import serverHover from "./assets/icon/navIcon/server-hover.svg";
import gift from "./assets/icon/navIcon/gift.svg";
import giftHover from "./assets/icon/navIcon/gift-hover.svg";
import smile from "./assets/icon/navIcon/smiley.svg";
import smileHover from "./assets/icon/navIcon/smiley-hover.svg";

import file from "./assets/icon/dashboard/file.svg";
import profile from "./assets/icon/dashboard/profile.svg";
import dWallet from "./assets/icon/dashboard/wallet.svg";
import { CadeInterface, CadeInterface2 } from "./types/dashboardType";

import trophy from "./assets/icon/dashboard/trophy.svg";
import shield from "./assets/icon/dashboard/shield-quartered.svg";
import laptopMobile from "./assets/icon/dashboard/laptop-mobile.svg";
import ticket from "./assets/icon/dashboard/ticket.svg";

export const mainNavItem: MenuInterface[] = [
  {
    pathname: "/",
    item: "Dashboard",
    icon1: home,
    icon2: homeHover,
  },
  {
    pathname: "/start-here",
    item: "Start Here",
    icon1: lighting,
    icon2: lightingHover,
  },
  {
    pathname: "/deposit",
    item: "Deposit",
    icon1: wallet,
    icon2: walletHover,
  },
  {
    pathname: "/licenses",
    item: "Licenses",
    icon1: filelock,
    icon2: filelockHover,
  },
];
export const subNavItem: MenuInterface[] = [
  {
    pathname: "/orders",
    item: "Orders",
    icon1: layers,
    icon2: layerHover,
  },
  {
    pathname: "/diposit-log",
    item: "Diposit Log",
    icon1: clock,
    icon2: clockHover,
  },
  {
    pathname: "/manage-server",
    item: "Manage Server",
    icon1: server,
    icon2: serverHover,
  },
  {
    pathname: "/referral",
    item: "Referral",
    icon1: gift,
    icon2: giftHover,
  },
  {
    pathname: "/raise-ticket",
    item: "Raise Ticket",
    icon1: smile,
    icon2: smileHover,
  },
];
export const dashboardCard: CadeInterface[] = [
  {
    img: profile,
    title: "Your Client Id",
    secretCode: "asjJKLASJ84W5",
  },
  {
    img: dWallet,
    title: "Your Balance",
    secretCode: "5000",
  },
  {
    img: file,
    title: "Active Licenses",
    secretCode: "12/24",
  },
];

export const dashboardCard2: CadeInterface2[] = [
  {
    img: trophy,
    title: "Orders",
    number: "96",
  },
  {
    img: shield,
    title: "Servers",
    number: "96",
  },
  {
    img: laptopMobile,
    title: "Your Logins",
    number: "96",
  },
  {
    img: ticket,
    title: "Tickets",
    number: "96",
  },
];

type TTable = { table: boolean };
export const tableData: TTable[] = [
  { table: true },
  { table: true },
  { table: true },
  { table: true },
  { table: true },
  { table: true },
  { table: true },
  { table: true },
  { table: true },
];
export const images = { home, homeHover, profile, trophy };
