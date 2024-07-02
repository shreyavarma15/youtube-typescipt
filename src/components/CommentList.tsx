import Comment from "./Comment";
import { COMMENTS_DATA } from "../utils/constants";
import { ReactComponent as ChevronUp } from "../assets/chevronUp.svg";
import { ReactComponent as ChevronDown } from "../assets/chevronDown.svg";
import { useState } from "react";

// Define a type for a single comment
interface RawCommentData {
  name: string;
  text: string;
  replies: RawCommentData[];
}

interface CommentData {
  name: string;
  text: string;
  replyCount: number;
  replies: CommentData[]; // Nested comments (replies)
}

type CommentListProps = {
  commentsData: CommentData[];
};

export const addReplyCount = (comments: RawCommentData[]): CommentData[] => {
  return comments.map((comment) => {
    const updatedReplies = addReplyCount(comment.replies);
    const replyCount = updatedReplies.length;

    return {
      ...comment,
      replyCount,
      replies: updatedReplies,
    };
  });
};

const CommentList = (props: CommentListProps) => {
  const { commentsData } = props;

  const [expandedComments, setExpandedComments] = useState<number[]>([]);

  const toggleComments = (index: number) => {
    setExpandedComments((prevExpanded) =>
      prevExpanded.includes(index)
        ? prevExpanded.filter((i) => i !== index)
        : [...prevExpanded, index]
    );
  };

  return commentsData.map((comment, index) => {
    const isExpanded = expandedComments.includes(index);

    return (
      <div key={index}>
        <Comment data={comment} />

        {comment.replyCount > 0 && (
          <div
            onClick={() => toggleComments(index)}
            className="flex items-center cursor-pointer w-fit hover:bg-blue-100 p-2 rounded-3xl"
          >
            {isExpanded ? (
              <ChevronUp className="fill-blue-600" />
            ) : (
              <ChevronDown className="fill-blue-600" />
            )}

            <span className="ml-2 text-blue-600">
              {comment.replyCount} Replies:
            </span>
          </div>
        )}

        {isExpanded && (
          <div className="pl-5 border-l-4 ml-6">
            {comment.replies && comment.replies.length > 0 && (
              <CommentList commentsData={comment.replies} />
            )}
          </div>
        )}
      </div>
    );
  });
};

export default CommentList;
