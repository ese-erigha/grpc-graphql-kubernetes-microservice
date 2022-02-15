export interface ICommentService {
  commentsForBulkPostIds: (postIds: string[]) => Promise<Array<Array<Comment>>>;
}
