import { useEffect, useState } from "react";
import { File, colums } from "./columns";
import { DataTable } from "./data-table";

// Mover a função getData para fora do componente
async function getData(): Promise<File[]> {
  return [
    {
      id: "1",
      name: "file1",
      type: "txt",
      idFrom: "1",
      idTo: "2",
    },
    {
      id: "2",
      name: "file2",
      type: "txt",
      idFrom: "2",
      idTo: "1",
    },
  ];
}

export function Page() {
  const [data, setData] = useState<File[] | null>(null);

  useEffect(() => {
    // Buscar os dados quando o componente montar
    getData().then((result) => {
      setData(result);
    });
  }, []);

  if (!data) {
    // Você pode exibir um loader enquanto os dados estão sendo carregados
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={colums} data={data} />
    </div>
  );
}
