import React from "react"
import { Menu } from "@headlessui/react"
import { List } from "phosphor-react"
import * as styles from "../styles/mobile-dropdown.module.css"

export default function MobileDropDown({ items }) {
  return (
    <Menu as="div" className={styles.menu_wrapper}>
      <Menu.Button className={styles.menu_btn}>
        <List size={"2.5rem"} color="#fff" weight="bold" />
      </Menu.Button>
      <Menu.Items className={styles.menu_items}>
        {items.map(item => {
          const { name, url, icon } = item
          return (
            <Menu.Item key={name}>
              <a href={url} className={`${styles.menu_item}`}>
                {icon} {name}
              </a>
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}
