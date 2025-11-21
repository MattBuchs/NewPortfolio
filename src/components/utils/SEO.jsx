import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export default function SEO({
    title = "Matt Buchs - Développeur Web Full Stack",
    description = "Portfolio de Matt Buchs - Développeur Web Full Stack spécialisé en React, Node.js et JavaScript. Découvrez mes projets et compétences en développement web moderne.",
    keywords = "Matt Buchs, développeur web, full stack, React, JavaScript, portfolio",
    image = "https://matt-buchs.me/img/Logo-Skroma.jpg",
    url = "https://matt-buchs.me",
    type = "website",
}) {
    const siteTitle = title.includes("Matt Buchs")
        ? title
        : `${title} | Matt Buchs`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
};
