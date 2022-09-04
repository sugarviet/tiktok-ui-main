import classNames from "classnames/bind";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
// import 'tippy.js/dist/tippy.css';

import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Images";
import Search from '../Search'

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English',
        children:{
          title: 'Language',
          data: [
            {
              type: 'language',
              code: 'en',
              title: 'English'
            },
            {
              type: 'language',
              code: 'vi',
              title: 'Vietnamese'
            }
          ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedback and Help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcuts'
    },
]
    

function Header() {
  const currentUser = true;



  const handleMenuChange = (menuItem) => {
    switch(menuItem.type){
      case 'language':
        break;
      default:
    }
  }

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser}/>,
      title: 'View Profile',
      to: '/@vietdang'
    },
    {
      icon: <FontAwesomeIcon icon={faCoins}/>,
      title: 'Get Coins',
      to: '/coin'
    },
    { 
      icon: <FontAwesomeIcon icon={faGear}/>,
      title: 'Settings',
      to: '/settings'
    },
    ...MENU_ITEMS,
    { 
      icon: <FontAwesomeIcon icon={faSignOut}/>,
      title: 'Log out',
      to: '/logout',
      separate: true
    },
  ]


  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="TikTok" />
        </div>

        <Search/>

        <div className={cx("actions")}>
        {currentUser ? (
          <>
          <Tippy delay={[0, 200]} offset={[12, 8]} content="Upload Video" placement="bottom">
            <button className={cx('action-btn')}>
             <UploadIcon />
            </button>
          </Tippy>

          <Tippy delay={[0, 200]} offset={[12, 8]} content="Share" placement="bottom">
            <button className={cx('action-btn')}>
             <MessageIcon />
            </button>
          </Tippy>

          <Tippy delay={[0, 200]} offset={[12, 8]} content="Message" placement="bottom">
            <button className={cx('action-btn')}>
             <InboxIcon />
            </button>
          </Tippy>
          </>
          
        ) : (
          <React.Fragment>
            <Button text>Upload</Button>
            <Button primary>Log in</Button>  
          </React.Fragment>
        )}

            <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                {currentUser ?  (
                  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLshlLQkVsmMDuoYjkOPQy9Icop3a0nzX3w&usqp=CAu' className={cx('user-avatar')} alt='Dang Hoang Viet'
                  fallback="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsxo6Lu9D6ixWWKaB_j-S_JNRlD7v7xLBsA&usqp=CAU"
                  />
                ) : (
                  <>
                  <button className={cx("more-btn")}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                  </>
                )}
                
            </Menu>
        </div>

        
      </div>
    </header>
  );
}

export default Header;
