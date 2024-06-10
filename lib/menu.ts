import {
  LuLayoutDashboard,
  LuTags,
  LuStore,
  LuTrendingUp,
  LuBus,
  LuPlaneTakeoff,
  LuPalmtree,
 } from "react-icons/lu";

 import {
  FaRegCreditCard,

 } from "react-icons/fa6";

const menu = [
  {
    id: 1,
    title: "Dashboard",
    icon: LuLayoutDashboard,
    link: "/reward-store",
  },
  {
    id: 2,
    title: "Online Deals",
    subList:[
      {
        title:"Top Stores",
        link:'/reward-store/online-deals/top-stores',
        icon: LuStore,
      },
      {
        title:"Trending Deals",
        link:'/reward-store/online-deals/trending-deals',
        icon: LuTrendingUp,
      },
    ],
    icon: LuTags,
    link: "/",
  },
  {
    id: 3,
    title: "Travel",
    subList:[
      {
        title:"Bus",
        link:'/reward-store/travel/bus-booking',
        icon: LuBus,
      },
      {
        title:"Holiday",
        link:'/reward-store/travel/holiday',
        icon: LuPalmtree,
      },
    ],
    icon: LuPlaneTakeoff,
    link: "/",
  },
  {
    id: 4,
    title: "Financial Services",
    subList:[
      {
        title:"Loans",
        link:'/reward-store/finance/loans',
        icon: FaRegCreditCard,
      },
      {
        title:"Insurance",
        link:'/reward-store/finance/insurance',
        icon: FaRegCreditCard,
      },
      {
        title:"Credit Cards",
        link:'/reward-store/finance/credit-cards',
        icon: FaRegCreditCard,
      },
      {
        title:"Capital Market",
        link:'/reward-store/finance/capital-market',
        icon: FaRegCreditCard,
      },
    ],
    icon: FaRegCreditCard,
    link: "/",
  },
  {
    id: 5,
    title: "Education",
    subList:[
      {
        title:"Overseas Education",
        link:'/reward-store/education/overseas',
        icon: FaRegCreditCard,
      },
      {
        title:"Language Classes",
        link:'/reward-store/education/language',
        icon: FaRegCreditCard,
      },
    ],
    icon: FaRegCreditCard,
    link: "/",
  },
  {
    id: 6,
    title: "Good Find Brands",
    icon: FaRegCreditCard,
    link: "/reward-store/value-brands",
  },
  {
    id: 7,
    title: "Value Professionals",
    icon: FaRegCreditCard,
    link: "/reward-store/professionals",
  },
];

export default menu;
