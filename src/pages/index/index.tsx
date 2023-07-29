import React, {FC, useEffect, useState} from "react";
import {IPage} from "../../interface/page";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NewMessage } from "../../components/NewMessage";
import { SystemMessage } from "../../components/SystemMessage";
import { Time } from "../../components/Time";
import { Message } from "../../components/Message";
import { ChatItem } from "../../components/ChatItem";
import { ChatItemList } from "../../components/ChatItemList";
import { ChatWindow } from "../../components/ChatWindow";
import "./ChatPage.scss"
import { getChatList } from "../../api/chat";
import { ChatList } from "../../interface/ChatList";
import { Chat } from "../../interface/Chat";
import { setChats } from "../../slices/chatsSlice";
import { RootState, useAppDispatch } from "../../store";
import { useSelector } from "react-redux";

export const PageIndex: FC<IPage> = (props: IPage) => {
    const { title } = props;
    const dispatch = useAppDispatch()
    const chats = useSelector((state: RootState) => state.chats)

    useEffect(() => {
      (async () => {
        const chatList = await getChatList()
        dispatch(setChats(chatList.response))
      })()
    }, [])

    return (
      <>
        <div className="noMobileDevices">
          <h3>ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</h3>
        </div>
        <div className="chatPage">
          <ChatItemList chats={chats}></ChatItemList>
          <ChatWindow chatName="Great Project"></ChatWindow>
        </div>
        
      </>
    )
}