"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

export type File = {
  id: string;
  name: string;
  type: string;
  idFrom: string;
  idTo: string;
};

export const colums: ColumnDef<File>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "idFrom",
    header: "From",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("idFrom")}</div>
    ),
  }
];
