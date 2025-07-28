import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {EmbeddedDateTimes} from "./commonEmbedded/EmbeddedDateTimes";

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
}