export class UserModel{
    constructor(
        public firstName : String,
        public lastName:String,
        public gender: String,
        public dob: String,
        public district: String,
        public phone: Number,
        public address: String,
        public email:String,
        public password:String){}
}