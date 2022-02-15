import { ICommentService } from './comment.interface';

export class CommentService implements ICommentService {
  async commentsForBulkPostIds(postIds: string[]): Promise<Comment[][]> {
    return [];
  }
}
