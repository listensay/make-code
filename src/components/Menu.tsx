import { Button } from '@mantine/core'
import { IconArrowRight, IconHome, IconTemplate } from '@tabler/icons-react'
import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Menu = memo(() => {
  const [active, setActive] = useState(0)
  const navigate = useNavigate()

  const menuList = [
    {
      label: 'Home',
      url: '/',
      icon: <IconHome size={'16'}></IconHome>
    },
    {
      label: 'NextPage',
      url: '/next',
      icon: <IconArrowRight size={'16'}></IconArrowRight>
    },
    {
      label: 'Template',
      url: '/template',
      icon: <IconTemplate size={'16'}></IconTemplate>
    }
  ]

  const handleClick = (index: number) => {
    setActive(index)
    navigate(menuList[index].url)
  }

  return (
    <div>
      {menuList.map((item, index) => {
        return (
          <Button
            variant={active === index ? 'filled' : 'light'}
            className="mb-3"
            fullWidth
            key={item.label}
            leftSection={item.icon}
            onClick={() => handleClick(index)}
          >
            {item.label}
          </Button>
        )
      })}
    </div>
  )
})

Menu.displayName = 'Menu'

export default Menu
