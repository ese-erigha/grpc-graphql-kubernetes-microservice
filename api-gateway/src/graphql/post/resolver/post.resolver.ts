import { Resolver, Query, Arg, ID, FieldResolver, Root } from 'type-graphql';
import { inject, injectable } from 'inversify';
import { Loader } from 'type-graphql-dataloader';
import { Post } from '../model/post.model';
import { Comment, ICommentService } from '../../comment';
import { TYPES } from '../../../inversify/types';

let commentServiceRef: ICommentService;

@injectable()
@Resolver((of) => Post)
export class PostResolver {
  private commentService: ICommentService;

  constructor(@inject(TYPES.ICommentService) commentService: ICommentService) {
    commentServiceRef = commentService;
    this.commentService = commentService;
  }

  @Query((returns) => Post)
  post(@Arg('id', (type) => ID) id: string): Post {
    return {} as Post;
  }

  @FieldResolver()
  @Loader<string, Comment[]>(async (ids, { context })=> {
    const comments = await commentServiceRef.commentsForBulkPostIds(ids);
  })
  async comments(@Root() post: Post): Promise<Comment[]> {
    const author = await this.userRepository.findById(recipe.userId);
    if (!author) throw new SomethingWentWrongError();
    return author;
  }
}
