import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { IconType } from "react-icons";
import { FaAngleRight } from "react-icons/fa6";

type MultiMenuProps = {
  parentBtn: string;
  Icon: React.ReactElement;
  child: {
    title: string;
    icon: IconType;
    link: string
  }[];
  sidebarSts: boolean;
};

const MultiMenu: React.FC<MultiMenuProps> = ({ Icon, parentBtn, child, sidebarSts }:MultiMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const trigger = useRef<HTMLButtonElement>(null)
  const MenuNav = useRef<HTMLDivElement>(null)

  const handleLinkClick = (link:string) => {
    //setIsOpen(false);
    router.push(link)
  };
  // close the mobile menu on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }: { target: EventTarget | null }): void => {
  //     if (!MenuNav.current || !trigger.current) return;
  //     if (!isOpen || MenuNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
  //     setIsOpen(false)
  //   };
  //   document.addEventListener('click', clickHandler)
  //   return () => document.removeEventListener('click', clickHandler)
  // })
  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!isOpen || keyCode !== 27) return;
      setIsOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="relative">
      <button
        ref={trigger}
        className={`flex items-center justify-between ${sidebarSts ? 'w-52' : 'w-max'} py-2 px-3 cursor-pointer rounded-2xl group-hover:bg-[#242529] outline-none smooth ${isOpen ? 'bg-[#242529]' : 'bg-[#303136]'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {
          sidebarSts ?
            <div className="flex items-center justify-between w-full gap-4">
              <div className="text-left text-lg font-semibold text-gold-200">{parentBtn}</div>
              <div className={`p-2 group-hover:bg-white rounded-xl ${isOpen ? 'bg-white' : 'bg-white/40'}`}>
                <FaAngleRight className={`text-xl text-gold-500 smooth ${isOpen ? 'rotate-90' : ''}`} />
              </div>
            </div>
            :
            <div className={`p-2 group-hover:bg-white rounded-xl ${isOpen ? 'bg-white' : 'bg-white/40'}`}>
              {React.cloneElement(Icon, { className: `w-5 h-5 text-gold-500 smooth ${isOpen ? 'rotate-90' : ''}` })}
            </div>
        }
      </button>
      <div ref={MenuNav} className={`transition-all ml-auto duration-300 ease-in-out overflow-hidden h-max  ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        {isOpen && (
          <ul className={`w-max my-2 flex items-start justify-center gap-1 ${sidebarSts ? 'border-l-2 pl-3' : 'border-t-2 pt-3'} border-dashed  border-gold-500`}>
            <div className={`flex flex-col items-start justify-center gap-1 ${sidebarSts ? 'w-48' : 'w-full bg-gray-200 p-3 rounded-2xl'} `}>
              {child.map((item, index) => (
                <li
                  key={index}
                  //onClick={handleLinkClick}
                  className={`w-full flex text-black-800 text-md font-semibold items-center justify-center  ${sidebarSts ? 'bg-gold-200 px-3 py-2' : 'bg-white'} rounded-xl cursor-pointer`}
                >
                  <button onClick={()=>handleLinkClick(item.link)} className="flex items-center justify-between w-full gap-3">
                    {sidebarSts && (
                      <div className="text-left">{item.title}</div>
                    )}
                    <div className={`${sidebarSts ? 'bg-white p-2 rounded-xl text-gold-500' : 'bg-gold-500 p-2 rounded-xl text-white'}`}>
                      {/* {React.cloneElement(item.Icon, { className: `w-5 h-5 ` })} */}
                      <item.icon className="w-5 h-5" />
                    </div>
                  </button>
                </li>
              ))}
            </div>
          </ul>
        )}
      </div>

    </div>
  );
};

export default MultiMenu;
