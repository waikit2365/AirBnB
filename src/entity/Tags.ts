import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Tags {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;
}
