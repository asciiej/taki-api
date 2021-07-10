import { getRepository } from 'typeorm';
import Event from '../models/Event';

class GetEventsService {
  public async execute(): Promise<Event[]> {
    const eventRepository = getRepository(Event);

    const events = await eventRepository.find({
      order: {
        date: 'DESC',
      },
      cache: true,
    });

    return events;
  }
}

export default GetEventsService;
