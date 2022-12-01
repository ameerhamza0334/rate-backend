import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
export declare class SuppliersController {
    private readonly suppliersService;
    constructor(suppliersService: SuppliersService);
    create(createSupplierDto: CreateSupplierDto): string;
    findAll(): {
        name: string;
        supplierId: number;
        amount: number;
        notDue: number;
        due: number;
        overDue: number;
    }[];
    findOne(id: string): string;
    update(id: string, updateSupplierDto: UpdateSupplierDto): string;
    remove(id: string): string;
}
