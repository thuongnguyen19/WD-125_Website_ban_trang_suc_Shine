import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";


const Layoutweb = () => {
    const [hideHeader, setHideHeader] = useState<boolean>(false);
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    const [showMenu19, setShowMenu19] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop =
                window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
                setHideHeader(true); // Hide Header when scrolling down
            } else if (
                currentScrollTop < lastScrollTop ||
                currentScrollTop <= 100
            ) {
                setHideHeader(false);
                if (
                    currentScrollTop < lastScrollTop &&
                    currentScrollTop > 100
                ) {
                    setShowMenu19(true); // Show Menu 19 when scrolling up
                } else {
                    setShowMenu19(false); // Hide Menu 19 otherwise
                }
            }

            setLastScrollTop(currentScrollTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <>
            <div
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                    transition: "top 0.3s",
                }}
            >
                {!hideHeader && <Header />}
                <Header2  />
            </div>
            <Outlet />
            <Footer />
        </>
    );
};

export default Layoutweb;
