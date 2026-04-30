import React from 'react';

export function HtmlFragment({ html, id, className, style }) {
  if (!html) return null;
  return <div id={id} className={className} style={style} dangerouslySetInnerHTML={{ __html: html }} />;
}
