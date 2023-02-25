import { ICat } from 'src/interface/cat.interface';
import { CreateCatDto } from '../dto/cat.dto';
export declare class CatService {
    private cats;
    getCat(): ICat[];
    createCat(cat: CreateCatDto): ICat;
}
