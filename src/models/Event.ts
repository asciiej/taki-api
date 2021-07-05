import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('events')
class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('datetime')
  date: Date

  @Column('place')
  place: string

  @Column('integer')
  seat_count: number

  @Column('integer')
  seat_column_count: number

  @Column('integer')
  seat_row_count: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Event;
