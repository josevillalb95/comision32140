import { CreateCatDto } from 'src/dto/cat.dto';
import { ICat } from 'src/interface/cat.interface';
import { CatService } from './cat.service';
export declare class CatController {
    private catService;
    constructor(catService: CatService);
    getMuchus(): ICat[];
    setMuchus(newMichu: CreateCatDto): ICat;
}
