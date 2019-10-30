import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Booking } from "./Booking";

@Entity()
export class User {

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

    @OneToMany (type => Booking, booking => booking.user)
    bookings: Booking[]
}
