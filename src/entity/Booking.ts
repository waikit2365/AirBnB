import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { User } from './User'
import { Property } from './Property'
import { Payments } from './Payments'

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Property)
    @JoinColumn({ name: 'property_id' })
    property: Property

    @Column()
    price: number;

    @Column('datetime')
    booking_date: Date;

    @ManyToOne(type => User)
    @JoinColumn({ name: 'user_id' })
    user: User

    @Column('datetime')
    check_in: Date;

    @Column('datetime')
    check_out: Date;

    @Column('datetime')
    created_at: Date;

    @Column('datetime')
    updated_at: Date;

    @OneToMany (type => Payments, payments => payments.booking)
    payments: Payments[]
}
