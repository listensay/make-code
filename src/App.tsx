import { MantineProvider } from '@mantine/core'
import { AppShell, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Outlet } from 'react-router-dom'
import '@mantine/core/styles.css'
import Menu from '@/components/Menu'
function App() {
  const [opened, { toggle }] = useDisclosure()

  return (
    <div>
      <MantineProvider>
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: 'sm',
            collapsed: { mobile: !opened }
          }}
          padding="md"
        >
          <AppShell.Header>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <div className="flex items-center px-4 h-full">MakeCoders</div>
          </AppShell.Header>

          <AppShell.Navbar p="md">
            <Menu />
          </AppShell.Navbar>

          <AppShell.Main>
            <div>
              <Outlet />
            </div>
          </AppShell.Main>
        </AppShell>
      </MantineProvider>
    </div>
  )
}

export default App
