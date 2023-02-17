export default class RecordatoriosDao {
    constructor() {
        this.recordatorios = []
    }

    getRecordatorios() {
        return this.recordatorios;
    }

    saveRecordatorio(recordatorio) {
        this.recordatorios.push(recordatorio)
    }

    updateRecordatorio(id, campos) {
        const index = this.recordatorios.findIndex(r => r.id == id)
        if (index == -1) {
            throw new Error('Recordatorio not found')
        }
        const recordatorioActualizado = { ...this.recordatorios[ index ], ...campos }
        this.recordatorios[ index ] = recordatorioActualizado
        return recordatorioActualizado
    }

    deleteRecordatoriosWhere(campo, valor) {
        let i = 0
        const deleted = []
        while (i < this.recordatorios.length) {
            if (this.recordatorios[ i ][ campo ] == valor) {
                deleted.push(this.recordatorios.splice(i, 1)[ 0 ])
            }
            i++
        }
        return deleted
    }
}