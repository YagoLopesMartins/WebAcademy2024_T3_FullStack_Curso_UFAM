
export default class TodoRepository{
    #schedule
    constructor({ db}){
        this.#schedule = db.addCollection('schedule')
    }

    async list(){
        return this.#schedule.find().map(( { meta, $loki, ...result}) => result)
    }

    async create(data){
        return this.#schedule.insertOne(data)
    }

}