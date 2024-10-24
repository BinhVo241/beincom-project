"use client";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { CSSProperties } from "react";
import CommentItem from "./CommentItem";
import MentionComponent from "./MentionComponent";
import useGetComments from "@/lib/hooks/useGetComments";
import useSendComment from "@/lib/hooks/useSendComment";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { formatDate } from "date-fns";
import { DATE } from "@/config/format";

export interface ICommentsForProps {
  full?: boolean;
  style?: CSSProperties;
  className?: string;
  postId: number | string;
}

const CommentsForm = React.forwardRef<any, ICommentsForProps>(
  function CommentsForm({ style, className, postId, full }, innerRef) {
    const [form] = useForm();
    const myUser = useSelector((root: RootState) => root.auth.userInfo);

    const { data: comments, refetch } = useGetComments(postId, {
      enabled: !!postId,
      refetchOnWindowFocus: "always",
    });

    const { mutateAsync } = useSendComment(postId);

    const handleSendComment = () => {
      const comment = form.getFieldValue(["comment"]);
      const dataCommentSend = {
        author: { ...myUser },
        userId: myUser?.id,
        postId: postId,
        createAt: formatDate(new Date(), DATE),
        updatedAt: formatDate(new Date(), DATE),
        content: comment,
      };
      mutateAsync(dataCommentSend as any)
        .then(async () => {
          await refetch();
          form.resetFields(["comment"]);
        })
        .catch((e) => {
          console.log("DEBUG ~ file: index.tsx:46 ~ mutateAsync ~ e:", e);
        });
    };

    return (
      <Form
        form={form}
        name={`commentForm_${postId}`}
        onKeyDown={(e) => {
          if (["13", "Enter"].includes(e.key)) {
            handleSendComment();
          }
        }}
        onFinish={() => {
          handleSendComment();
        }}
      >
        <section
          className={className ? className : "px-4 pb-4 pt-3"}
          style={style}
        >
          <MentionComponent ref={innerRef} />

          {full && comments && comments?.length > 0
            ? comments?.map((item) => (
                <CommentItem
                  author={item.author}
                  createdAt={item.createdAt}
                  content={item.content}
                  key={item.id}
                />
              ))
            : comments &&
              comments?.length > 0 && (
                <CommentItem
                  author={comments[0].author}
                  createdAt={comments[0].createdAt}
                  content={comments[0].content}
                  key={comments[0].id}
                />
              )}
        </section>
      </Form>
    );
  }
);

export default CommentsForm;
