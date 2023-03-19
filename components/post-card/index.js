import React from "react";
import Link from "next/link";

import style from "@/components/post-card/style.module.css";

const PostCard = ({ date, image, slug, link, children }) => {
  return (
    <aside className={style.postCard}>
      {image && (
        <img className={style.postCardImage} src={`/images/posts/${image}`} />
      )}

      <h3 className={style.postCardTitle}>{children}</h3>

      {date && (
        <time className={style.postCardTime} dateTime={date}>
          {date}
        </time>
      )}

      {link && (
        <a
          className={style.postCardLink}
          target="_blank"
          rel="noreferrer"
          title={children}
          href={link}
        >
          open
        </a>
      )}

      {slug && (
        <Link legacyBehavior href={`/blog/${slug}`}>
          <a className={style.postCardLink} title={children}>
            read
          </a>
        </Link>
      )}
    </aside>
  );
};

export default PostCard;
