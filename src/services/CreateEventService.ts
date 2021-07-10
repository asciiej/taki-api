import { getRepository } from 'typeorm';
import Event from '../models/Event';

interface Request {
  date: Date
  name: string
  location: string
  seat_count: number
  seat_column_count: number
  seat_row_count: number
}

class CreateEventService {
  public async execute({
    date, name, location, seat_count, seat_column_count, seat_row_count,
  }: Request): Promise<Event> {
    const eventRepository = getRepository(Event);

    const event = eventRepository.create(
      {
        date,
        name,
        location,
        seat_count,
        seat_column_count,
        seat_row_count,
      },
    );

    await eventRepository.save(event);

    return event;
  }
}

export default CreateEventService;
