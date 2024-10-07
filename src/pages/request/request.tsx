import { Tabs, Card, Tab, CardBody } from '@nextui-org/react'
import RequestsTable from './components/requests-table'

export function Request() {
  return (
    <div className="p-4 text-center min-h-screen">
      <Tabs>
        <Tab title="Novas">
          <Card classNames={{ base: '!bg-inherit' }}>
            <CardBody>
              <RequestsTable status="NEW" />
            </CardBody>
          </Card>
        </Tab>
        <Tab title="Aceitas">
          <Card classNames={{ base: '!bg-inherit' }}>
            <CardBody>
              <RequestsTable status="ACCEPTED" />
            </CardBody>
          </Card>
        </Tab>
        <Tab title="Recusadas">
          <Card classNames={{ base: '!bg-inherit' }}>
            <CardBody>
              <RequestsTable status="DENIED" />
            </CardBody>
          </Card>
        </Tab>
        <Tab title="Enviadas">
          <Card classNames={{ base: '!bg-inherit' }}>
            <CardBody>
              <RequestsTable status="SENT" />
            </CardBody>
          </Card>
        </Tab>
        <Tab title="Todas">
          <Card classNames={{ base: '!bg-inherit' }}>
            <CardBody>
              <RequestsTable />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  )
}
