import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "",
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<!doctype html>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-36C73MZM6G"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-36C73MZM6G');
</script>
<meta charset="utf-8">
<title>404 Not Found</title>
<p>Page not found. Go back to <a href="/">home</a>.</p>
<script>
  // 專案頁 404 自動導回首頁
  location.replace('/');
</script>
` }} />
    </>
  );
}