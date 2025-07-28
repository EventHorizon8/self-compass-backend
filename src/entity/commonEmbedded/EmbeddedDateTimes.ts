import {Column} from "typeorm";

export class EmbeddedDateTimes {
  @Column({
    name: "created_at",
    type: "timestamp with time zone",
  })
  createdAt?: Date;

  @Column({
    name: "updated_at",
    type: "timestamp with time zone",
    nullable: true,
  })
  updatedAt?: Date;

  constructor(createdAt?: Date, updatedAt?: Date) {
    this.createdAt = createdAt || new Date();
    this.updatedAt = updatedAt || new Date();
  }

  updateTimestamps() {
    this.updatedAt = new Date();
  }
}