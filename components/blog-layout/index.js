import React from "react";
import TableOfContents from "@/components/table-of-contents";

const BlogLayout = ({ children, headings }) => {
  return (
    <div className="blog-post-theme">
      {headings?.length > 0 && <TableOfContents headings={headings} />}
      {children}
    </div>
  );
};

export default BlogLayout;
