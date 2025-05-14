import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Navbar,
  NavbarItem,

  

} from "@heroui/react";

import React, { useCallback } from "react";
import { DarkModeSwitch } from "./darkmodeswitch";
import { useRouter } from "next/navigation";
import { deleteAuthCookie } from "@/actions/auth.action";

export const UserDropdown = () => {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    await deleteAuthCookie();
    router.replace("/login");
  }, [router]);

  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Avatar
            as='button'
              isBordered
                  color="primary"
            
            size='sm'
            src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
          />
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label='User menu actions'
        onAction={(actionKey) => console.log({ actionKey })}>
        <DropdownItem 
          key='profile'
          className='flex flex-col justify-start w-full items-start'>
          <p>Профиль</p>
          <p>dieplom@yandex.ru</p>
        </DropdownItem>
  <DropdownSection>

       {/*  <DropdownItem key='team_settings'>Tea</DropdownItem> */}
  {/*       <DropdownItem key='analytics'>Аналитика</DropdownItem>
        <DropdownItem key='system'>Система</DropdownItem>
        <DropdownItem key='configurations'>Конфигурация</DropdownItem> */}
       <DropdownItem key='settings' >Настройки</DropdownItem>
           </DropdownSection>
        <DropdownItem
          key='logout'
          color='danger'
          className='text-danger'
          onPress={handleLogout}>
          Выйти из аккаунта
        </DropdownItem>
    
        <DropdownItem key='switch' >
            <DarkModeSwitch />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
