import { Connection } from 'mongoose';
import { Category } from 'src/schemas/category.schema';

export const categoryProviders = [
    {
        provide: 'CATEGORY_MODEL',
        useFactory: (connection: Connection) => connection.model('Category', Category),
        inject: ['DATABASE_CONNECTION'],
    },
];