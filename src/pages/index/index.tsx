import { FC } from "react";
import { IPage } from "../../interface/page";
import { ChatItemList } from "../../components/ChatItemList";
import { ChatWindow } from "../../components/ChatWindow";
import "./ChatPage.scss"

export const PageIndex: FC<IPage> = () => {
    return (
      <>
        <div className="noMobileDevices">
          <h3>ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</h3>
        </div>
        <div className="chatPage">
          <ChatItemList></ChatItemList>
          <ChatWindow></ChatWindow>
        </div>
        
      </>
    )
}