import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Property } from "./Property";

@Entity()
export class Owner {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    contact_no: string;

    @Column('datetime')
    created_at: Date;

    @Column('datetime')
    updated_at: Date;

    @OneToMany (type => Property, property => property.owner)
    property: Property[]
}
