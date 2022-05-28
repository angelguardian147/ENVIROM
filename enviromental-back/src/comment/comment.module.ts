import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CommentController } from './comment.controller';
import { commentProviders } from './comment.providers';
import { CommentService } from './comment.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CommentController],
  providers: [CommentService, ...commentProviders],
  exports: [CommentService]
})
export class CommentModule {}
