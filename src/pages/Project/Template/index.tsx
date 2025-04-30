import { Button, Checkbox, Input, Pagination, Table } from '@mantine/core'
import { memo, useState } from 'react'

const Template = memo(() => {
  // 表格数据
  const elements: element[] = [
    { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
    { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
    { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' }
  ]

  // 选中表格行
  const [selectedRows, setSelectedRows] = useState<number[]>([])

  // 表格行
  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={selectedRows.includes(element.position) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td width={45} align="center">
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          className="w-full"
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter((position) => position !== element.position)
            )
          }
        />
      </Table.Td>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
      <Table.Td width={180} align="center">
        <div className="flex justify-center gap-2">
          <Button variant="light" onClick={() => handleEditor(element)}>
            编辑
          </Button>
          <Button color="red" onClick={() => handleDelete(element)}>
            删除
          </Button>
        </div>
      </Table.Td>
    </Table.Tr>
  ))

  // 编辑处理函数
  const handleEditor = (element: element) => {
    console.log(element)
  }

  // 删除处理函数
  const handleDelete = (element: element) => {
    console.log(element)
  }

  return (
    <div>
      {/* 搜索 */}
      <div className="bg-white my-2 px-6 py-4 flex items-center gap-2 rounded-md">
        Element position <Input placeholder="搜索" />
        <Button>搜索</Button>
        <Button variant="light">重置</Button>
      </div>

      {/* 表格 */}
      <div className="p-4 mt-4 bg-white rounded-md">
        {/* 操作框 */}

        <div className="flex items-center gap-2 mb-4">
          <Button>新增</Button>
          <Button variant="light">编辑</Button>
          <Button color="red">删除</Button>
        </div>
        <Table className="bg-white rounded-sm " striped>
          <Table.Thead>
            <Table.Tr className="h-12">
              {/* 全选 */}
              <Table.Th>
                <Checkbox
                  aria-label="Select all rows"
                  checked={selectedRows.length === elements.length}
                  onChange={(event) =>
                    setSelectedRows(
                      event.currentTarget.checked ? elements.map((element) => element.position) : []
                    )
                  }
                />
              </Table.Th>

              {/* 表格行字段 */}
              <Table.Th>Element position</Table.Th>
              <Table.Th>Element name</Table.Th>
              <Table.Th>Symbol</Table.Th>
              <Table.Th>Atomic mass</Table.Th>
              <Table.Th>操作</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
      {/* 分页 */}
      <div className="p-4 mt-4 bg-white rounded-md">
        <Pagination total={10} />
      </div>
    </div>
  )
})

export interface element {
  position: number
  mass: number
  symbol: string
  name: string
}

Template.displayName = 'Template'

export default Template
