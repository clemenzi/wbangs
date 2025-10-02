interface QueryHash {
  bang: string;
  query: string;
}

export function parse(hash: string): QueryHash {
  const params = new URLSearchParams(hash);

  const query = params.get("q");

  if (!query) return { bang: "", query: "" };

  // Retrieve the bang if it exists
  // A bang is defined as a string that starts or ends with '!' followed by non-space characters
  const bangMatch = query.match(/(^|\s)(!\S+)(\s|$)/);
  const bang = bangMatch
    ? bangMatch[2]
    : params.get("d") || localStorage.getItem("defaultBang") || "!g";

  const cleanedQuery = query.replace(bang || "", "").trim();

  return { bang, query: cleanedQuery };
}
