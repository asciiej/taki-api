import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import User from './User';
import Event from './Event';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  user_id: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user_provider: User;

  @Column('varchar')
  event_id: string

  @ManyToOne(() => Event)
  @JoinColumn({ name: 'event_id' })
  event_provider: User;

  @Column('decimal')
  price: string

  @Column('varchar')
  status: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Order;
