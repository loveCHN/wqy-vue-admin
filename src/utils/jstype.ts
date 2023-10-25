class JsType{
    data:unknown
    constructor(data:unknown){
        this.data = data
    }
    is(type?:any){
        if (type) {            
            return this.getType(type)===this.getType(this.data)
        }
        return this.getType(this.data)
    }
    getType(data:any){
        return Object.prototype.toString.call(data).slice(7,-1)
    }
}
const jstype = (data?:unknown) => { 
    return new JsType(data)
}
export default jstype