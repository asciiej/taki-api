import { getRepository } from 'typeorm';
import Event from '../models/Event';

interface Request {
  eventID: string,
}

class GetEventByIDService {
  public async execute({ eventID }: Request): Promise<Event> {
    const eventRepository = getRepository(Event);

    const event = await eventRepository.findOne({ where: { id: eventID } });

    if (!event) {
      throw new Error('userID does not exist');
    }

    return event;
  }
}

export default GetEventByIDService;
