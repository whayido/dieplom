"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";
import { AcmeIcon } from "../icons/acme-icon";
import { AcmeLogo } from "../icons/acmelogo";
import { BottomIcon } from "../icons/sidebar/bottom-icon";
import { TelegramIcon } from "../icons/social/telegram";
import { VkIcon } from "../icons/social/vk";
import { WebsiteIcon } from "../icons/social/website";

export const CompaniesDropdown = () => {
  const handleRedirect = (url: string) => {
    // Открытие ссылки в новом окне
    window.open(url, "_blank");
  };

  return (
    <Dropdown classNames={{ base: "w-full min-w-[260px]" }}>
      <DropdownTrigger className="cursor-pointer">
        <div className="flex items-center gap-2">
          <AcmeIcon />
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium m-0 text-default-900 -mb-4 whitespace-nowrap">
              ОКЦ Башня
            </h3>
            <span className="text-xs font-medium text-default-500">
              Ленинский проспект, 1
            </span>
          </div>
          <BottomIcon />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Social Links">
        <DropdownSection title="Страницы в соц сетях">
          <DropdownItem
            key="1"
            startContent={<TelegramIcon />}
            description="https://t.me/Bashnya_Backstage"
            classNames={{ base: "py-4", title: "text-base font-semibold" }}
            onClick={() => handleRedirect("https://t.me/Bashnya_Backstage")}
          >
            Телеграм
          </DropdownItem>
          <DropdownItem
            key="2"
            startContent={<VkIcon />}
            description="https://vk.com/arctictower"
            classNames={{ base: "py-4", title: "text-base font-semibold" }}
            onClick={() => handleRedirect("https://vk.com/arctictower")}
          >
            Вконтакте
          </DropdownItem>
          <DropdownItem
            key="3"
            startContent={<WebsiteIcon />}
            description="https://arctictower.vercel.app/"
            classNames={{ base: "py-4", title: "text-base font-semibold" }}
            onClick={() => handleRedirect("https://arctictower.vercel.app/")}
          >
            Сайт
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
