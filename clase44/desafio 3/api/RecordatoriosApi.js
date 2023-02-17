import RecordatoriosDao from '../daos/RecordatoriosDao.js';
import RecordatorioDTO from '../dto/RecordatorioDto.js';
import crypto from 'crypto'

export default class RecordatoriosApi {
    constructor() {
        this.dao = new RecordatoriosDao()
    }

    getRecordatorios = () => {
        return this.dao.getRecordatorios();
    }

    createRecordatorio = ({ datos }) => {
        const id = crypto.randomBytes(10).toString('hex');
        const nuevoRecordatorio = new RecordatorioDTO(id, datos)
        this.dao.saveRecordatorio(nuevoRecordatorio);
        return nuevoRecordatorio;
    }

    marcarLeidoRecordatorio = ({ id }) => {
        const actualizado = this.dao.updateRecordatorio(id, { leido: true })
        return actualizado
    }

    deleteRecordatoriosLeidos = () => {
        const deleted = this.dao.deleteRecordatoriosWhere('leido', true)
        return deleted
    }
}
