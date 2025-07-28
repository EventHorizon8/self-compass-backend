import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {EmbeddedDateTimes} from "./commonEmbedded/EmbeddedDateTimes";
import {User} from "./User";

@Entity({
  name: "diary_entry",
  comment: "Diary entries table, storing user diary entries."
})
export class DiaryEntry {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  title: string = ''

  @Column("text")
  content: string = ''

  @Column(() => EmbeddedDateTimes, {prefix: ""})
  date?: EmbeddedDateTimes

  @ManyToOne(() => User, (user) => user.diaryEntries, {
    onDelete: "CASCADE"
  })
  user?: User
}