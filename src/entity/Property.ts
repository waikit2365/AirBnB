import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import { Booking } from "./Booking";
import { Owner } from "./Owner";
import { Tags } from "./Tags";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @ManyToOne(type => Owner)
    @JoinColumn({ name: 'owner_id' })
    owner: Owner

    @Column('datetime')
    created_at: Date;

    @Column('datetime')
    updated_at: Date;

    @OneToMany (type => Booking, booking => booking.user)
    bookings: Booking[]

    @ManyToMany(type => Tags)
    @JoinTable()
    properties_tags: Tags[];
}
