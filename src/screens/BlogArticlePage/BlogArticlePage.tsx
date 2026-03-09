import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogsData, BlogPost } from "../../data/blogsData";

export const BlogArticlePage = (): JSX.Element => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [relatedBlogs, setRelatedBlogs] = useState<BlogPost[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const found = blogsData.find((b) => b.slug === slug);
        if (found) {
            setBlog(found);
            // Select 3 other blogs for "You May Also Like"
            const others = blogsData.filter((b) => b.slug !== slug);
            // Shuffle or just pick first 3
            setRelatedBlogs(others.slice(0, 3));
        } else {
            // Not found redirect to blogs list
            navigate("/blogs");
        }
    }, [slug, navigate]);

    if (!blog) return <div style={{ minHeight: "60vh", background: "#fff" }} />;

    return (
        <main style={{ background: "#fff" }}>
            {/* Hero */}
            <section
                style={{
                    background: "var(--primary-dark)",
                    padding: "160px 0 100px",
                    textAlign: "center",
                    position: "relative"
                }}
            >
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    {/* Breadcrumbs */}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, marginBottom: 20 }}>
                        <Link to="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: 13 }}>Home</Link>
                        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>/</span>
                        <Link to="/blogs" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: 13 }}>Blogs</Link>
                        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>/</span>
                        <span style={{ color: "#fff", fontSize: 13 }}>{blog.title}</span>
                    </div>

                    <h1
                        style={{
                            fontFamily: "var(--font-family)",
                            fontWeight: 600,
                            fontSize: "clamp(28px, 4vw, 42px)",
                            color: "#fff",
                            lineHeight: 1.3,
                            maxWidth: 900,
                            margin: "0 auto",
                            letterSpacing: "0.2px"
                        }}
                        dangerouslySetInnerHTML={{ __html: blog.title }}
                    />
                </div>
            </section>

            {/* Content Body */}
            <section style={{ padding: "64px 0", background: "#fff" }}>
                <div className="container" style={{ maxWidth: 840, margin: "0 auto" }}>
                    {blog.image && (
                        <div style={{ width: "100%", marginBottom: 40, borderRadius: 16, overflow: "hidden", boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}>
                            <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "auto", display: "block" }} />
                        </div>
                    )}

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, borderBottom: "1px solid #ebebeb", paddingBottom: 16 }}>
                        <span style={{ fontSize: 15, color: "var(--text-muted)", fontWeight: 500 }}>Published on {blog.date}</span>
                        <span style={{ background: "rgba(102, 95, 253, 0.1)", color: "var(--primary)", padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>Article</span>
                    </div>

                    <div
                        className="wp-blog-content"
                        style={{
                            fontFamily: "var(--font-family)",
                            fontSize: "17px",
                            lineHeight: 1.8,
                            color: "var(--m3-text-black)",
                        }}
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </div>
            </section>

            {/* You May Also Like */}
            {relatedBlogs.length > 0 && (
                <section style={{ padding: "80px 0", background: "var(--bg-light)" }}>
                    <div className="container">
                        <div style={{ textAlign: "center", marginBottom: 48 }}>
                            <h2 style={{ fontFamily: "var(--font-family)", fontWeight: 600, fontSize: "clamp(26px, 2.5vw, 36px)", color: "var(--primary-dark)", marginBottom: 12 }}>
                                You May Also Like
                            </h2>
                            <p style={{ fontSize: "clamp(16px, 1.3vw, 22px)", color: "var(--text-body)" }}>
                                Read more from our blogs
                            </p>
                        </div>

                        <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, maxWidth: 1100, margin: "0 auto" }}>
                            {relatedBlogs.map((b, i) => (
                                <Link
                                    key={i}
                                    to={`/blogs/${b.slug}`}
                                    onClick={() => window.scrollTo(0, 0)}
                                    style={{
                                        background: "#fff",
                                        borderRadius: 16,
                                        overflow: "hidden",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                        textDecoration: "none",
                                        transition: "transform 0.3s, box-shadow 0.3s",
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "100%"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-6px)";
                                        e.currentTarget.style.boxShadow = "0 16px 40px rgba(102,95,253,0.15)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                                    }}
                                >
                                    <div style={{ width: "100%", height: 210, background: `url(${b.image}) center/cover no-repeat` }} />
                                    <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                                        <time style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 12, fontWeight: 500 }}>{b.date}</time>
                                        <h3
                                            style={{ fontSize: 18, color: "var(--text-dark)", lineHeight: 1.4, fontWeight: 600, margin: 0, paddingBottom: 16 }}
                                            dangerouslySetInnerHTML={{ __html: b.title }}
                                        />
                                        <div style={{ marginTop: "auto", color: "var(--primary)", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                                            Read Article
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div style={{ textAlign: "center", marginTop: 48 }}>
                            <Link
                                to="/blogs"
                                onClick={() => window.scrollTo(0, 0)}
                                className="btn-outline"
                                style={{
                                    display: "inline-block",
                                    padding: "16px 48px",
                                    fontSize: 16,
                                    textDecoration: "none"
                                }}
                            >
                                All Blogs
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Added WP Blog styles inside component to ensure headings/lists format correctly without needing global styles */}
            <style>{`
                .wp-blog-content h2 { font-size: 28px; font-weight: 600; margin: 40px 0 20px; color: #000; }
                .wp-blog-content h3 { font-size: 24px; font-weight: 600; margin: 32px 0 16px; color: #000; }
                .wp-blog-content h4 { font-size: 20px; font-weight: 600; margin: 24px 0 12px; color: #000; }
                .wp-blog-content p { margin-bottom: 24px; }
                .wp-blog-content ul { padding-left: 20px; margin-bottom: 24px; }
                .wp-blog-content ol { padding-left: 20px; margin-bottom: 24px; }
                .wp-blog-content li { margin-bottom: 12px; }
                .wp-blog-content a { color: var(--primary); text-decoration: none; font-weight: 500; }
                .wp-blog-content a:hover { text-decoration: underline; }
                .wp-blog-content img { max-width: 100%; height: auto; border-radius: 8px; margin: 32px 0; }
                
                @media(max-width: 768px) {
                    .wp-blog-content h2 { font-size: 24px; }
                    .wp-blog-content h3 { font-size: 20px; }
                }
            `}</style>
        </main>
    );
};
