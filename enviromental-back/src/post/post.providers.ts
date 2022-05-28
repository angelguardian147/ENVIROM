import { Connection } from 'mongoose';
import { Post } from 'src/schemas/post.schema';

export const postProviders = [
    {
        provide: 'POST_MODEL',
        useFactory: (connection: Connection) => connection.model('Post', Post),
        inject: ['DATABASE_CONNECTION'],
    },
];