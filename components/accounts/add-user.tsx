import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import React from "react";

export const AddUser = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary">
         Добавить пользователя
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Добавить пользователя
                </ModalHeader>
                <ModalBody>
                  <Input label="Эл. почта" variant="bordered" />
                  <Input label="Имя" variant="bordered" />
                  <Input label="Фамилия" variant="bordered" />
                  <Input label="Номер телефона" variant="bordered" />

                  <Input label="Пароль" type="password" variant="bordered" />
                  <Input
                    label="Подтвердить пароль"
                    type="password"
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Закрыть
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Добавить пользователя
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
