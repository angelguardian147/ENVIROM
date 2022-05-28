import { Connection } from 'mongoose';
import { Comment } from 'src/schemas/comment.schema';

export const commentProviders = [
    {
        provide: 'COMMENT_MODEL',
        useFactory: (connection: Connection) => connection.model('Comment', Comment),
        inject: ['DATABASE_CONNECTION'],
    },
];