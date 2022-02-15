import { Link } from 'remix'
import { MENU, SamBlekhmanLogo } from './icons'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Divider,
} from '@chakra-ui/react'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <nav className="mb-8 text-white">
          <div className="flex w-full items-center justify-between p-6">
            <div className="flex items-center justify-between">
              <Link to="/">
                <SamBlekhmanLogo />
              </Link>
              <div className="ml-10 hidden space-x-8 sm:block">
                <Link to="/resume">Resume</Link>
                <Link to="/portfolio">Portfolio</Link>
              </div>
            </div>
            <div className="block text-white sm:hidden ">
              <DrawerExample />
            </div>
          </div>
        </nav>
      </header>
      <main className="overflow-hidden">{children}</main>
    </>
  )
}

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button
        ref={btnRef}
        bgColor="transparent"
        colorScheme="whiteAlpha"
        onClick={onOpen}
      >
        <MENU />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bgColor="gray.800">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">
            <Link to="/">
              <div className="mt-2">
                <SamBlekhmanLogo />
              </div>
            </Link>
          </DrawerHeader>
          <Divider></Divider>
          <DrawerBody>
            <div className="flex flex-col space-y-4 text-white">
              <Link reloadDocument to="/">
                Home
              </Link>
              <Link reloadDocument to="/resume">
                Resume
              </Link>
              <Link reloadDocument to="/portfolio">
                Portfolio
              </Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
