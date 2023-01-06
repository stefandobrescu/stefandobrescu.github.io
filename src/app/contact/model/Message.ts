export class Message{
    public firstName: string
    public lastName: string
    public email: string
    public subject: string
    public text: string

    constructor(
        firstName : string,
        lastName : string,
        email : string,
        subject : string,
        text : string
    ){
        this.firstName=firstName
        this.lastName=lastName
        this.email=email
        this.subject=subject
        this.text=text
     }
}