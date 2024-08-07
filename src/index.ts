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
import domain from "./assets/icon/navIcon/server.svg";
import domainHover from "./assets/icon/navIcon/server-hover.svg";
import gift from "./assets/icon/navIcon/gift.svg";
import giftHover from "./assets/icon/navIcon/gift-hover.svg";
import smile from "./assets/icon/navIcon/smiley.svg";
import smileHover from "./assets/icon/navIcon/smiley-hover.svg";
import deposit from "./assets/icon/navIcon/deposit.svg";
import depositHover from "./assets/icon/navIcon/deposit-hover.svg";
import transaction from "./assets/icon/navIcon/transactin.svg";
import transactionHover from "./assets/icon/navIcon/transaction-hover.svg";

import file from "./assets/icon/dashboard/file.svg";
import wallet2 from "./assets/icon/dashboard/wallet-2.svg";
import profile from "./assets/icon/dashboard/profile.svg";
import { CadeInterface, CadeInterface2 } from "./types/dashboardType";

import trophy from "./assets/icon/dashboard/trophy.svg";
import shield from "./assets/icon/dashboard/shield-quartered.svg";
import laptopMobile from "./assets/icon/dashboard/laptop-mobile.svg";
import ticket from "./assets/icon/dashboard/ticket.svg";
import dWallet from "./assets/icon/dashboard/wallet.svg";


import qrCode from "./assets/image/diposit/qr-code.png";
import loginImage from "./assets/image/login/login.png";

import logo from "./assets/image/logo/logo.png";

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
    icon1: deposit,
    icon2: depositHover,
  },
  {
    pathname: "/licenses",
    item: "Licenses",
    icon1: filelock,
    icon2: filelockHover,
  },
  {
    pathname: "/wallet",
    item: "Wallet",
    icon1: wallet,
    icon2: walletHover,
  },
];
export const subNavItem: MenuInterface[] = [
  {
    pathname: "/purchase-plane",
    item: "Purchase Plane",
    icon1: layers,
    icon2: layerHover,
  },
  {
    pathname: "/deposit-log",
    item: "Deposit Log",
    icon1: clock,
    icon2: clockHover,
  },
  {
    pathname: "/manage-server",
    item: "Manage Server",
    icon1: domain,
    icon2: domainHover,
  },
  {
    pathname: "/referral",
    item: "Referral",
    icon1: gift,
    icon2: giftHover,
  },
  {
    pathname: "/transition-history",
    item: "Transition History",
    icon1: transaction,
    icon2: transactionHover,
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
    name: "wallet",
    title: "Your Balance",
    secretCode: "5000",
  },
  {
    img: wallet2,
    name: "wallet",
    title: "Wallet",
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
    title: "Domain",
    number: "96",
  },
  {
    img: file,
    title: "Your Logins",
    number: "12/15",
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
  { table: true },
  { table: true },
  { table: true },
  { table: true },
  { table: true },
  { table: true },
  { table: true },
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
export const images = {
  home,
  homeHover,
  profile,
  trophy,
  qrCode,
  loginImage,
  logo,
  wallet2
};
