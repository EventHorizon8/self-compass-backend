import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    name?: string

    @Column({
        // Do not select password by default
        select: false,
    })
    password?: string

    @Column({
        unique: true,
    })
    email?: string

}
