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
import withdrow from "./assets/icon/navIcon/withdraw.svg";
import withdrowHover from "./assets/icon/navIcon/withdraw-hover.svg";
import settings from "./assets/icon/navIcon/settings.svg";
import settingsHover from "./assets/icon/navIcon/settings-hover.svg";

import file from "./assets/icon/dashboard/file.svg";
import wallet2 from "./assets/icon/dashboard/wallet-2.svg";
import profile from "./assets/icon/dashboard/profile.svg";
import { CadeInterface, CadeInterface2 } from "./types/dashboardType";

import trophy from "./assets/icon/dashboard/trophy.svg";
import shield from "./assets/icon/dashboard/shield-quartered.svg";
import ticket from "./assets/icon/dashboard/ticket.svg";
import dWallet from "./assets/icon/dashboard/wallet.svg";

import qrCode from "./assets/image/diposit/qr-code.png";
import loginImage from "./assets/image/login/login.png";

import logo from "./assets/logos/logo.png";

import tick from "./assets/icon/Starthere/tick.svg";

import lottie from "./assets/lottie/loading.json";
import loadingLottie from "./assets/lottie/loading-lottie.json";

export const loading = lottie;
export const loadingLotti = loadingLottie;

import usdt from "./assets/icon/payment/usdt.svg";

import bnb from "./assets/icon/dashboard/bnb.svg";
import usdts from "./assets/icon/dashboard/usdt.svg";
import musd from "./assets/icon/dashboard/musd.svg";
import mind from "./assets/icon/dashboard/mind.svg";

export const walletHistory = [
  {
    id: "012",
    transition_History: "0x3cFbca23e190e8E29626aBd81cD9AD1C57c9f3BA",
    wallletHistory: "0x3cFbca23e190e8E29626aB234",
  },
  {
    id: "013",
    transition_History: "0x3cFbca23e190e8E29626aBd81cD9AD1C57c9f345",
    wallletHistory: "0x3cFbca23e190e8E29626aB56",
  },
  {
    id: "014",
    transition_History: "0x3cFbca23e190e8E29626aBd81cD9AD1C57c9fjhg",
    wallletHistory: "0x3cFbca23e190e8E29626aB456",
  },
  {
    id: "015",
    transition_History: "0x3cFbca23e190e8E29626aBd81cD9AD1C57c9f980",
    wallletHistory: "0x3cFbca23e190e8E29626aB123",
  },
  {
    id: "016",
    transition_History: "0x3cFbca23e190e8E29626aBd81cD9AD1C57c9f8796",
    wallletHistory: "0x3cFbca23e190e8E29626aB890",
  },
];

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
  {
    pathname: "/payment",
    item: "Payment",
    icon1: wallet,
    icon2: walletHover,
  },
  {
    pathname: "/withdraw",
    item: "Withdraw",
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
  // {
  //   pathname: "/deposit-log",
  //   item: "Deposit Log",
  //   icon1: clock,
  //   icon2: clockHover,
  // },
  // {
  //   pathname: "/manage-server",
  //   item: "Manage Server",
  //   icon1: domain,
  //   icon2: domainHover,
  // },
  {
    pathname: "/referal",
    item: "Referal",
    icon1: gift,
    icon2: giftHover,
  },
  {
    pathname: "/transaction-history",
    item: "Transaction History",
    icon1: transaction,
    icon2: transactionHover,
  },
  {
    pathname: "/withdraw-history",
    item: "Withdraw History",
    icon1: withdrow,
    icon2: withdrowHover,
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
    secretCode: "45",
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

type TTable = { table: boolean; status: boolean };
export const tableData: TTable[] = [
  { table: true, status: true },
  { table: true, status: true },
  { table: true, status: false },
  { table: true, status: true },
  { table: true, status: false },
  { table: true, status: true },
  { table: true, status: true },
  { table: true, status: false },
  { table: true, status: false },
  { table: true, status: true },
  { table: true, status: true },
  { table: true, status: true },
  { table: true, status: true },
  { table: true, status: true },
  { table: true, status: true },
  { table: true, status: true },
  { table: true, status: true },
  { table: true, status: true },
  { table: true, status: true },
  { table: true, status: true },
  { table: true, status: true },
  { table: true, status: true },
  { table: true, status: true },
  { table: true, status: true },
  { table: true, status: true },
];

export const PlanData = [
  {
    plan: "Small",
    price: [
      {
        price: "80",
        duration: "1 Month",
      },
    ],
    feature: {
      featureOne: "All-Chains",
      featureTwo: "Unlimited Account",
      featureThree: "Limited Customer Support",
    },
  },
  {
    plan: "Starter",
    price: [
      {
        price: "225",
        duration: "3 Month",
      },
    ],
    feature: {
      featureOne: "All-Chains",
      featureTwo: "Unlimited Account",
      featureThree: "Limited Customer Support",
    },
    save: "6.03",
  },
  {
    plan: "Basic",
    price: [
      {
        price: "2250",
        duration: "Life Time",
      },
    ],
    feature: {
      featureOne: "All-Chains",
      featureTwo: "Unlimited Account",
      featureThree: "Limited Customer Support",
    },
    save: "18",
  },
  {
    plan: "Basic",
    price: [
      {
        price: "780",
        duration: "1 Years",
      },
    ],
    feature: {
      featureOne: "All-Chains",
      featureTwo: "Unlimited Account",
      featureThree: "Limited Customer Support",
    },
    save: "150",
  },
];
export const images = {
  home,
  homeHover,
  profile,
  trophy,
  qrCode,
  loginImage,
  logo,
  wallet2,
  tick,
  usdt,
  usdts,
  mind,
  bnb,
  musd,
  settings,
  settingsHover,
};
