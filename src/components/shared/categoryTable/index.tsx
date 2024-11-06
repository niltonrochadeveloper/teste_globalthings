import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { CategoryProps } from "@/models/types/category";
import EditModal from "../editCategoryModal";
import CreateCategory from "../createCategory";
import DeleteCategoryModal from "../deleteCategoryModal";

const CategoryTable = ({ source }: { source: CategoryProps[] }) => {
  return (
    <div className="flex flex-col gap-4">
      <CreateCategory />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] font-semibold">Id</TableHead>
            <TableHead className="font-semibold">Nome</TableHead>
            <TableHead className="w-[20px] font-semibold">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {source.map((item) => (
            <TableRow key={item.Id}>
              <TableCell className="font-medium">{item.Id}</TableCell>
              <TableCell>{item.Name}</TableCell>
              <TableCell className="flex gap-2">
                <EditModal itemToEdit={item} />
                <DeleteCategoryModal itemToEdit={item} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoryTable;
