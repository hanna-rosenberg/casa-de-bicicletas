import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";
import NavPopUpMenu from "../NavPopUpMenu/NavPopUpMenu";
import styles from "./NavBar.module.css";
import { usePage } from "@inertiajs/inertia-react";

export default function NavBar() {
    const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);
    const { url, component } = usePage();
    return (
        <div className={styles.navBar}>
            <Link className={styles.logo} href="/">
                <svg
                    width="152"
                    height="77"
                    viewBox="0 0 152 77"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M25.1283 49.7992C18.3685 49.8483 12.5453 47.5939 7.65875 43.0359C2.77188 38.4346 0.303903 32.754 0.254824 25.9942C0.20543 19.191 2.28734 13.4774 6.50054 8.8534C10.7134 4.18602 16.1348 1.82827 22.7646 1.78013C27.9645 1.74238 33.2356 2.5708 38.5781 4.26539L37.752 6.87145C32.5408 5.34925 27.5519 4.60545 22.7854 4.64006C17.1089 4.68127 12.4871 6.75155 8.92011 10.8509C5.35311 14.9502 3.591 19.9465 3.63379 25.8397C3.67658 31.7328 5.79302 36.7443 9.98311 40.874C14.2162 44.96 19.2577 46.9818 25.1075 46.9393C30.2207 46.9022 34.635 46.0901 38.3502 44.5031L39.3412 46.706C37.7015 47.6712 35.5403 48.4236 32.8574 48.9631C30.218 49.5023 27.6416 49.781 25.1283 49.7992ZM52.7784 34.1931L46.8397 48.8616L43.7848 48.8838L61.1561 6.31152L62.9111 6.29878L81.0288 48.6134L77.7139 48.6374L71.4979 34.0572L52.7784 34.1931ZM61.906 11.1162C61.2702 13.0709 60.697 14.7001 60.1865 16.0038L53.7999 31.6506L70.4395 31.5298L63.8919 16.0419C62.8776 13.6225 62.2157 11.9806 61.906 11.1162ZM97.8095 8.12545C95.4695 8.14244 93.567 8.7196 92.1019 9.85694C90.6368 10.9943 89.9116 12.5812 89.9264 14.6179C89.9434 16.9578 90.9336 19.0523 92.8971 20.9015C94.2935 22.2347 96.0805 23.6518 98.2581 25.1526C100.479 26.6099 102.003 27.6605 102.831 28.3045C103.659 28.9485 104.662 29.8296 105.84 30.9478C107.979 33.0556 109.058 35.4962 109.079 38.2694C109.105 41.866 107.911 44.6047 105.498 46.4856C103.128 48.3229 99.7765 49.2573 95.4433 49.2887C91.1534 49.3199 87.5486 48.2193 84.629 45.9871L86.1724 43.7009C89.1335 45.6728 92.2607 46.6468 95.5539 46.6228C98.8471 46.5989 101.399 45.8871 103.209 44.4872C105.062 43.0871 105.979 41.1303 105.961 38.6171C105.945 36.4505 104.999 34.464 103.123 32.6575C101.813 31.367 100.048 29.9714 97.8272 28.4709C95.6496 26.97 94.1251 25.8977 93.2537 25.254C92.382 24.567 91.3571 23.6644 90.179 22.5462C87.953 20.3523 86.8294 17.8038 86.8084 14.9005C86.7873 11.9972 87.7891 9.71491 89.8137 8.0535C91.8817 6.39178 94.7357 5.5477 98.3756 5.52128C102.015 5.49485 105.292 6.18608 108.206 7.59496L107.118 10.0079C104.422 8.72746 101.319 8.09997 97.8095 8.12545ZM123.109 33.6825L117.17 48.351L114.115 48.3731L131.486 5.80089L133.241 5.78815L151.359 48.1027L148.044 48.1268L141.828 33.5465L123.109 33.6825ZM132.236 10.6056C131.6 12.5602 131.027 14.1894 130.517 15.4932L124.13 31.14L140.77 31.0192L134.222 15.5313C133.208 13.1119 132.546 11.47 132.236 10.6056ZM23.7404 76.03L23.6226 59.8054L24.7726 59.7971L24.8827 74.9717L32.3325 74.9176L32.3402 75.9676L23.7404 76.03ZM36.5109 70.3121L34.2268 75.9539L33.0519 75.9624L39.7332 59.5885L40.4081 59.5836L47.3765 75.8584L46.1015 75.8677L43.7107 70.2599L36.5109 70.3121ZM40.0216 61.4364C39.777 62.1882 39.5566 62.8148 39.3602 63.3163L36.9038 69.3343L43.3037 69.2878L40.7854 63.3309C40.3953 62.4004 40.1407 61.7689 40.0216 61.4364ZM67.1956 74.8645L66.5206 74.8694L61.7124 63.429C61.5091 62.9805 61.3053 62.4569 61.101 61.8584C61.1011 61.8751 61.0851 61.9668 61.053 62.1337C61.0375 62.3005 61.0142 62.5257 60.9829 62.8093C60.9515 63.0762 60.9198 63.3014 60.8878 63.485L59.102 75.7733L57.977 75.7814L60.5084 59.4376L61.1834 59.4327L66.3202 71.3707C66.7274 72.3678 66.9312 72.8913 66.9316 72.9413C67.0457 72.5905 67.267 72.0722 67.5953 71.3865L73.1331 59.346L73.8081 59.3411L76.4015 75.6477L75.2015 75.6564L73.3371 63.3446C73.2145 62.5288 73.1522 61.9876 73.1503 61.7209L72.4373 63.3761L67.1956 74.8645ZM81.456 69.9858L79.1719 75.6275L77.997 75.6361L84.6783 59.2621L85.3533 59.2572L92.3216 75.5321L91.0466 75.5413L88.6559 69.9335L81.456 69.9858ZM84.9667 61.1101C84.7221 61.8619 84.5017 62.4885 84.3053 62.9899L81.849 69.0079L88.2488 68.9615L85.7305 63.0046C85.3404 62.0741 85.0858 61.4426 84.9667 61.1101ZM95.6135 75.5082L95.4962 59.3586C96.9287 59.2315 98.1449 59.1644 99.1449 59.1571C100.678 59.146 101.948 59.5368 102.953 60.3295C103.959 61.1055 104.467 62.2269 104.478 63.6935C104.485 64.6768 104.208 65.5872 103.648 66.4246C103.087 67.262 102.45 67.9417 101.738 68.4635C103.74 71.0824 104.976 72.6485 105.447 73.1617C106.404 74.1381 107.441 74.6889 108.559 74.8142L108.539 75.5893C107.606 75.5794 106.847 75.4516 106.262 75.2059C105.676 74.9434 105.09 74.506 104.502 73.8936C103.931 73.2811 102.661 71.6319 100.691 68.9461C99.341 68.9559 98.0158 68.9239 96.7152 68.85L96.7635 75.4998L95.6135 75.5082ZM100.059 68.0007C100.709 67.996 101.406 67.5576 102.15 66.6855C102.893 65.8134 103.261 64.8024 103.253 63.6524C103.244 62.5024 102.846 61.6303 102.059 61.036C101.271 60.4417 100.252 60.1491 99.0021 60.1582C98.3355 60.163 97.5524 60.202 96.6529 60.2752L96.7083 67.9C97.9089 67.9746 99.0258 68.0082 100.059 68.0007ZM110.823 75.3977L110.705 59.1732L111.855 59.1648L111.973 75.3894L110.823 75.3977ZM117.976 75.3458L117.858 59.0212L118.408 59.0172L129.146 71.1896C129.533 71.6201 129.886 72.0509 130.206 72.4819C130.542 72.8962 130.719 73.1116 130.735 73.1281C130.699 72.7284 130.677 71.9452 130.668 70.7785L130.583 59.0289L131.733 59.0205L131.852 75.3451L131.302 75.3491L120.361 62.9782L118.974 61.3132C119.01 61.6463 119.032 62.4295 119.041 63.6628L119.126 75.3375L117.976 75.3458ZM138.608 69.5709L136.324 75.2126L135.149 75.2211L141.83 58.8472L142.505 58.8423L149.473 75.1171L148.198 75.1264L145.808 69.5186L138.608 69.5709ZM142.119 60.6951C141.874 61.4469 141.654 62.0736 141.457 62.575L139.001 68.593L145.401 68.5465L142.882 62.5897C142.492 61.6591 142.238 61.0276 142.119 60.6951Z"
                        fill="#433535"
                    />
                </svg>
            </Link>
            {/* HamburgerMenu */}
            <div className={styles.hamburgerMenu}>
                <button
                    onClick={() => setNavMenuIsOpen(true)}
                    className={styles.hamburgerButton}
                >
                    <div className={styles.hamburgerBar}></div>
                    <div className={styles.hamburgerBar}></div>
                    <div className={styles.hamburgerBar}></div>
                </button>
            </div>
            {navMenuIsOpen && (
                <NavPopUpMenu navMenuIsOpenState={setNavMenuIsOpen} />
            )}
            <div className={styles.navLinks}>
                <Link
                    href="/boka"
                    className={url === "/boka" ? styles.active : ""}
                >
                    BOKA &#8595;
                </Link>
                <Link
                    href="/cykling"
                    className={url === "/cykling" ? styles.active : ""}
                >
                    CYKLING &#8593;
                </Link>
                <Link
                    href="/galleri"
                    className={url === "/galleri" ? styles.active : ""}
                >
                    GALLERI &#8595;
                </Link>
                <Link
                    href="/om-oss"
                    className={url === "/om-oss" ? styles.active : ""}
                >
                    OM OSS &#8593;
                </Link>
                <Link
                    href="/kontakt"
                    className={url === "/kontakt" ? styles.active : ""}
                >
                    KONTAKT &#8595;
                </Link>
            </div>
        </div>
    );
}
