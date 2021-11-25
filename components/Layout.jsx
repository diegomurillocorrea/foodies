import Head from "next/head";

const Layout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>Foodies | {title}</title>
            </Head>
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;