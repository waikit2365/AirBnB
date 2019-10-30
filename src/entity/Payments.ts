import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Booking } from "./Booking";

@Entity()
export class Payments {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @Column()
    amount: number;

    @ManyToOne(type => Booking)
    @JoinColumn({ name: 'booking_id' })
    booking: Booking
}
