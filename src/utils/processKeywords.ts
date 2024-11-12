interface PageKeywords {
  keywords: string[];
}

export default function processKeywords(pageKeywords: PageKeywords): PageKeywords {
  const uniqueKeywords = Array.from(new Set(pageKeywords.keywords.map(kw => kw.toLowerCase())));
  return { keywords: uniqueKeywords };
}
