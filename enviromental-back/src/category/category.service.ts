import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ICategory } from 'src/interfaces/category.interface';

@Injectable()
export class CategoryService {

    constructor(@Inject('CATEGORY_MODEL') private categoryModel: Model<ICategory>){}

}
