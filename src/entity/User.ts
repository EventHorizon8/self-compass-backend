import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import {DiaryEntry} from "./DiaryEntry";

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

    @OneToMany(() => DiaryEntry, (diaryEntry) => diaryEntry.user)
    diaryEntries?: DiaryEntry[]

}
