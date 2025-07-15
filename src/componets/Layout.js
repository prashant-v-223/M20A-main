import Head from 'next/head';
import { useEffect, useState } from 'react';

const Layout = ({ children, data }) => {
    const [facebookPixelScript, setFacebookPixelScript] = useState('');
    const [facebookPixelNoscript, setFacebookPixelNoscript] = useState('');
    const [facebookPixelID, setFacebookPixelID] = useState('');

    useEffect(() => {
        if (data?.FacebookPixel) {
            // Extract and clean <script> content
            const scriptMatch = data.FacebookPixel.match(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi);
            const cleanedScript = scriptMatch ? scriptMatch.join('').replace(/<script>|<\/script>/gi, '') : '';
            setFacebookPixelScript(cleanedScript);

            // Extract <noscript> content
            const noscriptMatch = data.FacebookPixel.match(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi);
            const noscriptContent = noscriptMatch ? noscriptMatch.join('') : '';
            setFacebookPixelNoscript(noscriptContent);

            // Extract pixel ID
            const idMatch = noscriptContent.match(/tr\?id=([0-9]+)/);
            const extractedID = idMatch ? idMatch[1] : '';
            setFacebookPixelID(extractedID);
        }
    }, [data?.FacebookPixel]);

    return (
        <>
            <Head>
                {/* Facebook SDK */}
                <script
                    async
                    defer
                    crossOrigin="anonymous"
                    src="https://connect.facebook.net/en_US/sdk.js"
                />
                
                {/* Facebook Pixel Script */}
                {facebookPixelScript && (
                    <script dangerouslySetInnerHTML={{ __html: facebookPixelScript }} />
                )}
                <script src="https://cdn.tailwindcss.com"></script>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"></link>
            </Head>

            {/* Facebook Pixel Noscript */}
            {facebookPixelID && (
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src={`https://www.facebook.com/tr?id=${facebookPixelID}&ev=PageView&noscript=1`}
                        alt=""
                    />
                </noscript>
            )}

            {children}
        </>
    );
};

export default Layout;
