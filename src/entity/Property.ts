import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { Booking } from "./Booking";
import { Owner } from "./Owner";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column()
    owner_id: number;

    @ManyToOne(type => Owner)
    @JoinColumn({ name: 'owner_id' })
    owner: Owner

    @Column('datetime')
    created_at: Date;

    @Column('datetime')
    updated_at: Date;

    @OneToMany (type => Booking, booking => booking.user)
    bookings: Booking[]
}
