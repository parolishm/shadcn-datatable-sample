import { UserTable, columns } from "./columns"
import { DataTable } from "./data-table"


async function getData(): Promise<UserTable[]> {
  // Fetch data from your API here.
   return (await fetch('https://dummyjson.com/c/d266-4f14-4ed6-935f')).json()
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
