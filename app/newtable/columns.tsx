"use client"
import { ColumnDef } from "@tanstack/react-table"
import Image  from "next/image"
 
export type UserTable ={
    id : string
    image_url : string
    user_name: string
}
export const columns: ColumnDef<UserTable>[] = [
    {
      accessorKey: "image_url",
      header: "Image",
      cell:({row})=><Image src ={row.original.image_url} alt ="pulkitsama" width={50} height={50}></Image>
    },
    {
      accessorKey: "user_name",
      header: "Name",
    },
    {
      accessorKey: "id",
      header: "Id",
    },
]