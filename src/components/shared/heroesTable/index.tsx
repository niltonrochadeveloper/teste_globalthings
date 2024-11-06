import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { Heroes } from "@/models/types/heroes";
import CreateHero from "../createHero";
import EditHeroModal from "../editHeroModal";
import DeleteHeroModal from "../deleteHeroModal";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

const HeroesTable = ({ source }: { source: Heroes[] }) => {
  return (
    <div className="flex flex-col gap-4">
      <CreateHero />
      <Table className="z-50">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] font-semibold">Id</TableHead>
            <TableHead className="font-semibold">Nome</TableHead>
            <TableHead className="font-semibold">Caterogia</TableHead>
            <TableHead className="font-semibold">Ativo</TableHead>
            <TableHead className="w-[20px] font-semibold text-end">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {source.map((item) => (
            <TableRow key={item.Id}>
              <TableCell className="font-medium">{item.Id}</TableCell>
              <TableCell>{item.Name}</TableCell>
              <TableCell>{item.Category.Name}</TableCell>
              <TableCell>{item.Active ? "Sim" : "Não"}</TableCell>
              <TableCell className="flex gap-2">
                <Link href={`/heroes/${item.Id}`}>
                  <EyeIcon size={20} />
                </Link>
                <EditHeroModal itemToEdit={item} />
                <DeleteHeroModal itemToEdit={item} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HeroesTable;
