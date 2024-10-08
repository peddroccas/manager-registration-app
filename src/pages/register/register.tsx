import { Tabs, Card, Tab, CardBody } from '@nextui-org/react'
import { RegistersTable } from './components/registers-table'

export function Register() {
  return (
    <div className="p-4 text-center min-h-screen">
      <Tabs className="mt-4">
        <Tab title="Novas">
          <Card classNames={{ base: '!bg-inherit' }}>
            <CardBody>
              <RegistersTable status="NEW" />
            </CardBody>
          </Card>
        </Tab>
        <Tab title="Aceitas">
          <Card classNames={{ base: '!bg-inherit' }}>
            <CardBody>
              <RegistersTable status="ACCEPTED" />
            </CardBody>
          </Card>
        </Tab>
        <Tab title="Recusadas">
          <Card classNames={{ base: '!bg-inherit' }}>
            <CardBody>
              <RegistersTable status="DENIED" />
            </CardBody>
          </Card>
        </Tab>
        <Tab title="Enviadas">
          <Card classNames={{ base: '!bg-inherit' }}>
            <CardBody>
              <RegistersTable status="SENT" />
            </CardBody>
          </Card>
        </Tab>
        <Tab title="Todas">
          <Card classNames={{ base: '!bg-inherit' }}>
            <CardBody>
              <RegistersTable />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  )
}
