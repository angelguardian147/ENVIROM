import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CategoryModule, CommentModule, UserModule, PostModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
